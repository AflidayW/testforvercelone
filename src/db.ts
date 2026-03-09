// db.ts

type Video = {
    id: number;
    title: string;
    author: string;
    canBeDownloaded: boolean;
    minAgeRestriction: null | number;
    createdAt: string;
    publicationDate: string;
    availableResolutions: string[];
}

type Blog = {
    id: number;
    name: string;
    description: string;
    websiteUrl: string;
    createdAt: string;
    isMembership: boolean;
}

export const db: { videos: Video[], blogs: Blog[] } = {
    videos: [{
        id: 1,
        title: "Fack",
        author: "Bukva",
        canBeDownloaded: true,
        minAgeRestriction: null,
        createdAt: new Date().toISOString(),
        publicationDate: new Date().toISOString(),
        availableResolutions: ["P144"]
    }],

    blogs: [{
        id: 1,
        name: "Blog_fack",
        description: "Bukva_fuck",
        websiteUrl: "https://localhost:5000",
        createdAt: new Date().toISOString(),
        isMembership: false
    }]
}