CREATE DATABASE library;
USE library;

-- ========================================
-- USERS TABLE
-- ========================================
CREATE TABLE USERS (
    USER_ID     VARCHAR(50) PRIMARY KEY,
    NAME        VARCHAR(50) NOT NULL,
    PASSWORD    VARCHAR(50) NOT NULL,
    CONTACT     VARCHAR(15),
    ROLE        ENUM('ADMIN', 'STAFF') NOT NULL
);

-- ========================================
-- STUDENT DETAILS (managed by staff)
-- ========================================
CREATE TABLE STUDENT_DETAILS (
    STUDENT_ID  VARCHAR(20) PRIMARY KEY,
    NAME        VARCHAR(50) NOT NULL,
    YEAR        INT,
    CLASS       VARCHAR(20)
);

-- ========================================
-- BOOKS TABLE
-- ========================================
CREATE TABLE BOOKS (
    BOOK_ID     VARCHAR(50) PRIMARY KEY,
    CATEGORY    VARCHAR(50),
    NAME        VARCHAR(100),
    AUTHOR      VARCHAR(100),
    COPIES      INT
);

-- ========================================
-- ISSUE BOOK (links students with books)
-- ========================================
CREATE TABLE ISSUE_BOOK (
    ISSUE_ID    INT AUTO_INCREMENT PRIMARY KEY,
    STUDENT_ID  VARCHAR(20),
    BOOK_ID     VARCHAR(50),
    ISSUE_DATE  DATE NOT NULL,
    DUE_DATE    DATE,
    RETURN_DATE DATE,
    STATUS      ENUM('pending', 'returned', 'late') DEFAULT 'pending',

    FOREIGN KEY (BOOK_ID) 
        REFERENCES BOOKS(BOOK_ID) 
        ON DELETE CASCADE,

    FOREIGN KEY (STUDENT_ID) 
        REFERENCES STUDENT_DETAILS(STUDENT_ID) 
        ON DELETE CASCADE
);

-- ========================================
-- AUDIT LOG
-- ========================================
CREATE TABLE AUDIT_LOG (
    LOG_ID      INT AUTO_INCREMENT PRIMARY KEY,
    USER_ID     VARCHAR(50),      -- The record that was modified
    ACTION      VARCHAR(20),      -- INSERT, UPDATE, DELETE
    MODIFIED_BY VARCHAR(50),      -- Staff user who made the change
    MODIFIED_AT TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    OLD_VALUE   TEXT,
    NEW_VALUE   TEXT
);

-- ========================================
-- INSERT SAMPLE DATA
-- ========================================

-- 👤 Users
INSERT INTO USERS (USER_ID, NAME, PASSWORD, CONTACT, ROLE) VALUES
('A001', 'Alice Admin', 'admin123', '9876543210', 'ADMIN'),
('S001', 'Sam Staff', 'staff123', '9123456780', 'STAFF'),
('S002', 'Sara Staff', 'staff456', '9988776655', 'STAFF');

-- 🎓 Students
INSERT INTO STUDENT_DETAILS (STUDENT_ID, NAME, YEAR, CLASS) VALUES
('STU001', 'John Doe', 2, 'BSc-CS'),
('STU002', 'Jane Smith', 1, 'BSc-Math'),
('STU003', 'Raj Kumar', 3, 'BCom'),
('STU004', 'Emily Brown', 2, 'BA-Eng');

-- 📚 Books
INSERT INTO BOOKS (BOOK_ID, CATEGORY, NAME, AUTHOR, COPIES) VALUES
('B001', 'Computer Science', 'Database Systems', 'Silberschatz', 5),
('B002', 'Mathematics', 'Linear Algebra', 'Gilbert Strang', 3),
('B003', 'Literature', 'Hamlet', 'William Shakespeare', 4),
('B004', 'Commerce', 'Principles of Economics', 'N. Gregory Mankiw', 2);

-- 📖 Issue Book Records
INSERT INTO ISSUE_BOOK (STUDENT_ID, BOOK_ID, ISSUE_DATE, DUE_DATE, STATUS) VALUES
('STU001', 'B001', '2025-09-01', '2025-09-15', 'pending'),
('STU002', 'B002', '2025-09-05', '2025-09-20', 'returned'),
('STU003', 'B004', '2025-09-07', '2025-09-21', 'late');

-- 📝 Audit Log
INSERT INTO AUDIT_LOG (USER_ID, ACTION, MODIFIED_BY, OLD_VALUE, NEW_VALUE) VALUES
('STU001', 'INSERT', 'S001', NULL, 'Student John Doe added'),
('B001',   'UPDATE', 'S002', 'Copies = 5', 'Copies = 4'),
('STU002', 'DELETE', 'S001', 'Jane Smith record', NULL);