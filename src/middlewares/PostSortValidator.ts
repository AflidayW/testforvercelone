// middlewares/post.validators.ts
import { query } from "express-validator";
import { PostSortFieldEnum, SortDirectionEnum } from '../middlewares/main.enums';

export const postSortValidator = [
    query('sortBy')
        .optional()
        .default(PostSortFieldEnum.CREATED_AT)
        .isIn(Object.values(PostSortFieldEnum))
        .withMessage(`Allowed sort fields: ${Object.values(PostSortFieldEnum).join(', ')}`),
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