-- phpMyAdmin SQL Dump
-- version 4.5.0.2
-- http://www.phpmyadmin.net
--
-- Host: 127.0.0.1
-- Generation Time: Apr 26, 2018 at 03:45 AM
-- Server version: 10.0.17-MariaDB
-- PHP Version: 5.5.30

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- Database: `blog_code`
--

-- --------------------------------------------------------

--
-- Table structure for table `posts`
--

CREATE TABLE `posts` (
  `id` int(11) NOT NULL,
  `title` varchar(255) DEFAULT NULL,
  `content` mediumtext NOT NULL,
  `author` varchar(255) NOT NULL,
  `created_at` datetime NOT NULL,
  `updated_at` datetime NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `posts`
--

INSERT INTO `posts` (`id`, `title`, `content`, `author`, `created_at`, `updated_at`) VALUES
(1, 'dfsd', '<p>sdf</p>', 'sdfdf', '2018-03-14 23:46:31', '2018-03-14 23:46:31'),
(2, 'Title 2', '<p>Dog manh</p>', 'Tony', '2018-03-14 23:47:35', '2018-03-14 23:47:35'),
(3, 'Jdhdh', '<p>hdhhd</p>', 'hdhhd', '2018-03-14 23:48:03', '2018-03-14 23:48:03'),
(4, 'Tuan Anh Cho', '<p>Cho Tuan Anh</p>', 'Tony Hoang', '2018-03-14 23:51:50', '2018-03-14 23:51:50'),
(5, 'dffsdf', '<p>df</p>', 'sdds', '2018-03-18 20:45:03', '2018-03-18 20:45:03'),
(6, '', '', '', '2018-04-25 13:32:34', '2018-04-25 13:32:34');

-- --------------------------------------------------------

--
-- Table structure for table `users`
--

CREATE TABLE `users` (
  `id` int(11) NOT NULL,
  `email` varchar(50) NOT NULL,
  `password` varchar(256) NOT NULL,
  `first_name` varchar(50) NOT NULL,
  `last_name` varchar(50) NOT NULL,
  `created_at` datetime DEFAULT NULL,
  `updated_at` datetime DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8;

--
-- Dumping data for table `users`
--

INSERT INTO `users` (`id`, `email`, `password`, `first_name`, `last_name`, `created_at`, `updated_at`) VALUES
(1, 'minh1@gmail.com', 'abcd', 'minh', 'hoang', '0000-00-00 00:00:00', '0000-00-00 00:00:00'),
(2, '', '', '', '', NULL, NULL),
(3, 'ds', '', '', '', NULL, NULL),
(4, 'ds', '', '', '', NULL, NULL),
(5, 'minh2@gmail.com', '1', '', '', NULL, NULL),
(6, 'minh2@gmail.com', '1', '', '', NULL, NULL),
(7, 'minh2@gmail.com', '1', '', '', NULL, NULL),
(8, 'minh2@gmail.com', '1', '', '', NULL, NULL),
(9, 'minh2@gmail.com', '1', '', '', NULL, NULL),
(10, 'minh2@gmail.com', '12', 'minh', 'hoang', NULL, NULL),
(11, 'minh3@gmail.com', '$2a$10$.7JdlCKQn08rUybuftAFMucREMRhdrg9giaE1CM7Ggb', 'minh', 'hoang', NULL, NULL),
(12, 'minh3@gmail.com', '$2a$10$EjOb67OVEFPbIEut.ltUO.FIo4g6wuC6EaAZxN/QjDj', 'minh', 'hoang', NULL, NULL),
(13, '', '$2a$10$KtFa13pWnr5ijPdfYOvHiuvwEIOrR6C59LxF8LelFN/', '', '', NULL, NULL),
(14, 'sdd', '$2a$10$adJig12WQdibRLsgVzCUj.CKGReLJhrEkrSgnHGDsWN', '', '', NULL, NULL),
(15, 'sdd', '$2a$10$UzKggogoKY4HtAe0yJCRGeSGpxgkXmSJFRwG1kJzxW7', '', '', NULL, NULL),
(16, 'hehe2', '$2a$10$0m9JJw484UwKTZP.PeU3Fu/mUqaEz.0nyLnHZ0e.KHp', 'hehe', 'hihi', NULL, NULL),
(17, 'hehe2', '$2a$10$YWKT6YpxhxOZEThs14MwdueEfCr0i91Usb5XBMJbBat', 'hehe', 'hihi', NULL, NULL),
(18, 'hehe1', '$2a$10$9jLElg/yZ357xyE5hfG3EuipeYoy2uBenPNN7eNee6k', 'min', 'hoang', NULL, NULL),
(19, 'hehe1', '$2a$10$/XkP8SHJ/z.Y4xq3bt.7he.Ed4ZToqnvmcU59kCVvxP', '', '', NULL, NULL),
(20, 'xinchao', '$2a$10$yyIfkkONiXcyrFcYtp86P.9u/KRsxu9Xxyw24YeQqDZ', '', '', NULL, NULL),
(21, 'minh1', '[object Promise]', '', '', NULL, NULL),
(22, 'minh5', '', '', '', NULL, NULL),
(23, 'minh6', '', '', '', NULL, NULL),
(24, 'abc123', '', '', '', NULL, NULL),
(25, 'abc12', '$2a$10$Uv4IJfGMNY0tUoGf.9AQuuJjRmzXOtNxuwxAIyh2Hb4m17hDyza/m', '', '', NULL, NULL),
(26, 'dfsdf', '$2a$10$gH4xhyOfgJ9PUKPGv24gxesQYtIXnmdO/Jz/aF650.FEW1gd.hGVK', 'saf', 'dsf', NULL, NULL);

--
-- Indexes for dumped tables
--

--
-- Indexes for table `posts`
--
ALTER TABLE `posts`
  ADD PRIMARY KEY (`id`);

--
-- Indexes for table `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT for dumped tables
--

--
-- AUTO_INCREMENT for table `posts`
--
ALTER TABLE `posts`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=7;
--
-- AUTO_INCREMENT for table `users`
--
ALTER TABLE `users`
  MODIFY `id` int(11) NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=27;
/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
