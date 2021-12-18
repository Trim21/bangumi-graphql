import * as fs from 'fs'
import * as path from 'path'

import { FastifyReply, FastifyRequest } from 'fastify'
import { IResolvers } from 'mercurius'
import { QuerySubjectArgs, QuerySubjectsArgs } from './generated/graphql'
import { chiiSubjects, chiiSubjectsAttributes } from '../tables/init-models'
import { Op } from 'sequelize'
import { WhereOptions } from 'sequelize/types'

type PromiseType<T> = T extends PromiseLike<infer U> ? U : T;

declare module 'mercurius' {
  interface MercuriusContext
    extends PromiseType<ReturnType<typeof buildContext>> {}
}

export const schema = fs
  .readFileSync(path.join(__filename, '..', 'schema.gql'))
  .toString()

export const buildContext = async (
  req: FastifyRequest,
  _reply: FastifyReply
) => {
  return {
    authorization: req.headers.authorization,
  }
}

const subjectFieldMap: [keyof chiiSubjectsAttributes, string][] = [
  ['subject_id', 'id'],
  ['subject_name', 'name'],
  ['subject_name_cn', 'name_cn'],
  ['subject_nsfw', 'nsfw'],
]

export const resolvers: IResolvers = {
  Query: {
    async subject (_, { id }: QuerySubjectArgs) {
      return await chiiSubjects.findOne({
        attributes: subjectFieldMap,
        where: { subject_id: id, subject_ban: 0 },
        raw: true,
      })
    },
    async subjects (_, { limit, offset, ids }: QuerySubjectsArgs) {
      const where: WhereOptions<chiiSubjectsAttributes> = {
        subject_ban: 0,
      }
      if (ids) {
        where['subject_id'] = { [Op.in]: ids }
      }

      return await chiiSubjects.findAll({
        attributes: subjectFieldMap,
        where,
        limit,
        offset,
        raw: true,
      })
    },
  },
}

export const loaders = {
  // Dog: {
  //   async owner (queries: { obj: { name: string }, params: {} }[]) {
  //     return queries.map(({ obj }) => owners[obj.name])
  //   }
  // }
}

export const cacheOption = {
  // cache query "add" responses for 10 seconds
  ttl: 10,
  policy: {
    Query: {
      subject: true,
      subjects: true,
    }
  }
}
