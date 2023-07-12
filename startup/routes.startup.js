//middlewares
const express = require("express")
const morgan = require("morgan") // for consoling api request calls
const helmet = require("helmet") // secures connection by adding additional header
const cors = require("cors"); // handling cors errors
const ErrorHandler = require("../middlewares/error.middlewares"); // error handler for routes, since we will continue to next route upon request

//Routers
const { UserRouter } = require("../routes/users.routes");
const { CategoryRouter } = require("../routes/category.routes");
const { InterestRouter } = require("../routes/interest.routes");
const { IntersetCategoryRouter } = require("../routes/interestCategory.routes");

module.exports = (app) => {
    app.use(express.json()); // body parser, parses request body
    app.use(express.urlencoded({ extended: true })); // parses encoded url
    app.use(morgan("tiny")); // initiating console api requests
    app.use(helmet());
    app.use(cors());

    //start of routes
    app.use("/api/users", UserRouter);
    app.use('/api/category', CategoryRouter)
    app.use('/api/interest', InterestRouter)
    app.use('/api/interestcategory', IntersetCategoryRouter)

    //end of routes

    //handling async errors in apis
    app.use(ErrorHandler)

    //adding additional apis
    app.get("/", (req, res) => res.send({ error: false, message: "SERVER IS LIVE!", result: null }))
    app.get("*", (req, res) => res.status(400).send({ error: true, message: "Route not Found!", result: null }))

}


console.log("🛣️  Routes setup completed")