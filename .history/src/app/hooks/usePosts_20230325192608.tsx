interface Post {
    
}

export default function usePosts(currentPage = 0, numPosts = 6) {

    const posts = fetch("https://jsonplaceholder.typicode.com/posts/")

    return posts.slice(currentPage, numPosts);
}

function getPosts() : Promise<>