import { Router } from "express";
import * as homeController from "./controllers/home";
import * as contactController from "./controllers/contact";

const router = Router();

router.get("/", homeController.index);
router.get("/contact", contactController.getContact);
router.post("/contact", contactController.postContact);

export default (app: any) => {
    app.use(router);
};