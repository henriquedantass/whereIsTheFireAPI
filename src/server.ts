import { createConnection } from "typeorm";
import * as express from "express";
import routes from "./routes";
import "reflect-metadata";

createConnection();

const app = express();

app.use(express.json());
app.use(routes);

app.listen(3000, () => {
  console.log("Server is Running in port 3000");
});
