-- phpMyAdmin SQL Dump
-- version 5.2.0
-- https://www.phpmyadmin.net/
--
-- Хост: 127.0.0.1
-- Время создания: Июл 01 2024 г., 18:24
-- Версия сервера: 10.4.24-MariaDB
-- Версия PHP: 8.1.6

SET SQL_MODE = "NO_AUTO_VALUE_ON_ZERO";
START TRANSACTION;
SET time_zone = "+00:00";


/*!40101 SET @OLD_CHARACTER_SET_CLIENT=@@CHARACTER_SET_CLIENT */;
/*!40101 SET @OLD_CHARACTER_SET_RESULTS=@@CHARACTER_SET_RESULTS */;
/*!40101 SET @OLD_COLLATION_CONNECTION=@@COLLATION_CONNECTION */;
/*!40101 SET NAMES utf8mb4 */;

--
-- База данных: `tic-tac-toe`
--

-- --------------------------------------------------------

--
-- Структура таблицы `history`
--

CREATE TABLE `history` (
  `id` int(10) UNSIGNED NOT NULL,
  `img_player1` varchar(50) NOT NULL,
  `player1` varchar(20) NOT NULL,
  `win1` tinyint(4) NOT NULL,
  `img_player2` varchar(50) NOT NULL,
  `player2` varchar(20) NOT NULL,
  `win2` int(11) NOT NULL,
  `date` date NOT NULL,
  `time` varchar(6) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `history`
--

INSERT INTO `history` (`id`, `img_player1`, `player1`, `win1`, `img_player2`, `player2`, `win2`, `date`, `time`) VALUES
(1, '/assets/img/Union.svg', 'Терещенко У. Р', 1, '/assets/img/zero.svg', 'Многогрешный П. В.', 0, '2023-11-23', '00:43'),
(2, '/assets/img/zero.svg', 'Терещенко У. Р', 0, '/assets/img/Union.svg', 'Многогрешный П. В.', 1, '2023-11-23', '00:43');

-- --------------------------------------------------------

--
-- Структура таблицы `users`
--

CREATE TABLE `users` (
  `id` smallint(5) UNSIGNED NOT NULL,
  `login` varchar(20) NOT NULL,
  `password` varchar(20) NOT NULL,
  `name` varchar(25) NOT NULL,
  `lastName` varchar(25) NOT NULL,
  `Otchestvo` varchar(50) NOT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

--
-- Дамп данных таблицы `users`
--

INSERT INTO `users` (`id`, `login`, `password`, `name`, `lastName`, `Otchestvo`) VALUES
(1, 'admin', '123', 'Ruslan', 'Agafonov', 'Other'),
(2, 'admin1', '123', 'yura', 'podzharov', 'dfgfdgdf');

--
-- Индексы сохранённых таблиц
--

--
-- Индексы таблицы `history`
--
ALTER TABLE `history`
  ADD PRIMARY KEY (`id`);

--
-- Индексы таблицы `users`
--
ALTER TABLE `users`
  ADD PRIMARY KEY (`id`);

--
-- AUTO_INCREMENT для сохранённых таблиц
--

--
-- AUTO_INCREMENT для таблицы `history`
--
ALTER TABLE `history`
  MODIFY `id` int(10) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;

--
-- AUTO_INCREMENT для таблицы `users`
--
ALTER TABLE `users`
  MODIFY `id` smallint(5) UNSIGNED NOT NULL AUTO_INCREMENT, AUTO_INCREMENT=3;
COMMIT;

/*!40101 SET CHARACTER_SET_CLIENT=@OLD_CHARACTER_SET_CLIENT */;
/*!40101 SET CHARACTER_SET_RESULTS=@OLD_CHARACTER_SET_RESULTS */;
/*!40101 SET COLLATION_CONNECTION=@OLD_COLLATION_CONNECTION */;
