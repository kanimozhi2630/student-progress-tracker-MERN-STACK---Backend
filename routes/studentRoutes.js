import express from "express";
import {
  getStudents,
  getStudent,
  addStudent,
  updateStudent,
  deleteStudent
} from "../controllers/studentController.js";

const router = express.Router();

router.get("/", getStudents);
router.get("/:id", getStudent);
router.post("/", addStudent);
router.put("/:id", updateStudent);
router.delete("/:id", deleteStudent);

export default router;
