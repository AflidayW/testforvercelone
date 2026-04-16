import { query } from "express-validator";
import { PostSortFieldEnum, PostDirectionEnum } from '..//middlewares/main.enums';


export const sortValidator = [
    query('SortBy')
        .default(PostSortFieldEnum.CREATED_AT)
        .isIn(Object.values(PostSortFieldEnum))
        .withMessage(`Allowed sort fields: ${Object.values(PostSortFieldEnum).join(', ')}`),
    query("SortDirect")
        .default(PostDirectionEnum.DESC)
        .isIn(Object.values(PostDirectionEnum))
        .withMessage(`Allowed sort fields: ${Object.values(PostDirectionEnum).join(', ')}`)

]

