require("dotenv").config();

let connectdb = require("./database/db");
let product_model = require("./model/schema");

let productdata = require("./product.json");

let start = async () => {
    try {
        console.log("data insert start");

        await connectdb(process.env.MONGO_URL);
        await product_model.deleteMany();
        let result = await product_model.insertMany(productdata);

        console.log("Inserted:", result.length);

    } catch (error) {
        console.log(error);
    }
};

start();
