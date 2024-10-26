export interface Post{
    id: string,
    title: string,
    content: string,
}

export interface PostsResponse{
    message: string,
    posts: Post[],
}