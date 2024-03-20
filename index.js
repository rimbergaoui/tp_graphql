const express = require("express");
const app = express();
const { ApolloServer } = require("apollo-server");
const mongoose = require("mongoose");
const MONGODB = "mongodb+srv://bergaouirm:rim@cluster.cyggqxf.mongodb.net/?retryWrites=true&w=majority&appName=cluster";
const typeDefs = require('./graphql/typeDefs');
const resolvers = require('./graphql/resolvers');

const server = new ApolloServer({
    typeDefs,
    resolvers
});

mongoose.connect(MONGODB, { useNewUrlParser: true })
    .then(() => {
        console.log("MongoDB Connection successful");
        return server.listen({ port: 5000 });
    })
    .then((res) => {
        console.log(`èServer running at ${res.url}`);
    }
);
