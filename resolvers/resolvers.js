// resolvers/resolvers.js
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/user');
const Employee = require('../models/Employee');

const resolvers = {
  Query: {
    login: async (_, { username, password }) => {
      const user = await User.findOne({ username });
      if (!user) throw new Error('User not found');
      const isValid = await bcrypt.compare(password, user.password);
      if (!isValid) throw new Error('Invalid credentials');
      const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '1h' });
      return token;
    },
    getAllEmployees: async () => {
      return await Employee.find({});
    },
    getEmployeeById: async (_, { eid }) => {
      return await Employee.findById(eid);
    },
    searchEmployees: async (_, { designation, department }) => {
      const query = {};
      if (designation) query.designation = designation;
      if (department) query.department = department;
      return await Employee.find(query);
    },
  },
  Mutation: {
    signup: async (_, { username, email, password }) => {
      const user = new User({ username, email, password });
      await user.save();
      return 'User created successfully';
    },
    addEmployee: async (_, args) => {
      const employee = new Employee(args);
      return await employee.save();
    },
    updateEmployee: async (_, { eid, salary, designation }) => {
      return await Employee.findByIdAndUpdate(
        eid,
        { salary, designation, updated_at: new Date() },
        { new: true }
      );
    },
    deleteEmployee: async (_, { eid }) => {
      await Employee.findByIdAndDelete(eid);
      return 'Employee deleted';
    },
  },
};

module.exports = resolvers;
