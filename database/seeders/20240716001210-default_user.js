const bcrypt = require('bcrypt');

module.exports = {
  up: async (queryInterface, Sequelize) => {

    // const hashedPassword = await generateHashedPassword('admin12345')

    const hashedPassword = await bcrypt.hash('admin12345', bcrypt.genSaltSync(10))

    return queryInterface.bulkInsert('users', [
      {
        id: '214146e8-5902-4086-8072-edad995cc705',
        first_name: 'User',
        last_name: 'Admin',
        email: 'admin@findme.com',
        password: hashedPassword,
        born_date: new Date('02-25-2002'),
        role: 'admin',
        active: true,
        created_at: new Date(),
        updated_at: new Date(),
      },
    ]);
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('users', null, {});
  },
};

const generateHashedPassword = async (password) => {
  try {
    const saltRounds = 10

    bcrypt.hash(password, saltRounds, (err, hash) => {
      console.log('dale', hash)
      if (err) return console.log(err);
  
      console.log('Your Hash for Password was Generated');
      return hash
    });
  } catch (error) {
    console.log('Error', error)
  }


}