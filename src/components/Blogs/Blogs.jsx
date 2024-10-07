import { useEffect, useState } from "react";
import Blogger from "../blogger/Blogger";

const Blogs = ({ handleBookMarks, handleMarksAsRead }) => {
    const [blogs, setBlogs] = useState([]);
    useEffect(() => {
        fetch(`blog.json`)
            .then(res => res.json())
            .then(data => setBlogs(data))
    }, [])
    return (
        <div className="md:w-2/3">
            <h1 className="text-3xl">Blogs: {blogs.length}</h1>
            {
                blogs.map(blogs => <Blogger
                    handleMarksAsRead={handleMarksAsRead}
                    handleBookMarks={handleBookMarks}
                    key={blogs.id}
                    blog={blogs}>

                </Blogger>)
            }
        </div>
    );
};

export default Blogs;