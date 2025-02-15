![MongoDB Collections](screenshots/collections_screenshot.png)
OnatTuran-_COMP3133_101216227_Assignment1-

Project Overview

This project is a GraphQL API built with MongoDB, Express, and Node.js as part of the COMP3133 course. The API provides functionalities to manage employees and users, including operations such as adding, deleting, retrieving, and user authentication.

Features Implemented

GraphQL Object Creation: Created GraphQL schemas for employees and users collections.

GraphQL APIs: Implemented CRUD operations (addEmployee, getAllEmployees, deleteEmployee) and authentication (signup, login).

Validation and Error Handling: Included error messages for invalid inputs.

Postman Testing: Tested all GraphQL queries and mutations with screenshots.

GitHub Repository: Maintained a well-documented GitHub repository with a comprehensive README.

Technologies Used

Backend: Node.js, Express.js

Database: MongoDB (MongoDB Atlas)

API: GraphQL

Tools: Postman, GitHub, MongoDB Atlas

How to Run the Project

Clone the Repository:

git clone https://github.com/onatturan/COMP3133_101216227_Assignment1.git

Install Dependencies:

cd COMP3133_101216227_Assignment1
npm install

Set Up Environment Variables: Create a .env file with the following:

PORT=5001
MONGO_URI=mongodb+srv://<username>:<password>@cluster0.mongodb.net/
JWT_SECRET=your_jwt_secret

Start the Server:

npm start

GraphQL API Endpoints

signup (Mutation): Creates a new user.

login (Query): Authenticates a user and returns a token.

addEmployee (Mutation): Adds a new employee.

getAllEmployees (Query): Retrieves all employees.

deleteEmployee (Mutation): Deletes an employee by ID.

Screenshots

✅ MongoDB Collections (employees, users)

✅ GraphQL Queries and Mutations (signup, login, addEmployee, getAllEmployees, deleteEmployee)

✅ Error Handling Example (User not found, Invalid input)

Conclusion

This assignment demonstrates my ability to build a backend API using GraphQL, connect it to MongoDB, and perform comprehensive testing using Postman. It also highlights my ability to document projects clearly and maintain a structured GitHub repository.

