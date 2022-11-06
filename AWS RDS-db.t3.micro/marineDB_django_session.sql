-- MySQL dump 10.13  Distrib 8.0.28, for Win64 (x86_64)
--
-- Host: marine.ctzsnnhkpfq4.ap-northeast-2.rds.amazonaws.com    Database: marineDB
-- ------------------------------------------------------
-- Server version	8.0.28

/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!50503 SET NAMES utf8 */;
/*!40103 SET @OLD_TIME_ZONE=@@TIME_ZONE */;
/*!40103 SET TIME_ZONE='+00:00' */;
/*!40014 SET @OLD_UNIQUE_CHECKS=@@UNIQUE_CHECKS, UNIQUE_CHECKS=0 */;
/*!40014 SET @OLD_FOREIGN_KEY_CHECKS=@@FOREIGN_KEY_CHECKS, FOREIGN_KEY_CHECKS=0 */;
/*!40101 SET @OLD_SQL_MODE=@@SQL_MODE, SQL_MODE='NO_AUTO_VALUE_ON_ZERO' */;
/*!40111 SET @OLD_SQL_NOTES=@@SQL_NOTES, SQL_NOTES=0 */;
SET @MYSQLDUMP_TEMP_LOG_BIN = @@SESSION.SQL_LOG_BIN;
SET @@SESSION.SQL_LOG_BIN= 0;

--
-- GTID state at the beginning of the backup 
--

SET @@GLOBAL.GTID_PURGED=/*!80000 '+'*/ '';

--
-- Table structure for table `django_session`
--

