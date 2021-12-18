import * as fs from "fs";

import Fastify, { FastifyReply, FastifyRequest } from "fastify";
import mercurius from "mercurius";
import { buildContext, loaders, resolvers, schema } from "./graphql/resolvers";
import { Sequelize } from "sequelize";
import { initModels } from "./tables/init-models";

const app = Fastify();

const sequelize = new Sequelize("mysql://userrr:passwdd@192.168.1.3:3308/chii");

initModels(sequelize);

app.register(mercurius, {
  schema,
  context: buildContext,
  resolvers,
  loaders,
});

app.get(
  "/editor",
  async function (request: FastifyRequest, reply: FastifyReply) {
    const stream = fs.createReadStream("./static/index.html");
    return reply.type("text/html").send(stream);
  }
);

app.get("/", async function () {
  return { hello: "world" };
});

app.listen(3000).catch((err) => {
  console.error(err);
  process.exit(1);
});
