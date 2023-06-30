const express = require('express')
const mongoose = require('mongoose')
const dotenv = require('dotenv')
const PORT = process.env.PORT || 3000;
const authRoute = require("./routes/auth");
const userRoute = require("./routes/users");
const productRoute = require("./routes/products");
dotenv.config();
const app = express();
const bodyParser = require('body-parser');


mongoose.connect(process.env.MONGO_DB_URL)
    .then(() => console.log("MongoDB Connect is Successfully"))
    .catch((err) => {
        console.log(err);
    });

// MiddleWare
app.use(bodyParser.json())
app.use(express.json());
app.use("/api/auth", authRoute);
app.use("/api/users", userRoute);
app.use("/api/products", productRoute);

app.listen(PORT, () => {
    console.log(`server running on PORT ${PORT}`);
})
