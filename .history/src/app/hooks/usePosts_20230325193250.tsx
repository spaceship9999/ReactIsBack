interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export default async function usePosts(currentPage = 0, numPosts = 6) {
    const posts = await getPosts();
    console.log(posts)
    return posts.slice(currentPage * numPosts - 1, numPosts);
}

async function getPosts() : Promise<Post[]> {
    return fetch("https://jsonplaceholder.typicode.com/posts/")
        .then(res => res.json())
}