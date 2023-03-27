'use client';

import { useEffect, useState } from "react";

interface Post {
    userId: number,
    id: number,
    title: string,
    body: string,
}




export default function usePosts(currentPage = 0, numPosts = 6) {
    const [ posts, setPosts ] = useState([]);
    useEffect(() => {
        async function fetchData() {
            const rsult = await fetch("https://jsonplaceholder.typicode.com/posts/")
            const posts = await rsult.json()
            setPosts(posts)
        }
        fetchData();
    })
    //console.log(posts.slice(currentPage * numPosts, numPosts))
    return posts.slice(currentPage * numPosts, numPosts);
}