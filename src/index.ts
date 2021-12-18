import * as fs from 'fs'

import Fastify, { FastifyReply, FastifyRequest } from 'fastify'
import mercurius from 'mercurius'
import {
  buildContext,
  cacheOption,
  loaders,
  resolvers,
  schema
} from './graphql/resolvers'
import { Sequelize } from 'sequelize'
import { initModels } from './tables/init-models'

import redis from 'fastify-redis'

const app = Fastify()

const sequelize = new Sequelize('mysql://userrr:passwdd@192.168.1.3:3308/chii', { logQueryParameters: true })

initModels(sequelize)

app.register(mercurius, {
  schema,
  context: buildContext,
  resolvers,
  loaders,
})

app.register(redis, { url: 'redis://192.168.1.3:6379/3' })

// import mercuriusCache from 'mercurius-cache'
//
// app.register(mercuriusCache, {
//   storage: {
//     get: async function (key: string) {
//       try {
//         return JSON.parse(await app.redis.get(key))
//       } catch (err) {
//         app.log.error({ msg: 'error on get from redis', err, key })
//       }
//       return null
//     },
//     set: async function (key: string, value: any) {
//       try {
//         console.log(value)
//         await app.redis.set(key, JSON.stringify(value), 'EX', 60)
//       } catch (err) {
//         app.log.error({ msg: 'error on set into redis', err, key })
//       }
//     }
//   },
//   ...cacheOption,
// })

app.get(
  '/editor',
  async function (request: FastifyRequest, reply: FastifyReply) {
    const stream = fs.createReadStream('./static/index.html')
    return reply.type('text/html').send(stream)
  }
)

app.get('/', async function () {
  return { hello: 'world' }
})

app.listen(3000).catch((err) => {
  console.error(err)
  process.exit(1)
})
