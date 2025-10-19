import express from "express";
import mongoose from "mongoose";
import handlebars from "express-handlebars";
import cookieParser from "cookie-parser";

import router from "./router.js";
import pageHelper from "./helpers/pageHelper.js";

const app = express();
const PORT = 5000;
const db = "mongodb://localhost:27017/";

// connect to db
try {
    await mongoose.connect(db, { dbName: "Friendly_World" });
    console.log("Successfully connected to db");
} catch(err){
    console.error("Can not connect to db", err);
}

// setup handlebars
app.engine(("hbs"), handlebars.engine({ 
    extname: "hbs"
    , runtimeOptions: {
        allowProtoMethodsByDefault: true,
        allowProtoPropertiesByDefault: true,
    }
    , helpers: {
        ...pageHelper
    }
}));
app.set("view engine", "hbs");
app.set("views", "src/views");

// setup
app.use(express.static("src/public"));  
app.use(express.urlencoded());
app.use(cookieParser());
// app.use(authMiddleware);

// routing
app.use(router);

// start
app.listen(PORT, () => console.log(`Server is listening on http://localhost:${PORT}`));