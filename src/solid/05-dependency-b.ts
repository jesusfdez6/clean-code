import { PostProvider } from "./05-dependency-c";

interface Post {
    body: string;
    id: number;
    title: string;
    userId: number;
}


export class PostService {

    private posts: Post[] = [];

    constructor(private postProvider: PostProvider) { }

    async getPosts() {

        this.posts = await this.postProvider.getPost();
        return this.posts;
    }
}