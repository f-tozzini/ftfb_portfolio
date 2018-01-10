-- phpMyAdmin SQL Dump
-- version 4.7.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 09, 2018 at 12:34 AM
-- Server version: 5.6.35
-- PHP Version: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `db_portfolioprojects`
--

-- --------------------------------------------------------

--
-- Table structure for table `tbl_projects`
--

CREATE TABLE `tbl_projects` (
  `projects_id` smallint(5) UNSIGNED NOT NULL,
  `projects_title` varchar(100) NOT NULL,
  `projects_image` varchar(150) NOT NULL,
  `projects_desc` varchar(1000) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_projects`
--

INSERT INTO `tbl_projects` (`projects_id`, `projects_title`, `projects_image`, `projects_desc`) VALUES
(1, 'LEDC Project', 'image', 'LEDC Project Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula consequat ultrices. Morbi cursus efficitur est, non suscipit eros aliquam quis. Suspendisse potenti. Quisque ut leo ut mauris molestie gravida vitae ac augue. Quisque semper tortor aliquet dictum hendrerit. Sed vel lobortis neque. Duis facilisis lorem sed interdum venenatis.'),
(2, 'OBJ', 'image', 'OBJ Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula consequat ultrices. Morbi cursus efficitur est, non suscipit eros aliquam quis. Suspendisse potenti. Quisque ut leo ut mauris molestie gravida vitae ac augue. Quisque semper tortor aliquet dictum hendrerit. Sed vel lobortis neque. Duis facilisis lorem sed interdum venenatis.'),
(3, 'Angelica Boutique', 'image', 'Angelica Boutique Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula consequat ultrices. Morbi cursus efficitur est, non suscipit eros aliquam quis. Suspendisse potenti. Quisque ut leo ut mauris molestie gravida vitae ac augue. Quisque semper tortor aliquet dictum hendrerit. Sed vel lobortis neque. Duis facilisis lorem sed interdum venenatis.'),
(4, 'CTB Branding', 'image', 'CTB Branding Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula consequat ultrices. Morbi cursus efficitur est, non suscipit eros aliquam quis. Suspendisse potenti. Quisque ut leo ut mauris molestie gravida vitae ac augue. Quisque semper tortor aliquet dictum hendrerit. Sed vel lobortis neque. Duis facilisis lorem sed interdum venenatis.'),
(5, 'FTFB Branding', 'image', 'FTFB Branding Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula consequat ultrices. Morbi cursus efficitur est, non suscipit eros aliquam quis. Suspendisse potenti. Quisque ut leo ut mauris molestie gravida vitae ac augue. Quisque semper tortor aliquet dictum hendrerit. Sed vel lobortis neque. Duis facilisis lorem sed interdum venenatis.'),
(6, 'Grafico Designs', 'image', 'Grafico Designs Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc vehicula consequat ultrices. Morbi cursus efficitur est, non suscipit eros aliquam quis. Suspendisse potenti. Quisque ut leo ut mauris molestie gravida vitae ac augue. Quisque semper tortor aliquet dictum hendrerit. Sed vel lobortis neque. Duis facilisis lorem sed interdum venenatis.');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  ADD PRIMARY KEY (`projects_id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `tbl_projects`
--
ALTER TABLE `tbl_projects`
  MODIFY `projects_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
