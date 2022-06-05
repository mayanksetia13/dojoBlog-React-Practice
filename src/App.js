import React from "react";
import Navbar from "./components/Navbar";
import AddBlog from "./components/AddBlog";
import BlogDetails from "./components/BlogDetails";
import { useState } from "react";

function App() {
    const blogs = [
        {
            id: Math.random().toString(),
            title: "Blog 1",
            content: "Lorem ipsum ",
        },
        {
            id: Math.random().toString(),
            title: "Blog 2",
            content: "Lorem ipsum part 2 ",
        },
    ];

    const [enteredBlogs, setEnteredBlogs] = useState(blogs);
    const addUserHandler = (uTitle, uContent) => {
        setEnteredBlogs((previousBlogs) => {
            return [
                ...previousBlogs,
                {
                    id: Math.random().toString,
                    title: uTitle,
                    content: uContent,
                },
            ];
        });
    };

    return (
        <div>
            <Navbar></Navbar>
            <AddBlog onAddUser={addUserHandler}></AddBlog>
            <BlogDetails blogs={enteredBlogs}></BlogDetails>
        </div>
    );
}

export default App;
