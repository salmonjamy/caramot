const express = require('express')
const port = 2100
const bodyParser = require('body-parser')
const sequelize = require('./config/db')

const app = express()
app.use(bodyParser.json())


sequelize.sync()
sequelize.authenticate()
  .then(() => {
    console.log('Connection to database has been established successfully.');
    app.listen(port, () => {
      console.log(`Server is running on port ${port}`);
      
    })
  })
  .catch(err => console.log('Error: ' + err))

app.use((req, res) => {
  res.status(404).json({
    status: false,
    message: "Not Found"
  })
});




