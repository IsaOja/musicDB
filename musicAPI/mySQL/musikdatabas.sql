
-- Skapa databas och välj den
CREATE DATABASE IF NOT EXISTS MusikDatabas;
USE MusikDatabas;

-- Artister
CREATE TABLE Artister (
    ArtistID INT AUTO_INCREMENT PRIMARY KEY,
    ArtistNamn VARCHAR(100) NOT NULL,
    ArtistInfo TEXT
);

-- Album
CREATE TABLE Album (
    AlbumID INT AUTO_INCREMENT PRIMARY KEY,
    AlbumTitel VARCHAR(100) NOT NULL,
    ArtistID INT NOT NULL,
    Utgivningsår YEAR,
    FOREIGN KEY (ArtistID) REFERENCES Artister(ArtistID)
);

-- Låtar
CREATE TABLE Låtar (
    LåtID INT AUTO_INCREMENT PRIMARY KEY,
    LåtTitel VARCHAR(100) NOT NULL,
    AlbumID INT NOT NULL,
    Spårnummer INT,
    Längd TIME,
    FOREIGN KEY (AlbumID) REFERENCES Album(AlbumID)
);

-- Genrer
CREATE TABLE Genrer (
    GenreID INT AUTO_INCREMENT PRIMARY KEY,
    GenreNamn VARCHAR(50) NOT NULL
);

-- LåtGenrer
CREATE TABLE LåtGenrer (
    LåtID INT NOT NULL,
    GenreID INT NOT NULL,
    PRIMARY KEY (LåtID, GenreID),
    FOREIGN KEY (LåtID) REFERENCES Låtar(LåtID),
    FOREIGN KEY (GenreID) REFERENCES Genrer(GenreID)
);

-- Användare
CREATE TABLE Användare (
    AnvändarID INT AUTO_INCREMENT PRIMARY KEY,
    Användarnamn VARCHAR(50) NOT NULL,
    Lösenord VARCHAR(100) NOT NULL,
    Epost VARCHAR(100) NOT NULL
);

-- Spellistor
CREATE TABLE Spellistor (
    SpellistaID INT AUTO_INCREMENT PRIMARY KEY,
    AnvändarID INT NOT NULL,
    SpellistaNamn VARCHAR(100) NOT NULL,
    FOREIGN KEY (AnvändarID) REFERENCES Användare(AnvändarID)
);

-- SpellistaLåtar
CREATE TABLE SpellistaLåtar (
    SpellistaID INT NOT NULL,
    LåtID INT NOT NULL,
    Ordning INT,
    PRIMARY KEY (SpellistaID, LåtID),
    FOREIGN KEY (SpellistaID) REFERENCES Spellistor(SpellistaID),
    FOREIGN KEY (LåtID) REFERENCES Låtar(LåtID)
);

-- Exempeldata
INSERT INTO Artister (ArtistNamn, ArtistInfo) VALUES
('Taylor Swift', 'Amerikansk singer-songwriter'),
('The Beatles', 'Brittiskt rockband från Liverpool');

INSERT INTO Album (AlbumTitel, ArtistID, Utgivningsår) VALUES
('1989', 1, 2014),
('Abbey Road', 2, 1969);

INSERT INTO Låtar (LåtTitel, AlbumID, Spårnummer, Längd) VALUES
('Blank Space', 1, 2, '00:03:51'),
('Style', 1, 3, '00:03:51'),
('Come Together', 2, 1, '00:04:19'),
('Something', 2, 2, '00:03:03');

INSERT INTO Genrer (GenreNamn) VALUES
('Pop'),
('Rock'),
('Indie');

INSERT INTO LåtGenrer (LåtID, GenreID) VALUES
(1, 1),
(2, 1),
(3, 2),
(4, 2),
(4, 3);

INSERT INTO Användare (Användarnamn, Lösenord, Epost) VALUES
('musiclover1', 'hashedpassword123', 'user1@example.com'),
('beatlesfan', 'hashedpassword456', 'user2@example.com');

INSERT INTO Spellistor (AnvändarID, SpellistaNamn) VALUES
(1, 'Mina Popfavoriter'),
(2, 'Klassisk Rock');

INSERT INTO SpellistaLåtar (SpellistaID, LåtID, Ordning) VALUES
(1, 1, 1),
(1, 2, 2),
(2, 3, 1),
(2, 4, 2);
