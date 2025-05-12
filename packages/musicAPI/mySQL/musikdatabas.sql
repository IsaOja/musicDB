-- Ceate and use database
CREATE DATABASE IF NOT EXISTS MusikDatabas;
USE MusikDatabas;

-- Artister
CREATE TABLE Artist (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(100) NOT NULL,
    genre VARCHAR(100),
    country VARCHAR(100)
);

-- Album
CREATE TABLE Album (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    artist_id INT NOT NULL,
    release_year YEAR,
    FOREIGN KEY (artist_id) REFERENCES Artist(id)
);

-- Tracks
CREATE TABLE Track (
    id INT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(100) NOT NULL,
    album_id INT NOT NULL,
    track_number INT,
    duration TIME,
    FOREIGN KEY (album_id) REFERENCES Album(id)
);

-- Genres
CREATE TABLE Genre (
    id INT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL
);
