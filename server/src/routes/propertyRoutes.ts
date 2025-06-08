import express from "express";
import {
  getProperties,
  getProperty,
  createProperty,
} from "../controllers/propertyControllers";
import { authMiddleware } from "../middleware/authMiddleware";
import multer from "multer";

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

const router = express.Router();

router.get("/:Id", getProperty);
router.post(
  "/",
  authMiddleware(["manager"]),
  upload.array("photos"),
  createProperty
);
router.get("/", getProperties);

export default router;
