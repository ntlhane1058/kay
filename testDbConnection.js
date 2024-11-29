
const mysql = require('mysql2');

const connection = mysql.createConnection({
  host: '3000',
  user: 'your-username',     // Replace with actual username
  password: '123456', // Replace with actual password
  database: 'wings_cafe_inventory'  // Replace with actual database name
});

connection.connect(err => {
  if (err) {
    console.error('Error connecting to the database:', err.stack);
    process.exit(1);
  }
  console.log('Connected to the database');
  connection.end();
});
