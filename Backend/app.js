const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const app = express();
const cors = require('cors');
const userRoutes = require("./routes/user.routes")
const connectToDb = require("./config/db")
connectToDb();
const productsRoutes = require("./routes/product.routes")


app.use(cors());
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.send("Work");
});

app.use("/users" , userRoutes)
app.use("/products" , productsRoutes)

module.exports = app