import { Router } from "express";
const router = Router();

router.get("/", (req, res) => {
  res.json({ message: "here are the jobs" });
});
router.get("/:jobId", (req, res) => {
  res.json({ message: "here is the job" });
});

router.post("/", (req, res) => {
  res.status(201).json({ message: "job created" });
});

router.patch("/jobId", (req, res) => {
  res.json({ message: "job updated" });
});

router.delete("/jobId", (req, res) => {
  res.json({ message: "job deleted" });
});

export default router;
