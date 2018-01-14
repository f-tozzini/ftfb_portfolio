-- phpMyAdmin SQL Dump
-- version 4.7.2
-- https://www.phpmyadmin.net/
--
-- Host: localhost
-- Tempo de geração: 14/01/2018 às 21:24
-- Versão do servidor: 5.6.35
-- Versão do PHP: 7.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Banco de dados: `db_portfolioprojects`
--

-- --------------------------------------------------------

--
-- Estrutura para tabela `tbl_projects`
--

CREATE TABLE `tbl_projects` (
  `projects_id` smallint(5) UNSIGNED NOT NULL,
  `projects_title` varchar(100) NOT NULL,
  `projects_thumb` varchar(150) NOT NULL,
  `projects_desc` varchar(1000) NOT NULL,
  `project_lb` varchar(150) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Fazendo dump de dados para tabela `tbl_projects`
--

INSERT INTO `tbl_projects` (`projects_id`, `projects_title`, `projects_thumb`, `projects_desc`, `project_lb`) VALUES
(1, 'Choose London', 'ledc-main.jpg', 'Choose London is a project that is being developed to the London Economic Development Corporation, from London, Ontario. The campaign counts on a rebranding strategy for the city of London, and the launch of a website promoting all the best the city has to offer. Choose London is a project developed during the 3rd and 4th term for the Interactive Media Design Program, offered through Fanshawe college. \r\nCollaborators: Flavia Barretto, Barbara Bombachini, Mauricio Silveira, Emre Filiz and Eric Lee.', 'ledc-lb.jpg'),
(2, 'Lord of the Rings 15th Anniversary', 'lotr-main.jpg', 'The Fellowship of the Ring\", I developed a promotional website with a contest for all fans. The platform communicates the steps to participate the contest and offers some information about the movie. The user would sign up to the website and record a video answering the question: What makes you the biggest LOTR\'s fan? The best video would win a private re-release movie session with all LOTR\'s cast. ', 'lotr-lb.jpg'),
(3, 'Angelica\'s Boutique', 'angelica-main.jpg', 'Angelica\'s boutique is a mockup website created for the final project for the 1st term for the Interactive Media Design Program, offered through Fanshawe college. The goal of the website was to be a platform where people could sell brand-name items, such as purses, accessories and shoes. It is positioned as a re-sell e-commerce, but containing only high quality items, for a fair price.', 'angelica-lb.jpg'),
(4, 'CTB Branding', 'ctb-main.jpg', 'CTB is a brand I designed for a Brazilian writer and researcher. Combining the professional\'s name initials with their personal characteristics, the idea of a T partially wrapping the other letters of the logo shows the engaging nature of the writer. ', 'ctb-lb.jpg'),
(5, 'FTFB Branding', 'ftfb-main.jpg', 'For my own personal brand, I decided to create a clean but bold design. The main goal was to mix delicate elements with colours to create a visual identity with personality. Combining the white space with a dark blue, the idea is to create contrast and a strong presence for the brand. I added the pink and purple gradients as a spice to the design, to make it look lighter and offer a friendly, trusting and comfortable vibe.', 'ftfb-lb.jpg'),
(6, 'Grafico Designs', 'grafico-main.jpg', 'Gráfico Designs was a mockup agency created for the Multimedia Authoring, for Fanshawe College. \"Gráfico\" means graphic in Portuguese, and the main idea was to show the multicultural roots of the project\'s collaborators, as well as their web design skills.\r\nCollaborators: Flavia Barretto, Jennifer Rozman and Katrina Dorsett.', 'grafico-lb.jpg');

--
-- Índices de tabelas apagadas
--

--
-- Índices de tabela `tbl_projects`
--
ALTER TABLE `tbl_projects`
  ADD PRIMARY KEY (`projects_id`);

--
-- AUTO_INCREMENT de tabelas apagadas
--

--
-- AUTO_INCREMENT de tabela `tbl_projects`
--
ALTER TABLE `tbl_projects`
  MODIFY `projects_id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
