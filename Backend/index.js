const express = require("express");
const app = express();

const cors = require("cors");
const login = require("./controllers/login.controller");
const register = require("./controllers/registration.controller");
const detailsController = require("./controllers/details.controller");
const ayurvedaController = require("./controllers/ayurveda.controller");
const ayurvedicController = require("./controllers/ayurvedic.controller");
const bpController = require("./controllers/bp.controller");
const categoriesController = require("./controllers/categoriers.controller");
const comboController = require("./controllers/combo.controller");
const dabourController = require("./controllers/dabour.controller");
const dealsController = require("./controllers/deals.controller");
const dealsOfTheDayController = require("./controllers/dealsOfTheDay.controller");
const drinkController = require("./controllers/drink.controller");
const featureBrandController = require("./controllers/featureBrand.controller");
const healthConcernsController = require("./controllers/healthConcerns.controller");
const heatingDataController = require("./controllers/heatingdata.controller");
const homeopathicController = require("./controllers/homeopathic.controller");
const homeProductController = require("./controllers/homeProduct.controller");
const mineralController = require("./controllers/mineral.controller");
const newArrivesController = require("./controllers/newArrives.controller");
const pathologyController = require("./controllers/pathology.controller");
const personalCareController = require("./controllers/personalcare.controller");
const radiologyController = require("./controllers/radiology.controller");
const supplementOfTheWeekController = require("./controllers/supplementOfTheWeek.controller");
const trendingDataController = require("./controllers/trendingdata.controller");
const productsController = require("./controllers/products.controller");
app.use(express.json());

app.use(cors());

app.use("/login", login);
app.use("/register", register);
app.use("/details", detailsController);
app.use("/products", productsController);
app.use("/ayurveda", ayurvedaController);
app.use("/ayurvedic", ayurvedicController);
app.use("/bp", bpController);
app.use("/categories", categoriesController);
app.use("/combo", comboController);
app.use("/dabour", dabourController);
app.use("/deals", dealsController);
app.use("/dealsofday", dealsOfTheDayController);
app.use("/drink", drinkController);
app.use("/featurebrand", featureBrandController);
app.use("/healthconcerns", healthConcernsController);
app.use("/heatingdata", heatingDataController);
app.use("/homeopathic", homeopathicController);
app.use("/homeproduct", homeProductController);
app.use("/mineral", mineralController);
app.use("/newarrives", newArrivesController);
app.use("/pathology", pathologyController);
app.use("/personalcare", personalCareController);
app.use("/radiology", radiologyController);
app.use("/supplementofweek", supplementOfTheWeekController);
app.use("/trendingdata", trendingDataController);
app.get("/", (req, res) => {
  res.send("This is Home Page");
});
module.exports = app;
