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

images/1.png
images/2.png
images/3.png
images/4.png
images/5.png
images/6.png
images/7.png
images/8.png
images/9.png
images/10.png
images/11.png
images/12.png
images/13.png
images/14.png
images/15.png
images/16.png
images/17.png
images/18.png
images/19.png
images/20.png
images/21.png
images/22.png
images/23.png
images/24.png
images/25.png
images/26.png
images/27.png
images/28.png
images/29.png
images/30.png
images/31.png
images/32.png
images/33.png
images/34.png
images/35.png
images/36.png

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
