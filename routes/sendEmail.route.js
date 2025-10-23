import { Router } from "express";
import enviarEmailController from "../controller/sendEmail.controller.js";

const sendEmailRoutes = Router();

sendEmailRoutes.post("/", enviarEmailController);


export default sendEmailRoutes;