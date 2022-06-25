import { useState } from "react";

export default function Post({posts: initalPosts}){
    const [start, setStart] = useState(0);
    const [posts, setPosts] = useState(initalPosts);

    async function loadMore(){
        
        const reg = await fetch(`https://jsonplaceholder.typicode.com/posts?_start=${start}&_limit=5`);
        const newposts = await reg.json();
        setPosts([...posts, ...newposts]);
        setStart(start + 5);
    }
    return (
        <div className="flex felx-col items-center justify-start bg-gray-100 min-h-screen p-20">
            <div className="w-8/12 mx-auto text-center">
                {posts.map(({id, title, body }) => (
                    <article className="p-8 bg-white text-left" key={id}>
                        <a href={id} className="block mt-1 text-lg leading-tight font-medium text-black">
                            {title}
                        </a>
                        <p className="mt-2 text-gray-500">
                            {body}
                        </p>
                    </article> 
                ))}

                <button className="border-2 px-4 py-2 rounded hocer:bg-white hover:border-transparent"
                onClick={loadMore}>
                    Load More
                </button>
            </div>
        </div>
    )
}

export async function getServerSideProps(){
    const reg = await fetch('https://jsonplaceholder.typicode.com/posts?_start=0&_limit=5');
    const posts = await reg.json();
    
    return{
        props: {
            posts
        } 
    }
}