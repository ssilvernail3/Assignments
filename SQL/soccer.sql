-- in terminal 
-- psql < soccer.sql
-- psql soccer_league

DROP DATABASE IF EXISTS soccer_league;

CREATE DATABASE soccer_league;

\c soccer_league

CREATE TABLE soccer_teams (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    location TEXT NOT NULL,
    league_id INTEGER NOT NULL,
    ranking INTEGER
);

CREATE TABLE players (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    team_id INTEGER REFERENCES soccer_teams
);

CREATE TABLE refs (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL 
);

CREATE TABLE matches_played (
    id SERIAL PRIMARY KEY,
    date TEXT NOT NULL,
    home_team_id INTEGER REFERENCES soccer_teams,
    away_team_id INTEGER REFERENCES soccer_teams,
    winning_team_id INTEGER REFERENCES soccer_teams,
    referee_id INTEGER REFERENCES refs
);

CREATE TABLE goals_scored (
    id SERIAL PRIMARY KEY,
    player_id INTEGER REFERENCES players,
    match_id INTEGER REFERENCES matches_played,
    goal_time INTEGER NOT NULL
);

CREATE TABLE league_dates (
    league_id INTEGER NOT NULL, 
    start_date TEXT NOT NULL,
    end_date TEXT NOT NULL
);

INSERT INTO soccer_teams 
    (name, location, league_id, ranking)
VALUES 
('Spruce Creek Hawks', 'Port Orange', 1, 2),
('Mainland Bucs', 'Daytona Beach', 1, 3),
('Seabreeze Sandcrabs', 'Daytona Beach', 1, 1);

INSERT INTO players 
    (name, team_id)
VALUES
('Charlie Sala', 1),
('Kyle Marsh', 1),
('Austin Hays', 1),
('Nick Secor', 2),
('Colby Landrum', 2),
('Mitchell Walker', 2),
('Shane Silvernail', 3),
('Scott Cole', 3),
('Chase Rachal', 3);

INSERT INTO refs 
    (name)
VALUES
('Mark Wild'),
('Ryan Clark'),
('TJ Watt');

INSERT INTO matches_played
    (date, home_team_id, away_team_id, winning_team_id, referee_id)
VALUES
('12/03/2020', 1, 2, 2, 1),
('12/04/2020', 3, 2, 3, 1),
('12/05/2020', 3, 1, 3, 2),
('12/06/2020', 2, 1, 1, 2);

INSERT INTO goals_scored 
    (player_id, match_id, goal_time)
VALUES
(1, 1, 3),
(2, 1, 78),
(7, 2, 14),
(7, 2, 19),
(8, 2, 34),
(9, 3, 2),
(7, 3, 15),
(8, 3, 89),
(5, 4, 87);

INSERT INTO league_dates 
    (league_id, start_date, end_date)
VALUES
(1, '12/03/2020', '12/06/2020'); 