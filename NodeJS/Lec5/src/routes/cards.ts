import { Router } from "express";
import { isBusiness } from "../middleware/is-business";
import { validateCard } from "../middleware/validation";
import { createCard } from "../service/card-service";
import { ICardInput } from "../@types/card";
import { BizCardsError } from "../error/biz-cards-error";
import { Card } from "../database/model/card";
import { validateToken } from "../middleware/validate-token";

const router = Router();

//body + JWT(userID)
router.post("/", isBusiness, validateCard, async (req, res, next) => {
  try {
    const userId = req.user?._id;

    if (!userId) {
      throw new BizCardsError("User must have an id", 500);
    }
    const savedCard = await createCard(req.body as ICardInput, userId);

    res.json({ card: savedCard });
  } catch (e) {
    next(e);
  }
});

router.get("/", async (req, res, next) => {
  try {
    //move to service
    const cards = await Card.find();
    return res.json(cards);
  } catch (e) {
    next(e);
  }
});

router.get("/my-cards", validateToken, async (req, res, next) => {
  try {
    const userId = req.user?._id!;

    const cards = await Card.find({ userId });

    return res.json(cards);
  } catch (e) {
    next(e);
  }
});

router.get("/:id", async (req, res, next) => {
  try {
    const { id } = req.params;

    const card = await Card.findById(id);
    

    return res.json(card);
  } catch (e) {
    next(e);
  }
});

export { router as cardsRouter };
