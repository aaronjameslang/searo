import { json, urlencoded } from "body-parser";
import cors from "cors";
import express, { Request, Response } from "express";
import { DUMMY_RECIPES } from "./src/Recipe";

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
      res.status(200).send({ results: DUMMY_RECIPES });
    });
    app.post("/recipes", (req: Request, res: Response) => {
      res.status(200).send("");
    });
    app;
  }
}

const application = new Application();

application.listen();
