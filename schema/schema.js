// schema/schema.js
const { gql } = require('apollo-server-express');

const typeDefs = gql`
  type User {
    id: ID!
    username: String!
    email: String!
  }

  type Employee {
    id: ID!
    first_name: String!
    last_name: String!
    email: String!
    gender: String!
    designation: String!
    salary: Float!
    date_of_joining: String!
    department: String!
  }

  type Query {
    login(username: String!, password: String!): String
    getAllEmployees: [Employee]
    getEmployeeById(eid: ID!): Employee
    searchEmployees(designation: String, department: String): [Employee]
  }

  type Mutation {
    signup(username: String!, email: String!, password: String!): String
    addEmployee(
      first_name: String!
      last_name: String!
      email: String!
      gender: String!
      designation: String!
      salary: Float!
      date_of_joining: String!
      department: String!
      employee_photo: String
    ): Employee
    updateEmployee(eid: ID!, salary: Float, designation: String): Employee
    deleteEmployee(eid: ID!): String
  }
`;

module.exports = typeDefs;
