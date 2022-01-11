-- in terminal :
-- psql < medical.sql
-- psql medical_center

DROP DATABASE IF EXISTS medical_center;

CREATE DATABASE medical_center;

\c medical_center

CREATE TABLE centers (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    address TEXT NOT NULL, 
    phone_number TEXT NOT NULL
);

CREATE TABLE doctors (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    medical_center_id INTEGER REFERENCES centers, 
    email_address TEXT NOT NULL
);

CREATE TABLE patients (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    date_of_birth TEXT NOT NULL,
    email_address TEXT NOT NULL
);

CREATE TABLE disease_diagnosis (
    id SERIAL PRIMARY KEY,
    name TEXT NOT NULL,
    treatment TEXT NOT NULL
);

CREATE TABLE patient_doctor_relationship (
    id SERIAL PRIMARY KEY, 
    patient_id INTEGER REFERENCES patients ON DELETE CASCADE,
    doctor_id INTEGER REFERENCES doctors ON DELETE CASCADE,
    date_seen TEXT NOT NULL, 
    disease_diagnosis_id INTEGER REFERENCES disease_diagnosis ON DELETE CASCADE
); 

INSERT INTO centers
    (name, address, phone_number)
VALUES
('Advent Health Center', '123 Finn Way', '3413342298'),
('Orlando Health', '67 SQL Ave', '1234567890'),
('Private Health Center', '12256 Postgresql Lane', '2213450098');

INSERT INTO doctors
    (name, medical_center_id, email_address)
VALUES
('Arlo Silvernail', 1, 'arlosilvernail@gmail.com'),
('Dexter Silvernail', 1, 'dextersilvernail@gmail.com'),
('Nala Casnet', 2, 'nalacasnet@gmail.com');

INSERT INTO patients 
    (name, date_of_birth, email_address)
VALUES
('John Doe', '18/05/1987', 'jdoe@gmail.com'),
('Jane Doe', '01/08/2009', 'janedoe@gmail.com'),
('Bobby Newport', '29/09/2009', 'bnewport@gmail.com');

INSERT INTO disease_diagnosis 
    (name, treatment)
VALUES
('NONE', 'NONE'),
('Diabetes', 'Insulin Therapy'),
('Cancer', 'Chemotherapy'),
('Psoriasis', 'Corticosteroids');

INSERT INTO patient_doctor_relationship
    (patient_id, doctor_id, date_seen, disease_diagnosis_id)
VALUES
(1, 1, '08/08/2021', 3),
(1, 2, '21/09/2021', 2),
(2, 1, '21/07/2013', 1),
(3, 2, '21/12/2018', 1); 
