import { json, urlencoded } from "body-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import { getAllRecipes, getRecipes, insertRecipe } from "./src/db/getDb";

const app = express();

export class Application {
  constructor() {
    this.setupApplicationSettings();
    this.setupControllers();
  }

  setupApplicationSettings() {
    app.use(cors());
    app.use(urlencoded({ extended: false }));
    app.use(json());
  }

  listen() {
    app.listen(3080, () => console.log("Listening on port 3080"));
  }

  setupControllers() {
    app.get("/recipes", (req: Request, res: Response) => {
      const term = req.query.search as string|undefined;
      const results = term ?
        getRecipes(term) :
        getAllRecipes();
      res.status(200).send({ results, term });
    });
    app.post("/recipes", (req: Request, res: Response) => {
      // TODO validate request body
      const { title, body } = req.body;
      insertRecipe(title, body);
      // TODO perhaps return recipe id?
      res.status(200).send("");
    });
    app;
  }
}

const application = new Application();

application.listen();
