import { body } from 'express-validator';
export const bodyValidation = [
    body("name")
        .notEmpty().withMessage("Name is required")
        .isLength({ max: 15 }).withMessage("Name must be less than 15 characters"),
    body("description")
        .notEmpty().withMessage("Description is required")
        .isLength({ max: 500 }).withMessage("Description must be less than 500 characters"),
    body("websiteUrl")
        .notEmpty().withMessage("WebsiteUrl is required")
        .isLength({ max: 100 }).withMessage("WebsiteUrl must be less than 100 characters")
        .matches(/^https:\/\/([a-zA-Z0-9_-]+\.)+[a-zA-Z0-9_-]+(\/[a-zA-Z0-9_-]+)*\/?$/)
        .withMessage("WebsiteUrl must be a valid URL"),
];