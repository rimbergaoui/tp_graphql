const { gql } = require('apollo-server');

module.exports = gql`
type Task{
  id: ID!
  title: String!
  description: String!
  completed: Boolean!
  duration: Int!
}

input TaskInput{
    title: String
    description: String
}

type Query {
    task(id: ID!): Task
    tasks: [Task]
}

type Mutation {
    addTask(title: String!, description: String!, completed: Boolean!, duration:Int!): Task
    completeTask(id: ID!): Task
    changeDescription(id: ID!, newDescription: String!): Task
    deleteTask(id: ID!): ID
}
`;
