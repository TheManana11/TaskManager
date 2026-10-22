export type Post = {
    userId: number,
    id: number,
    title: string,
    body: string
};

export type CreatePostForm = {
    title: string,
    body: string,  
    userId: number
};

