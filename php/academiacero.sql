-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Host: 127.0.0.1
-- Generation Time: Apr 27, 2023 at 10:30 PM
-- Server version: 10.4.27-MariaDB
-- PHP Version: 8.2.0

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `academiacero`
--

-- --------------------------------------------------------

--
-- Table structure for table `admin_login`
--

CREATE TABLE `admin_login` (
  `id` int(50) NOT NULL,
  `user` varchar(50) NOT NULL,
  `password` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `admin_login`
--

INSERT INTO `admin_login` (`id`, `user`, `password`, `email`) VALUES
(1, 'academiacero', 'javinuria', 'academiacero@localhost.com');

-- --------------------------------------------------------

--
-- Table structure for table `formulario_contacto`
--

CREATE TABLE `formulario_contacto` (
  `id` int(50) NOT NULL,
  `nombre` varchar(50) NOT NULL,
  `email` varchar(50) NOT NULL,
  `mensaje` text NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `formulario_contacto`
--

INSERT INTO `formulario_contacto` (`id`, `nombre`, `email`, `mensaje`) VALUES
(1, 'Jorge', 'academiacero@localhost.com', 'Solo queria saber quienes sois y que haceis.\r\n\r\nMe gusta vuestra idea.'),
(2, 'Holaa', 'como@gmail.com', 'como estamos ahora'),
(3, 'prueba4', 'localhost@gmail.com', 'Hola wenas, soy nuevo en este foro'),
(4, 'Dario', 'alejandrodariofo@gmail.com', 'Tengo una duda para la academia, bla bla bla bla');

-- --------------------------------------------------------

--
-- Table structure for table `noticias`
--

CREATE TABLE `noticias` (
  `id` int(50) NOT NULL,
  `titulo` varchar(50) NOT NULL,
  `contenido` text NOT NULL,
  `imagen` varchar(50) NOT NULL,
  `linkextra` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

--
-- Dumping data for table `noticias`
--

INSERT INTO `noticias` (`id`, `titulo`, `contenido`, `imagen`, `linkextra`) VALUES
(1, 'hola', 'hola buenas\r\nesto es un texto de prueba ', 'img/noticia1.jpg', 'https://www.facebook.com/academiacero'),
(2, 'Prueba Curso', 'Hola muy buenas esto es una prueba asdasdasd sadasd', 'img/noticia2.jpg', 'https://www.facebook.com/academiacero'),
(3, 'Prueba Curso', 'Hola muy buenas esto es una prueba asdasdasd sadasd', 'img/noticia3.jpg', 'https://www.facebook.com/academiacero'),
(4, 'Prueba Curso', 'Hola muy buenas esto es una prueba asdasdasd sadasd', 'img/noticia4.png', 'https://www.facebook.com/academiacero'),
(5, 'Prueba Curso', 'Hola muy buenas esto es una prueba asdasdasd sadasd', 'img/noticia5.jpg', 'https://www.facebook.com/academiacero'),
(6, 'noticia6', 'Hola muy buenas esto es un texto de prueba', 'img/noticia6.jpg', 'https://www.facebook.com/academiacero'),
(7, 'noticia7', 'ola muy wenas soi nuebo en este foro', 'img/noticia7.jpg', 'https://www.facebook.com/academiacero'),
(8, 'noticia8', 'Menuda Clase nos ha tocado, me alegro de haber estado con vosotros, nos vemos!', 'img/noticia8.jpg', 'https://www.facebook.com/academiacero');

--
-- Indexes for dumped tables
--

--
-- Indexes for table `admin_login`
--
ALTER TABLE `admin_login`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `formulario_contacto`
--
ALTER TABLE `formulario_contacto`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `noticias`
--
ALTER TABLE `noticias`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `admin_login`
--
ALTER TABLE `admin_login`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=2;

--
-- AUTO_INCREMENT for table `formulario_contacto`
--
ALTER TABLE `formulario_contacto`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=5;

--
-- AUTO_INCREMENT for table `noticias`
--
ALTER TABLE `noticias`
  MODIFY `id` int(50) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=11;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
