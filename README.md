# 📚 Library Management System

A simple **Java + MySQL based Library Management System** with features for managing users, students, books, issues, and audit logs.

---

## ⚙️ Setup Instructions

### 1️⃣ Clone the repository
```bash
git clone https://github.com/your-username/library-management-system.git
cd library-management-system
```

### 2️⃣ Database Setup
Open MySQL and run the provided SQL file:

```sql
SOURCE database.sql;
```

This will create:
- **USERS** (Admin + Staff login)  
- **STUDENT_DETAILS**  
- **BOOKS**  
- **ISSUE_BOOK**  
- **AUDIT_LOG**  

### 3️⃣ Configure Database in Java
Update your DB credentials in the Java files:

```java
String url = "jdbc:mysql://localhost/library";
String user = "root";
String pwd  = "your_password";
```

### 4️⃣ Run the Project
- Open in **NetBeans**  
- **Clean and Build**  
- **Run the project** 🎉  

---

## 📸 Screenshots

### 🔑 Login Page
![Login](images/login.png)

### 🏠 Dashboard
![Dashboard](images/dashboard.png)

### 📖 Book Management
![Books](images/books.png)

### 👨‍🎓 Student Management
![Students](images/students.png)

### 🕵️ Audit Log
![Audit Log](images/auditlog.png)

*(Place your screenshots in a folder named `images/` in the root of the project.)*

---

## 📂 Project Structure
```plaintext
library-management-system/
│── src/                # Java source files
│── images/             # Screenshots for README
│── database.sql        # Database schema + sample data
│── README.md           # Documentation
```

---

## 🙌 Contributors
👩‍💻 Your Name – Developer  

🛠 Open to contributions! Feel free to fork and PR.  

---
