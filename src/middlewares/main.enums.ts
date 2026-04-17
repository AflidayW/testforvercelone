
export enum SortDirectionEnum {
    ASC = 'asc',
    DESC = 'desc'
}

// Для блогов
export enum BlogSortFieldEnum {
    CREATED_AT = 'createdAt',
    NAME = 'name',
    DESCRIPTION = 'description',
    WEBSITE_URL = 'websiteUrl'
}

// Для постов
export enum PostSortFieldEnum {
    CREATED_AT = 'createdAt',
    TITLE = 'title',
    SHORT_DESCRIPTION = 'shortDescription',
    CONTENT = 'content',
    BLOG_ID = 'blogId',
    BLOG_NAME = 'blogName'
}