export interface Post{
    id: string,
    _id?: string,
    title: string,
    content: string,
}

export interface PostsResponse{
    message: string,
    posts: Post[],
}

export interface PostResponse{
    message: string,
    post: Post,
}