import * as fs from "fs";
import * as path from "path";

import { FastifyReply, FastifyRequest } from "fastify";
import { IResolvers } from "mercurius";
import { QuerySubjectArgs } from "./generated/graphql";
import { chiiSubjects } from "../tables/init-models";

type PromiseType<T> = T extends PromiseLike<infer U> ? U : T;

declare module "mercurius" {
  interface MercuriusContext
    extends PromiseType<ReturnType<typeof buildContext>> {}
}

export const schema = fs
  .readFileSync(path.join(__filename, "..", "schema.gql"))
  .toString();

export const buildContext = async (
  req: FastifyRequest,
  _reply: FastifyReply
) => {
  return {
    authorization: req.headers.authorization,
  };
};
const owners: Record<string, { name: string }> = {
  Max: { name: "Jennifer" },
  Charlie: { name: "Sarah" },
  Buddy: { name: "Tracy" },
};

const dogs = [
  { name: "Max" },
  { name: "Charlie" },
  { name: "Buddy" },
  { name: "Max" },
];

export const resolvers: IResolvers = {
  Query: {
    async subject(_, params: QuerySubjectArgs) {
      const v = await chiiSubjects.findOne({
        attributes: [
          ["subject_id", "id"],
          ["subject_name", "name"],
          ["subject_name_cn", "name_cn"],
        ],
        where: { subject_id: params.id },
      });

      return v?.get();
    },
  },
};

export const loaders = {
  // Dog: {
  //   async owner (queries: { obj: { name: string }, params: {} }[]) {
  //     return queries.map(({ obj }) => owners[obj.name])
  //   }
  // }
};
