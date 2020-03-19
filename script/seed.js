
 const db = require('../server/db')
 const {User} = require('../server/db/models')
//  const faker = require('faker')

//  faker.seed(123)
//  const userSeed = []
//  for (let i = 0; i < 10; i++) {
//   userSeed.push({
//     firstName: faker.name.firstName(),
//     lastName: faker.name.lastName(),
//     email: faker.internet.email(),
//     password: '123',
//     isAdmin: faker.random.boolean()
//   })
// }

async function seed() {
  await db.sync({force: true})
  console.log('db synced!')

  const user1 = await User.create({
    email: 'cody@email.com',
    password: '123',
    firstName: 'Cody',
    lastName: 'Shane',
  })
  const user2 = await User.create({
    email: 'amy@email.com',
    password: '123',
    firstName: 'Amy',
    lastName: 'Adams',
  })

  const user3 = await User.create({
    email: 'will@email.com',
    password: '123',
    firstName: 'Will',
    lastName: 'Ferrell',
  })

  console.log(`seeded successfully`)
}

async function runSeed() {
  console.log('seeding...')
  try {
    await seed()
  } catch (err) {
    console.error(err)
    process.exitCode = 1
  } finally {
    console.log('closing db connection')
    await db.close()
    console.log('db connection closed')
  }
}


if (module === require.main) {
  runSeed()
}

module.exports = seed







