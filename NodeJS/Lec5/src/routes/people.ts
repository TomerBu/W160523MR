import { RequestHandler, Router } from "express";

const router = Router();

//   GET /api/v1/people
router.get("/", (req, res) => {
  res.json({ message: "OK" });
});

export { router as peopleRouter };
