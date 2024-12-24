# Basic CRUD for Customer Registration

This project is a web application that allows users to perform CRUD (Create, Read, Update, Delete) operations for customer registration. It uses **JSON Server** as a simulated backend to store customer data.

---

## 🚀 Features

- **Create:** Add new customers to the system.
- **Read:** View a list of registered customers.
- **Update:** Edit the details of an existing customer.
- **Delete:** Remove customers from the system.

---

## 🛠️ Technologies Used

- **HTML5**
- **TailwindCSS**
- **JavaScript (ES6)**
- **JSON Server**

---

## ⚙️ Installation and Setup

Follow these steps to set up and run the project locally:

### 1. Clone the repository

```bash
git clone https://github.com/JesusVirgen/json-serve-prject.git
cd json-serve-prject
```

### 2. Install JSON Server

Ensure **Node.js** is installed on your system. Then, install JSON Server globally:

```bash
npm install -g json-server
```

### 3. Configure the backend

The file db.json contains the initial structure of customer data. Start the JSON Server with the following command:

```bash
json-server --watch db.json --port 4000
```

The server will be available at http://localhost:4000

### 4. Run the application

Open the index.html file in your browser to interact with the application.

## ✨ Author

- Jesús - GitHub
