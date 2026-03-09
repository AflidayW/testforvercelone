import { Router, Request, Response } from "express";
import { db } from "../db";
import { superAdminGuardMiddleware } from "../middlewares/auth";
import { idValidation } from "../middlewares/Idvalidator"
import { bodyValidation } from "../middlewares/bodyValidator"
import { inputValidationResultMiddleware } from "../middlewares/MainValidator"

export const blogsRouter = Router();


blogsRouter
    .get("", (req: Request, res: Response) => {
        res.status(200).send(db.blogs)
    })

    .get("/:id", (req: Request, res: Response) => {
        const blog = db.blogs.find(b => b.id === +req.params.id);

        if (!blog) {
            res.status(404).send({ message: "Blog Not Found" });
            return;
        }

        res.status(200).send(blog);
    })

    .post("", superAdminGuardMiddleware, ...bodyValidation, inputValidationResultMiddleware, (req: Request, res: Response) => {
        const { name, description, websiteUrl } = req.body;

        const newBlog = {
            id: db.blogs.length ? db.blogs[db.blogs.length - 1].id + 1 : 1,
            name,
            description,
            websiteUrl,
            createdAt: new Date().toISOString(),
            isMembership: false
        };

        db.blogs.push(newBlog);
        res.status(201).send(newBlog);
    })

    .put("/:id", superAdminGuardMiddleware, idValidation, ...bodyValidation, inputValidationResultMiddleware, (req: Request, res: Response) => {
        const blog = db.blogs.find(b => b.id === +req.params.id);
        const { name, description, websiteUrl } = req.body;

        if (!blog) {
            res.sendStatus(404);
            return;
        }

        blog.name = name ?? blog.name;
        blog.description = description ?? blog.description;
        blog.websiteUrl = websiteUrl ?? blog.websiteUrl;

        res.sendStatus(204);
    })

    .delete("/:id", superAdminGuardMiddleware, (req: Request, res: Response) => {
        const check = db.blogs.find(b => b.id === +req.params.id);

        if (!check) {
            res.sendStatus(404);
            return;
        }

        db.blogs = db.blogs.filter(b => b.id !== +req.params.id);
        res.sendStatus(204);
    });