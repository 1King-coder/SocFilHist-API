require('dotenv').config();

module.exports = {
  dialect: 'mariadb',
  host: '192.168.1.9',
  port: 3306,
  username: 'root',
  password: '1b2ca675412f420611d3',
  database: 'socfilhist-project',
  define: {
    timestamps: true,
    underscored: true,
    underscoredAll: true,
    createdAt: 'created_at',
    updatedAt: 'updated_at',
  },
  dialectOptions: {
    timezone: 'America/Sao_Paulo',
    allowPublicKeyRetrieval: true,
  },
};
