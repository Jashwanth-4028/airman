import express from "express";
import { getEprs,getEpr,createEpr } from "../controllers/eprController";
import {getEprSummary} from "../controllers/eprController"
import {updateEprStatus} from "../controllers/eprController"

const router = express.Router();

router.get("/",getEprs);
router.get("/:id",getEpr);
router.get("/summary/:personId",getEprSummary)
router.post("/",createEpr);
router.patch("/:id/status",updateEprStatus);

export default router;