# Audio Hub - E-Commerce Shopping Website

## Project Overview

This project showcases a **Audio Hub E-Commerce Shopping Website** build with Node.js, Express.js for back-end logics and HTML,CSS, JavaScript, and Bootstrap for the front-end User Experience. Developed using **Node.js**, **Express**, **EJS**, and **MongoDB**. The system allows you to shopping functionality like order products, view products, check order status, and user authentication and role based authorisation. It also ensures that secure and efficient data management through an MongoDB database.

#
GITHUB LINK : [Repository](https://github.com/yatikanghan/Audio-Hub)
#
YOUTUBE LINK : [YOUTUBE]()
#

## Features

- **Customer Order Management**: Admin can view and manage orders.
- **Order Processing**: Admin can process orders such as pending order to shipped orders and delivered.
- **Manage Customers details**: Admin can manage customers details.
- **User Authentication**: Secure login system for consumers and admin.
- **Role-Based Access Control**: Different role based authorisation such as Admin, and Customer.

## Technologies Used

- **Backend**: Node.js, Express, and EJS
- **Frontend**: HTML, CSS, JS, BOOTSTRAP
- **Database**: MONGODB
- **Security**: Session Based authorisation and authentication
- **IDE** : VS CODE

## Prerequisites

Before running the system, ensure you have the following installed:

- **Node.js**: Latest Version
- **MongoDB DATABASE :**: Version 5.7 or higher

## Installation and Setup

1. **Clone the Repository**:
   ```bash
   git clone https://github.com/yatikanghan/Audio-Hub.git
   cd Audio-Hub


2. **Install Dependences**:
   ```bash
   npm install

3. **Configure the Database**:


   Update the index.js file located in main directory with your **database credentials** and i alredy put my cloudinary credentials:
   
   ```bash
   async function dbconnect() {
    await mongoose.connect('mongodb://127.0.0.1/AudioHub'). then(()=>{
        console.log("Database connected");
    });
  }
  dbconnect();


4. **Build & Run the application** :
```bash
   node index.js


5. **Access the Application** :
   For Login data refer this file :
   SQL refrence : [SAMPLE DATA FOR CHECK](https://github.com/yatikanghan/Banking-Management-Application/blob/master/login_credential.pdf)

   #
   Open your web browser and navigate to http://localhost:8080 to access the application.
   
   **Customer Login** : http://localhost:8080/login
   
   **Admin Login** : http://localhost:8080/adminlogin


# License

This project is licensed under the Apache 2.0 License. See the LICENSE file for details.



