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
-- Table structure for table `weather`
--

DROP TABLE IF EXISTS `weather`;
/*!40101 SET @saved_cs_client     = @@character_set_client */;
/*!50503 SET character_set_client = utf8mb4 */;
CREATE TABLE `weather` (
  `port_reg_time` varchar(45) NOT NULL,
  `pty` varchar(45) DEFAULT NULL,
  `sky` varchar(45) DEFAULT NULL,
  `vec` int DEFAULT NULL,
  `wsd` int DEFAULT NULL,
  `t1h` int DEFAULT NULL,
  PRIMARY KEY (`port_reg_time`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;
/*!40101 SET character_set_client = @saved_cs_client */;

--
-- Dumping data for table `weather`
--

LOCK TABLES `weather` WRITE;
/*!40000 ALTER TABLE `weather` DISABLE KEYS */;
INSERT INTO `weather` VALUES ('202211050200_부산','없음','맑음',336,6,5),('202211050200_울산','없음','맑음',341,3,6),('202211050200_인천','없음','구름많음',41,1,2),('202211050300_부산','없음','맑음',334,6,5),('202211050300_울산','없음','맑음',337,4,6),('202211050300_인천','없음','구름많음',35,1,3),('202211050400_부산','없음','맑음',333,6,5),('202211050400_울산','없음','맑음',328,4,5),('202211050400_인천','없음','맑음',13,2,3),('202211050500_부산','없음','맑음',332,6,6),('202211050500_울산','없음','맑음',319,4,3),('202211050500_인천','없음','맑음',357,2,4),('202211050600_부산','없음','맑음',330,5,6),('202211050600_울산','없음','맑음',315,5,3),('202211050600_인천','없음','맑음',355,2,4),('202211050700_부산','없음','맑음',331,5,6),('202211050700_울산','없음','맑음',313,5,3),('202211050700_인천','없음','맑음',358,2,4),('202211050900_부산','없음','맑음',322,5,7),('202211050900_울산','없음','맑음',345,4,8),('202211050900_인천','없음','맑음',146,1,6),('202211051000_부산','없음','맑음',318,5,9),('202211051000_울산','없음','맑음',342,4,12),('202211051000_인천','없음','맑음',164,1,8),('202211051100_부산','없음','맑음',320,5,12),('202211051100_울산','없음','맑음',339,4,12),('202211051100_인천','없음','맑음',208,1,9),('202211051200_부산','없음','맑음',326,4,14),('202211051200_울산','없음','맑음',335,4,14),('202211051200_인천','없음','맑음',252,1,10),('202211051300_부산','없음','맑음',330,4,16),('202211051300_울산','없음','맑음',333,4,15),('202211051300_인천','없음','맑음',253,2,11),('202211051400_부산','없음','맑음',331,4,16),('202211051400_울산','없음','맑음',330,3,15),('202211051400_인천','없음','맑음',253,3,12);
/*!40000 ALTER TABLE `weather` ENABLE KEYS */;
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

-- Dump completed on 2022-11-06 14:03:42
