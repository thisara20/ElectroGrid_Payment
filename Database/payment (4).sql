-- phpMyAdmin SQL Dump
-- version 4.2.7.1
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: May 14, 2022 at 08:10 PM
-- Server version: 5.6.20
-- PHP Version: 5.5.15

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8 */;

--
-- Database: `bill`
--

-- --------------------------------------------------------

--
-- Table structure for table `payment`
--

CREATE TABLE IF NOT EXISTS `payment` (
`payID` int(11) NOT NULL,
  `payDate` varchar(10) NOT NULL,
  `name` varchar(40) NOT NULL,
  `email` varchar(50) NOT NULL,
  `amount` float NOT NULL,
  `accNo` varchar(15) NOT NULL,
  `ccv` int(3) NOT NULL,
  `expireDate` varchar(12) NOT NULL
) ENGINE=InnoDB  DEFAULT CHARSET=latin1 AUTO_INCREMENT=20 ;

--
-- Dumping data for table `payment`
--

INSERT INTO `payment` (`payID`, `payDate`, `name`, `email`, `amount`, `accNo`, `ccv`, `expireDate`) VALUES
(6, '2009.9.12', 'L.A.Fonseka', 'fonseka1@gmail.com', 1345, '1256734543', 333, '2020.01.17'),
(8, '2018.9.22', 'Ls.A.upiseksha', 'upee23@gmail.com', 1105.08, '121122243', 355, '2024.01.17'),
(10, '2018.9.29', 'updaw.tedd', 'nimalupdated40gmail.com', 1005.08, '121198743', 319, '2024.01.20'),
(11, '2018.9.29', 'L.A.wNimal', 'nimal1e340gmail.com', 1105.08, '121198743', 310, '2024.01.17'),
(13, '2021.9.29', ' P.Omesh', 'omesh12@gmail.com', 455.08, '121345643', 567, '2025.01.19'),
(14, '2021.9.29', 'omali', 'omalie3@gmail.com', 1115.08, '121222243', 344, '2025.01.19'),
(16, '2021.9.29', 'M.silva', 'manee@gmail.com', 2315.08, '5678892243', 356, '2023.01.19'),
(17, '2021.9.29', 'pamueshhhsilva', 'omee3@gmail.com', 1115.08, '121222243', 322, '2025.01.19');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `payment`
--
ALTER TABLE `payment`
 ADD PRIMARY KEY (`payID`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `payment`
--
ALTER TABLE `payment`
MODIFY `payID` int(11) NOT NULL AUTO_INCREMENT,AUTO_INCREMENT=20;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
