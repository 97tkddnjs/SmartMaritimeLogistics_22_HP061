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
-- Table structure for table `capture_picture`
--

DROP TABLE IF EXISTS `capture_picture`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `capture_picture` (
  `cpid` int NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
  `image` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `time` timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
  `camid` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`cpid`),
  KEY `cp_ibfk_1` (`uid`),
  CONSTRAINT `cp_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=10 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `capture_picture`
--

LOCK TABLES `capture_picture` WRITE;
/*!40000 ALTER TABLE `capture_picture` DISABLE KEYS */;
INSERT INTO `capture_picture` VALUES (1,1,'images/userRequest/AuthUser object (1)/2022-10-11_235356.jpg','2022-10-11 23:53:56','home1'),(3,1,'images/userRequest/AuthUser object (1)/2022-11-02_130607.jpg','2022-11-02 13:06:07','home1'),(4,1,'images/userRequest/AuthUser object (1)/2022-11-02_130856.jpg','2022-11-02 13:08:56','home1'),(5,1,'images/userRequest/AuthUser object (1)/2022-11-02_130932.jpg','2022-11-02 13:09:32','home1'),(7,1,'images/userRequest/AuthUser object (1)/2022-11-04_152103.jpg','2022-11-04 15:21:03','home2'),(8,4,'images/userRequest/AuthUser object (4)/2022-11-04_211935.jpg','2022-11-04 21:19:35','dock1'),(9,4,'images/userRequest/AuthUser object (4)/2022-11-05_120829.jpg','2022-11-05 12:08:29','dock1');
/*!40000 ALTER TABLE `capture_picture` ENABLE KEYS */;
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

-- Dump completed on 2022-11-06 14:03:43
