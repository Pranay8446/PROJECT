const dotenv = require("dotenv")
dotenv.config()
const express = require("express")
const app = express();
const cors = require('cors');
const userRoutes = require("./routes/user.routes")
const connectToDb = require("./config/db")
connectToDb();
const productsRoutes = require("./routes/product.routes")
const containerRoutes = require("./routes/container.routes")

const nodemailer = require('nodemailer');
const bodyParser = require('body-parser');
const cookieParser = require('cookie-parser');
app.use(cookieParser());

app.use(cors({
  origin: 'http://192.168.208.6:5173', // your frontend URL
  credentials: true                // allow cookies
}));

app.use(bodyParser.json());
app.use(express.json())
app.use(express.urlencoded({extended: true}));

app.get("/",(req,res)=>{
    res.send("Work");
});

app.use("/users" , userRoutes)
app.use("/products" , productsRoutes)
app.use("/containers", containerRoutes)

module.exports = app