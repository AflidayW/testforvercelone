import { Router, Request, Response } from "express";
import { db } from "../db";
export type Blog = {
    id: string,
    name: string,
    description: string,
    websiteUrl: string,
    createdAt: string,
    isMembership: boolean
}

export const productRepository = {

    async findAllBlogs(): Promise<Blog[]> {
        const FoundedBlogs = await db.collection<Blog>("Blogs").find({}, { projection: { _id: 0 } }).toArray();
        return FoundedBlogs;

    },

    async findOneBlog(req: Request): Promise<Blog | null> {
        const FoundedBlog = await db.collection<Blog>("Blogs").findOne({ id: req.params.id }, { projection: { _id: 0 } })
        return FoundedBlog;
    },

    async CreateBlog(req: Request): Promise<Blog> {
        const { name, description, websiteUrl } = req.body;
        const newBlog: Blog = {
            id: String(Date.now()),
            name,
            description,
            websiteUrl,
            createdAt: new Date().toISOString(),
            isMembership: false
        };
        await db.collection<Blog>("Blogs").insertOne({ ...newBlog })
        return newBlog;
    },

    async UpdateBlog(req: Request): Promise<Boolean> {
        const { name, description, websiteUrl } = req.body;
        const result = await db.collection<Blog>("Blogs").updateOne({ id: req.params.id }, { $set: { name, description, websiteUrl } })
        return result.matchedCount > 0;
    },

    async DeleteBlog(req: Request): Promise<Number> {
        const Result = await db.collection("Blogs").deleteOne({ id: req.params.id });

        return Result.deletedCount

    }
}

