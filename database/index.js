const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./database");

//middleware 
app.use(cors());
app.use(express.json());

//create customer
app.post("/customers", async(req, res)=> {
    //await

    try {
        const {customer_email, customer_phone_number, customer_password} = req.body;
        const new_customer = await pool.query(
            "INSERT INTO customer(customer_email, customer_phone_number, customer_password) VALUES($1, $2, $3) RETURNING *",
             [customer_email, customer_phone_number, customer_password]);
          console.log(req.body)
          res.json(new_customer.rows[0])
    } catch (err) {
        console.error(err.message);
        res.status(500).json({message: "Error creating customer."})
    }
})
//fffffff
app.listen(5000, ()=>{
    console.log("server started on 5000");
});

