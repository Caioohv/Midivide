module.exports = {
  dialect: 'mysql', 
  host: 'localhost',
  username: 'root',
  password: '',
  database: 'midivide', 
  define: {
    timestamps: true,
    underscored: true
  },
  logging: false, 
  query: {
    raw: true
  },
  dialectOptions: {
    ssl: {
      rejectUnauthorized: true,        
    }
  }
}