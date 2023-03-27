interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
}

export default function usePosts(currentPage = 0, numPosts = 6) {

    const posts = await getPosts();

    return posts.slice(currentPage, numPosts);
}

async function getPosts() : Promise<Post[]> {
    return fetch("https://jsonplaceholder.typicode.com/posts/")
        .then(res => res.json())
}