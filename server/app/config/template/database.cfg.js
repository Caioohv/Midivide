module.exports = () => {
	return {
		dialect: 'mysql', 
		host: 'localhost',
		username: 'viier',
		password: 'toor',
		database: 'midivide', 
		define: {
			timestamps: true,
			underscored: true
		}
	}	
}