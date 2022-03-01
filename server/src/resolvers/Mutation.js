const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { ApolloError } = require("apollo-server-errors");

require("dotenv").config();

const APP_SECRET = process.env.APP_SECRET;

async function signup(parent, args, context, info) {
  console.log("server signup");
  const oldUser = await context.prisma.user.findUnique({
    where: { email: args.email },
  });
  if (oldUser) {
    throw new ApolloError(
      `A user with email "${args.email}" is already registered!`
    );
  }
  const password = await bcrypt.hash(args.password, 10);
  const user = await context.prisma.user.create({
    data: { ...args, password },
  });
  const token = jwt.sign({ userId: user.id, email: user.email }, APP_SECRET, { expiresIn: "1h" });

  return {
    token,
    user,
  };
}

async function login(parent, args, context, info) {
  const user = await context.prisma.user.findUnique({
    where: { email: args.email },
  });
  if (!user) {
    throw new ApolloError("No such user found");
  }

  const valid = await bcrypt.compare(args.password, user.password);
  if (!valid) {
    throw new ApolloError("Invalid password");
  }

  const token = jwt.sign({ userId: user.id, email: user.email }, APP_SECRET, { expiresIn: "1h" });

  return {
    token,
    user,
  };
}

module.exports = {
  signup,
  login,
};
