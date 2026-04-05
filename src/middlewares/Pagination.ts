import { query } from "express-validator";

const default_page_number = 1;

const default_page_size = 10;

export function PaginationValidation() {
    return [

        query("PageNumber").default(default_page_number).isInt({ min: 1 }).withMessage('Page number must be a positive integer').toInt(),

        query("PageSize").default(default_page_size).isInt({ min: 1, max: 100 }).withMessage("PageSize must be a positive integer").toInt()
    ]
}

