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
-- Table structure for table `recording_video`
--

DROP TABLE IF EXISTS `recording_video`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `recording_video` (
  `rvid` int NOT NULL AUTO_INCREMENT,
  `uid` int NOT NULL,
  `video` longtext CHARACTER SET utf8 COLLATE utf8_unicode_ci NOT NULL,
  `time` timestamp NULL DEFAULT CURRENT_TIMESTAMP,
  `camid` varchar(45) CHARACTER SET utf8 COLLATE utf8_unicode_ci DEFAULT NULL,
  PRIMARY KEY (`rvid`),
  KEY `rv_ibfk_1` (`uid`),
  CONSTRAINT `rv_ibfk_1` FOREIGN KEY (`uid`) REFERENCES `auth_user` (`id`)
) ENGINE=InnoDB AUTO_INCREMENT=12 DEFAULT CHARSET=utf8mb3 COLLATE=utf8_unicode_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `recording_video`
--

LOCK TABLES `recording_video` WRITE;
/*!40000 ALTER TABLE `recording_video` DISABLE KEYS */;
INSERT INTO `recording_video` VALUES (1,1,'videos/userRequest/AuthUser object (1)/2022-10-12_095823.mp4','2022-10-12 09:58:23','home1'),(2,1,'videos/userRequest/AuthUser object (1)/2022-10-12_104332.mp4','2022-10-12 10:43:32','home1'),(3,1,'videos/userRequest/AuthUser object (1)/2022-10-12_105322.mp4','2022-10-12 10:53:22','home1'),(4,1,'videos/userRequest/AuthUser object (1)/2022-10-13_091344.mp4','2022-10-13 09:13:44','home1'),(5,1,'videos/userRequest/AuthUser object (1)/2022-10-13_092758.mp4','2022-10-13 09:27:58','home1'),(6,1,'videos/userRequest/AuthUser object (1)/2022-10-13_093041.mp4','2022-10-13 09:30:41','home1'),(7,1,'videos/userRequest/AuthUser object (1)/2022-10-13_093135.mp4','2022-10-13 09:31:35','home1'),(8,1,'videos/userRequest/AuthUser object (1)/2022-10-13_093206.mp4','2022-10-13 09:32:06','home1'),(9,1,'videos/userRequest/AuthUser object (1)/2022-11-02_130921.mp4','2022-11-02 13:09:21','home1'),(11,4,'videos/userRequest/AuthUser object (4)/2022-11-04_211948.mp4','2022-11-04 21:19:48','dock1');
/*!40000 ALTER TABLE `recording_video` ENABLE KEYS */;
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
