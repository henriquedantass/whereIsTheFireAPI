import { Router } from "express";

//Importando método dentoro do controller de Sac:
import { createSac, getSacList } from "./controllers/SacController";
import { createSacCategory, getSacCategories } from "./controllers/CategoryController";

const routes = Router();

// Como segundo parametro passamos o método que será executado quando o front rodar a requisição nesse endpoint
routes.post("/sac/categories/create", createSacCategory);
routes.get("/sac/categories", getSacCategories);

routes.post("/sac/create", createSac);
routes.get("/sac/list", getSacList);

export default routes;
