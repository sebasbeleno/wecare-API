const { Pool } = require("pg");

const pool = new Pool({
  user: "postgres",
  host: "localhost",
  password: "Beleño_15",
  database: "wecare",
  port: "5432"
});


const createUser = async (req, res) => {
    const {uid, email} = req.body;
    let username, icon = ' '
    const reponse = await pool.query('INSERT INTO users (id, email, username, icon) VALUES ($1, $2, $3, $4)', [uid, email, username, icon])
    res.json({
        message: "User created successfully",
        body: {
            user: {uid, email, username, icon}
        }
    })
}

module.exports = {
    createUser
}