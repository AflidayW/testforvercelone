import { query } from "express-validator";
import { NextFunction } from "express"

const default_page_number = 1;

const default_page_size = 10;

export function PaginationValidation() {
    return [

        query("pageNumber").default(default_page_number).isInt({ min: 1 }).withMessage('Page number must be a positive integer').toInt(),

        query("pageSize").default(default_page_size).isInt({ min: 1, max: 100 }).withMessage("PageSize must be a positive integer").toInt()
    ]

}

