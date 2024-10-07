import { PiBookmarkSimple } from "react-icons/pi";


const Blogger = ({ blog, handleBookMarks, handleMarksAsRead }) => {
    // console.log(blog);
    const { title, cover, author, author_img, reading_time, posted_date, hashTag } = blog;
    // console.log(hashTag);
    return (
        <div className="mb-16">
            <img className="" src={cover} alt="" />
            <div className="flex justify-between items-center">
                {/* first div  */}
                <div className="flex items-center py-5">
                    <div>
                        <img src={author_img} alt="" />
                    </div>
                    <div className="ml-6">
                        <h1 className="text-lg font-semibold">{author}</h1>
                        <p>{posted_date}</p>
                    </div>
                </div>
                {/* second div */}
                <div className="flex items-center">
                    <span>{reading_time} min read</span>
                    <button onClick={() => handleBookMarks(blog)} className="ml-2 text-2xl text-red-600"><PiBookmarkSimple /></button>
                </div>
            </div>
            <h1 className="text-4xl mb-4">{title}</h1>
            <p>
                {
                    hashTag.map((tag, idx) => <span key={idx}><a href="" className="text-blue-600">{tag}</a></span>)
                }
            </p>
            <button onClick={() => handleMarksAsRead(reading_time)} className="text-purple-600 font-semibold underline pt-4">Mark as read</button>

        </div>
    );
};

export default Blogger;