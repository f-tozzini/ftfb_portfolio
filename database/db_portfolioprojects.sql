-- phpMyAdmin SQL Dump
-- version 4.7.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Generation Time: Jan 10, 2018 at 04:33 PM
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
  `projects_thumb` varchar(150) NOT NULL,
  `projects_desc` varchar(1000) NOT NULL,
  `project_lb` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `tbl_projects`
--

INSERT INTO `tbl_projects` (`projects_id`, `projects_title`, `projects_thumb`, `projects_desc`, `project_lb`) VALUES
(1, 'Choose London', 'ledc-main.jpg', 'Choose London is a project that is being developed to the London Economic Development Corporation, from London, Ontario. The campaign counts on a rebranding strategy for the city of London, and the launch of a website promoting all the best the city has to offer. Choose London is a project developed during the 3rd and 4th term for the Interactive Media Design Program, offered through Fanshawe college. \r\n\r\nCollaborators: Flavia Barretto, Barbara Bombachini, Mauricio Silveira, Emre Filiz and Eric Lee.', 'ledc-lb.jpg'),
(2, 'Odell Beckham Jr.', 'odell-main.jpg', 'The rebranding of NFL athlete and celebrity Odell Beckham Jr was briefed to our agency at Fanshawe College by Officialize. Developed on the 3rd term of the Interactive Media Design Program, the project main goal was to position Odell Beckham Jr beyond his football skills. The rebranding, website development and the creation of a clothing line was part of this project.\r\n\r\nCollaborators: Flavia Barretto, Barbara Bombachini, Mauricio Silveira, Emre Filiz and Eric Lee.', 'odell-main.jpg'),
(3, 'Angelica\'s Boutique', 'angelica-main.jpg', 'Angelica\'s boutique is a mockup website created for the final project for the 1st term for the Interactive Media Design Program, offered through Fanshawe college. The goal of the website was to be a platform where people could sell brand-name items, such as purses, accessories and shoes. It is positioned as a re-sell e-commerce, but containing only high quality items, for a fair price.', 'angelica-lb.jpg'),
(4, 'CTB Branding', 'ctb-main.jpg', 'CTB is a brand I designed for a Brazilian writer and researcher. Combining the professional\'s name initials with their personal characteristics, the idea of a T partially wrapping the other letters of the logo shows the engaging nature of the writer. ', 'ctb-lb.jpg'),
(5, 'FTFB Branding', 'ftfb-main.jpg', 'For my own personal brand, I decided to create a clean but bold design. The main goal was to mix delicate elements with colours to create a visual identity with personality. Combining the white space with a dark blue, the idea is to create contrast and a strong presence for the brand. I added the pink and purple gradients as a spice to the design, to make it look lighter and offer a friendly, trusting and comfortable vibe.', 'ftfb-lb.jpg'),
(6, 'Grafico Designs', 'grafico-main.jpg', 'Gráfico Designs was a mockup agency created for the Multimedia Authoring, for Fanshawe College. \"Gráfico\" means graphic in Portuguese, and the main idea was to show the multicultural roots of the project\'s collaborators, as well as their web design skills.\r\n\r\nCollaborators: Flavia Barretto, Jennifer Rozman and Katrina Dorsett.', 'grafico-lb.jpg');

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
