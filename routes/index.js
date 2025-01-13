import express from "express";
import v1Routes from "./v1/initialRoutes.js";
import { urlVersioning } from "../middleware/apiVersioning.js";

const router = express.Router();

router.use("/v1", urlVersioning("v1"), v1Routes);

export default router;
