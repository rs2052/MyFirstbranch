const express = require('express');
const mysql = require('mysql');
const dotenv = require('dotenv');
const path = require('path');
const cookieParser = require('cookie-parser');
const port = 5000;
const app = express();


dotenv.config({ path: './password.env' });



const db = mysql.createConnection({
  host: process.env.DATABASE_HOST,
  user: process.env.DATABASE_USER,
  password: process.env.DATABASE_PASSWORD,
  database: process.env.DATABASE
});



const publicDirectory = path.join(__dirname, './public');

app.use(express.static(publicDirectory));
app.use(express.urlencoded({ extended: false}));
app.use(express.json());
app.use(cookieParser());
app.set('view engine', 'hbs');


db.connect((error) => {
    if (error) {
      console.log(error);
        } else {
      console.log('Mysql connected...');
    }
  });


    app.use('/', require('./routes/pages'));
    app.use('/auth', require('./routes/auth'));

    app.listen(port, () => {
  console.log(`Server started on port ${port}`);
})

