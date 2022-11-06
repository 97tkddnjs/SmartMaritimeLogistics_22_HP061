#크롤링시 필요한 라이브러리 불러오기
# from curses import keyname
from bs4 import BeautifulSoup
import requests
import re
import datetime
from tqdm import tqdm
import sys


class News():
    def __init__(self) -> None:
        self.headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/98.0.4758.102"}
    
        self.start_pg = 1
        self.end_pg= 10

        self.news_titles = []
        self.news_url =[]
        self.news_contents =[]
        self.news_dates = []
        self.final_urls = []
        self.final_datas=[]
        pass
    # 페이지 url 형식에 맞게 바꾸어 주는 함수 만들기
        #입력된 수를 1, 11, 21, 31 ...만들어 주는 함수
    def makePgNum(num):
        if num == 1:
            return num
        elif num == 0:
            return num+1
        else:
            return num+9*(num-1)

    # 크롤링할 url 생성하는 함수 만들기(검색어, 크롤링 시작 페이지, 크롤링 종료 페이지)

    # 날짜별 최신순으로 정렬함
    def makeUrl(self,search ):
        # print(self.start_pg, self.end_pg)
        if self.start_pg == self.end_pg:
            start_page = News.makePgNum(self.start_pg)
            url = "https://search.naver.com/search.naver?where=news&sm=tab_pge&query=" + search + "&start=" + str(start_page)+"&sort=1"
            # print("생성url: ", url)
            return [url]
        else:
            urls = []
            for i in range(self.start_pg, self.end_pg + 1):
                page =News.makePgNum(i)
                #print("page : " ,page)
                url = "https://search.naver.com/search.naver?where=news&sm=tab_pge&query=" + search + "&start=" + str(page)+"&sort=1"
                urls.append(url)
            # print("생성url: ", urls)
            return urls    

    # html에서 원하는 속성 추출하는 함수 만들기 (기사, 추출하려는 속성값)
    def news_attrs_crawler(articles,attrs):
        attrs_content=[]
        for i in articles:
            attrs_content.append(i.attrs[attrs])
        return attrs_content

    #html생성해서 기사크롤링하는 함수 만들기(url): 링크를 반환
    def articles_crawler(self,url):
        #html 불러오기
        # print(url)
        original_html = requests.get(url,headers=self.headers)
        html = BeautifulSoup(original_html.text, "html.parser")
    
        url_naver = html.select("div.group_news > ul.list_news > li div.news_area > div.news_info > div.info_group > a.info")
        url = News.news_attrs_crawler(url_naver,'href')
        return url

    def makeList(newlist, content):
        for i in content:
            for j in i:
                newlist.append(j)
        return newlist

    def news_main(self,search_keyword):
        url = News.makeUrl(self,search_keyword)
        for i in url:
            #print("i ",i)
            tmp_url = News.articles_crawler(self,i)
            self.news_url.append(tmp_url)

        #제목, 링크, 내용 담을 리스트 생성
        news_url_1 = []
        News.makeList(news_url_1,self.news_url)
        
        for i in (range(len(news_url_1))):
            if "news.naver.com" in news_url_1[i]:
                self.final_urls.append(news_url_1[i])
            else:
                pass
        for i in tqdm(self.final_urls):
            
            
            #각 기사 html get하기
            news = requests.get(i,headers=self.headers)
            news_html = BeautifulSoup(news.text,"html.parser")

            # 뉴스 제목 가져오기
            title = news_html.select_one("#ct > div.media_end_head.go_trans > div.media_end_head_title > h2")
            if title == None:
                title = news_html.select_one("#content > div.end_ct > div > h2")

            # 뉴스 본문 가져오기
            content = news_html.select("div#dic_area")
            if content == []:
                content = news_html.select("#articeBody")

            # 기사 텍스트만 가져오기
            # list합치기
            content = ''.join(str(content))

            # html태그제거 및 텍스트 다듬기
            pattern1 = '<[^>]*>'
            title = re.sub(pattern=pattern1, repl='', string=str(title))
            content = re.sub(pattern=pattern1, repl='', string=content)
            pattern2 = """[\n\n\n\n\n// flash 오류를 우회하기 위한 함수 추가\nfunction _flash_removeCallback() {}"""
            content = content.replace(pattern2, '')

            self.news_titles.append(title)
            self.news_contents.append(content)

            try:
                html_date = news_html.select_one("div#ct> div.media_end_head.go_trans > div.media_end_head_info.nv_notrans > div.media_end_head_info_datestamp > div > span")
                news_date = html_date.attrs['data-date-time']
            except AttributeError:
                news_date = news_html.select_one("#content > div.end_ct > div > div.article_info > span > em")
                news_date = re.sub(pattern=pattern1,repl='',string=str(news_date))
            # 날짜 가져오기
            self.news_dates.append(news_date)

            # 제목 콘텐츠 url 날짜 순으로
            self.final_datas.append((title,content,i,news_date))

    def show(self):
        print('news_title: ',len(self.news_titles))
        print('news_url: ',len(self.final_urls))
        print('news_contents: ',len(self.news_contents))
        print('news_dates: ',len(self.news_dates))
        print('final datas ',self.final_datas)



# ConnectionError방지
# headers = {"User-Agent": "Mozilla/5.0 (Windows NT 10.0; Win64; x64) Chrome/98.0.4758.102"}