DROP TABLE IF EXISTS `django_session`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `django_session` (
  `session_key` varchar(40) NOT NULL,
  `session_data` longtext NOT NULL,
  `expire_date` datetime(6) NOT NULL,
  PRIMARY KEY (`session_key`),
  KEY `django_session_expire_date_a5c62663` (`expire_date`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `django_session`
--

LOCK TABLES `django_session` WRITE;
/*!40000 ALTER TABLE `django_session` DISABLE KEYS */;
INSERT INTO `django_session` VALUES ('1f92qh511adm5oor1x22i6qu7jkka5p5','eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZW1wMSIsImVtYWlsIjoidGVtcDFAbmF2ZXIuY29tIn0:1oq48v:YHhPMDl5tHlS9BdbapVuAXNFfFCa_7x9DNozZZIY94Y','2022-11-16 12:10:17.353056'),('1ouikmtet12u4cxqyzwgoyiusgrzrezh','eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZW1wMSIsImVtYWlsIjoidGVtcDFAbmF2ZXIuY29tIn0:1ofrHS:iDY5zWbKAhEbhjONYCUqyZBo2bAuUBYexutP1uGyzps','2022-10-19 08:24:54.256844'),('3949meuvzk04hkq3ov7fnyai18zn58me','eyJlbWFpbCI6InRlbXAxQG5hdmVyLmNvbSJ9:1oPGTr:t7fn12Xt1fC2qxAYw9iElAdBap28A5Fd6mYfoGIEeD8','2022-09-03 13:53:07.368282'),('3eow8ocbwxrvuvvta4t1e3ak0yvtmcwy','eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZW1wMSIsImVtYWlsIjoidGVtcDFAbmF2ZXIuY29tIn0:1opIbx:Cr6LNzgV1HHGLuNpvlmeAmXcLLcPdMffnf01ICocVQI','2022-11-14 09:25:05.150733'),('5xxvglgtn17pnvbkrl6jcm3pvy6ydao0','eyJpZCI6MiwidXNlcm5hbWUiOiJsc3ciLCJlbWFpbCI6InRrZGRuanMyMDZAZ21haWwuY29tIn0:1oVUNK:jHffH5YEQ8p6LUuP8oBOKIjh052xezbQU9ydCaMAek0','2022-09-20 17:56:06.119747'),('6kdbdfor5lb2waulb6sjo3e0niz4gxu7','eyJpZCI6MiwidXNlcm5hbWUiOiJsc3ciLCJlbWFpbCI6InRrZGRuanMyMDZAZ21haWwuY29tIn0:1oYT0j:i1iRTo-3sJrqJGkIAjzD6vsyLrul4YYU2IWDQVyb4_4','2022-09-28 23:05:05.639367'),('7p3lmukjwu4fs5qlcn0fhprtok0xv0c7','eyJpZCI6MiwidXNlcm5hbWUiOiJsc3ciLCJlbWFpbCI6InRrZGRuanMyMDZAZ21haWwuY29tIn0:1ofjpS:UdaKtrKCRgr352A35DJ_pwE_90vbgK61HxWQ73ml5d4','2022-10-19 00:27:30.960783'),('alt8fujsr0qifll4em1gpct2fh1m3fjk','eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZW1wMSIsImVtYWlsIjoidGVtcDFAbmF2ZXIuY29tIn0:1ol2w7:XhyoKb1BKsAt930dcJ3fAW6pDiRPBUKb0IGDb8k85gI','2022-11-02 15:52:19.607983'),('d5yzngedegzvpp5n7e6oofgdc7yo1mqg','eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZW1wMSIsImVtYWlsIjoidGVtcDFAbmF2ZXIuY29tIn0:1oqurs:WfYEaFEXiq26zqrLaSDP1www9f-uwA3OIMcNZP929Jk','2022-11-18 20:28:12.556181'),('fvw01h79ap0scdsxy3mqnrhx3s5hfrrv','eyJlbWFpbCI6Im1hbmFnZXIxQG5hdmVyLmNvbSIsImlkIjo0LCJ1c2VybmFtZSI6Im1hbmFnZXIxIn0:1oqvR6:7O9TYjmcT7csD7I4fc3_R3Sldb6G6F2XylqqrtEinnc','2022-11-18 21:04:36.950625'),('i8n3v8jhnu12eawc62w0ao604cu5rm2s','eyJlbWFpbCI6InRrZGRuanMyMDZAZ21haWwuY29tIiwiaWQiOjIsInVzZXJuYW1lIjoibHN3In0:1op4et:YkMqxYNr6twn45UIaJ6AU46Jz20wH4XrGy0JxmGnjz0','2022-11-13 18:31:11.258944'),('jsa3s94it0cgy8zc3i3jexlhbx2o7o4q','eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZW1wMSIsImVtYWlsIjoidGVtcDFAbmF2ZXIuY29tIn0:1oN9Fc:mD8fTPOkxNARGo4rjwtjQazrvzfN5B7p0g2iQOYv8U4','2022-08-28 17:45:40.032683'),('oz0f04xzi0lc3upvkamukcmkzuk2up0c','eyJpZCI6MiwidXNlcm5hbWUiOiJsc3ciLCJlbWFpbCI6InRrZGRuanMyMDZAZ21haWwuY29tIn0:1ofGyx:wjIL7cMOvOk4h8Lgz1OcT-6uEmwVECcc4tvHGH4M8QQ','2022-10-17 17:39:23.553501'),('p6sazb63bsgz1u9s4a6z4m9rcb0u161c','eyJpZCI6MiwidXNlcm5hbWUiOiJsc3ciLCJlbWFpbCI6InRrZGRuanMyMDZAZ21haWwuY29tIn0:1ohYyc:dhdedl6CP1CFF1tTwEN8pWmENUIwLTRd57sRCV1oX-o','2022-10-24 01:16:30.291773'),('qu0wsh2n52fft46w1jb8i4hzaac1tgj4','eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZW1wMSIsImVtYWlsIjoidGVtcDFAbmF2ZXIuY29tIn0:1oOXLj:edZwQjk-vkolcgQCJRQwwmccrkQPtK1AbcMS5kIV1xU','2022-09-01 13:41:43.240767'),('ragui81u4286uwcqf19thx4g6ztpfxpy','eyJlbWFpbCI6InRrZGRuanMyMDZAZ21haWwuY29tIiwiaWQiOjIsInVzZXJuYW1lIjoibHN3In0:1oQ7sf:aYsT_BsUYZWDyZk7l5gvCub1oo8vyUzr45efNRnL6x8','2022-09-05 22:54:17.179621'),('t2sheorpolnbkkb450c0n263t796zm0c','eyJlbWFpbCI6InRrZGRuanMyMDZAZ21haWwuY29tIiwiaWQiOjIsInVzZXJuYW1lIjoibHN3In0:1oOBVe:nyNRgsPLptnkpqA3Ud7i7wUzZ0WUXPHpPymZM6fl2N8','2022-08-31 14:22:30.058837'),('t82v0fce2dwj04pdn9wokttrkxe8lbmv','eyJpZCI6NCwidXNlcm5hbWUiOiJtYW5hZ2VyMSIsImVtYWlsIjoibWFuYWdlcjFAbmF2ZXIuY29tIn0:1oqz6w:B81f-CR0FHScfdty9CfHrPofFJeVYs5tYh9iryWBDkU','2022-11-19 01:00:02.168206'),('tzt2dh2yp4a7exsfv1w71p414yq70fom','eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZW1wMSIsImVtYWlsIjoidGVtcDFAbmF2ZXIuY29tIn0:1ofibC:dxWYlO28ZEdo9aXGax-iGySzbymJYlZTILcZgCqNYe8','2022-10-18 23:08:42.391181'),('v166382dyzrczzb9u5blrt0y99u9cxxu','eyJpZCI6MiwidXNlcm5hbWUiOiJsc3ciLCJlbWFpbCI6InRrZGRuanMyMDZAZ21haWwuY29tIn0:1opMcP:mQp1twUbn1apg7iVrlE2bmsh6MqKmyFXyjK7NRssss0','2022-11-14 13:41:49.709892'),('x5rvq7lldti8h9ktx7nji7cyz81oetqi','eyJlbWFpbCI6InRrZGRuanMyMDZAZ21haWwuY29tIiwiaWQiOjIsInVzZXJuYW1lIjoibHN3In0:1oP0uh:aS85B3d86ty_gakamseUyn5XYg_dSVVKIVnkJJUwNGY','2022-09-02 21:15:47.569376'),('y7r17fvdhpkocuht7opyb8m0e37nc440','eyJpZCI6MiwidXNlcm5hbWUiOiJsc3ciLCJlbWFpbCI6InRrZGRuanMyMDZAZ21haWwuY29tIn0:1oOHNX:ydoZGKNsMaJiB9k7TQnwoNBDPtEr8OcUL-S_RsD5u7I','2022-08-31 20:38:31.413407'),('ziqsglerpm1odof4w9am2rlkgtb8i6gl','eyJpZCI6MSwidXNlcm5hbWUiOiJ0ZW1wMSIsImVtYWlsIjoidGVtcDFAbmF2ZXIuY29tIn0:1ohkmp:hzuCXWI_qF0qjgef5JtecQl2Oux9VGXv5-s2Ejfew1o','2022-10-24 13:53:07.820187');
/*!40000 ALTER TABLE `django_session` ENABLE KEYS */;
UNLOCK TABLES;
SET @@SESSION.SQL_LOG_BIN = @MYSQLDUMP_TEMP_LOG_BIN;
/*!40103 SET TIME_ZONE=@OLD_TIME_ZONE */;

/*!40101 SET SQL_MODE=@OLD_SQL_MODE */;
/*!40014 SET FOREIGN_KEY_CHECKS=@OLD_FOREIGN_KEY_CHECKS */;
/*!40014 SET UNIQUE_CHECKS=@OLD_UNIQUE_CHECKS */;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
/*!40111 SET SQL_NOTES=@OLD_SQL_NOTES */;

-- Dump completed on 2022-11-06 14:03:35
