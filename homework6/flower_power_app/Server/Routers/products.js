Skip to content
 
Search or jump to…

Pull requests
Issues
Marketplace
Explore
 @ralukpopescu Sign out
1
0 0 shadowvzs/pentastagiu-react
 Code  Issues 0  Pull requests 0  Projects 0  Wiki  Insights
pentastagiu-react/module_2_homework_5_react/flower_power_app/Server/Routers/products.js
d1ed3dd  3 hours ago
@shadowvzs shadowvzs week5 homework
     
128 lines (105 sloc)  3.14 KB
const fs = require("fs");
const path = require("path");
const { promisify } = require("util");
const express = require("express");
const router = express.Router();

const filePath = path.join(__dirname, "../Data/products.json");

const services = require("../Services/services");
let STARTING_ID = services.determineStartingId();

const readFileAsync = promisify(fs.readFile);
const writeFileAsync = promisify(fs.writeFile);

const prepareData = async (req, res, next) => {
  let products = await readFileAsync(filePath, "utf8");
  products = JSON.parse(products);
  req.products = products;
  next();
};

const checkForValidProductId = (req, res, next) => {
  if (isNaN(req.params.id)) {
    return res.status(500).send({ error: "Invalid id param" });
  }
  next();
};

router.get("/", prepareData, async (request, response) => {
  try {
    let res = request.products;
    if (request.query.search) {
      res = request.products.filter(
        p =>
          p.name.toLowerCase().search(request.query.search.toLowerCase()) !== -1
      );
    }

    return response.send(res);
  } catch (error) {
    return response.status(500).send(error.message);
  }
});

router.get(
  "/:id",
  checkForValidProductId,
  prepareData,
  async (request, response) => {
    console.log("Response function : OK");
    try {
      const product = request.products.find(el => el.id == request.params.id);

      if (product) {
        return response.send(product);
      }

      return response.status(404).send({ message: "No product found" });
    } catch (error) {
      return response.status(500).send(error.message);
    }
  }
);

router.post("/", prepareData, async (request, response) => {
  try {
    const params = request.body.product;
    if (params) {
      const newProduct = {
        ...params,
        id: STARTING_ID++
      };

      request.products.push(newProduct);
      await writeFileAsync(filePath, JSON.stringify(request.products));

      return response.send(newProduct);
    }
  } catch (error) {
    return response.status(500).send(error.message);
  }
});

/**
 * Modificare produs existent
 */
router.put("/", prepareData, async (request, response) => {
  try {
    const product = request.body;
    if (!product) {
      return response.send({ error: "Missing product param" });
    }
    const modifiedProducts = request.products.map(p => {
      return p.id === +product.id ? product : p;
    });

    await writeFileAsync(filePath, JSON.stringify(modifiedProducts));

    return response.send(product);
  } catch (error) {
    return response.status(500).send(error.message);
  }
});

/**
 * Stergere produs existent
 */
router.delete("/:id", prepareData, async (request, response) => {
  try {
    const idToDelete = request.params.id;

    const index = request.products.findIndex(p => p.id === +idToDelete);
    if (index === -1) {
      return response.send({ error: "No product found" });
    }

    request.products.splice(index, 1);

    await writeFileAsync(filePath, JSON.stringify(request.products));

    return response.send({ message: `Deleted prooduct ${idToDelete}` });
  } catch (error) {
    return response.status(500).send(error.message);
  }
});

module.exports = router;
