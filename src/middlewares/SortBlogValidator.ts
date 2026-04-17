// middlewares/blog.validators.ts
import { query } from "express-validator";
import { BlogSortFieldEnum, SortDirectionEnum } from './main.enums';

export const blogSortValidator = [
    query('sortBy')
        .optional()
        .default(BlogSortFieldEnum.CREATED_AT)
        .isIn(Object.values(BlogSortFieldEnum))
        .withMessage(`Allowed sort fields: ${Object.values(BlogSortFieldEnum).join(', ')}`),
    query('sortDirection')
        .optional()
        .default(SortDirectionEnum.DESC)
        .isIn(Object.values(SortDirectionEnum))
        .withMessage(`Allowed directions: ${Object.values(SortDirectionEnum).join(', ')}`),
    // query('pageNumber')
    //     .optional()
    //     .default(1)
    //     .isInt({ min: 1 })
    //     .withMessage('pageNumber must be a positive integer')
    //     .toInt(),
    // query('pageSize')
    //     .optional()
    //     .default(10)
    //     .isInt({ min: 1 })
    //     .withMessage('pageSize must be a positive integer')
    //     .toInt(),
]