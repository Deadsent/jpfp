const express = require('express')
const path = require('path')
const Sequelize = require('sequelize')
const { STRING, INTEGER, ENUM } = require("sequelize");
const sequelize = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost/acme_schools_db"
);
const app = express()

// static middleware
app.use('/dist', express.static(path.join(__dirname, '../dist')))
app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, '../public/index.html'))
}); 

const Campuses = sequelize.define('campus', {
  name: {
    type: STRING,
    allowNull: false
  }
})

const syncDB = async () => {
  try {
    await sequelize.sync({force: true})

    await Campuses.create({ name: "Strixhaven" })
    await Campuses.create({ name: "Lorehold" });
    await Campuses.create({ name: "Prismari" });
    await Campuses.create({ name: "Quandrix" });
    await Campuses.create({ name: "Witherbloom" });
    await Campuses.create({ name: "Silverquill" });
  } catch (error) {
    console.log(error)
  }
}


const startUp = async () => {
try {
  console.log("Connecting to database...")
  await syncDB()
  console.log("Database connected.")
} catch (error) {
  console.log(error)
}
}

startUp()

module.exports = {app, Campuses};

