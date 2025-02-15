// index.js
require('dotenv').config();
const express = require('express');
const { ApolloServer } = require('apollo-server-express');
const connectDB = require('./config/db');
const typeDefs = require('./schema/schema'); // Düzgün export edilmiş olmalı
const resolvers = require('./resolvers/resolvers');

// MongoDB Bağlantısı
connectDB();

const server = new ApolloServer({
  typeDefs, // Burada string değil, düzgün bir gql template literal olmalı
  resolvers,
  context: ({ req }) => {
    const token = req.headers.authorization || '';
    return { token };
  }
});

async function startServer() {
  await server.start();
  const app = express();
  server.applyMiddleware({ app });

  const PORT = process.env.PORT || 5001;
  app.listen(PORT, () =>
    console.log(`🚀 Server ready at http://localhost:${PORT}${server.graphqlPath}`)
  );
}

startServer();
