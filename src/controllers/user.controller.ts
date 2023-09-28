import { Router, Request, Response } from "express";
import prisma from "../config/prisma";

const router =  Router();

router.get("/register", async (req: Request, res: Response) => {});

router.get("/login", async (req: Request, res: Response) => {});

router.get("/:id", async (req: Request, res: Response) => {
    const userId = req.params.id;

    const user = await prisma.user.findUnique({
        where: {id:parseInt(userId)},
    });

    res.status(200).json(user);
});