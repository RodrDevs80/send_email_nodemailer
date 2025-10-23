import { Router } from "express";
import sendEmailRoutes from "./sendEmail.route.js";

const allRoutes = Router();

allRoutes.use("/sendEmail", sendEmailRoutes);

export default allRoutes;