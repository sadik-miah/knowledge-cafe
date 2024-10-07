
import BookMark from "../bookMark/BookMark";

const Bookmarks = ({ bookMarked, readingTime }) => {
    // console.log(bookMarked);
    return (

        <div className="md:w-1/3 bg-gray-300 ml-4 mt-4">
            <div>
                <h1 className="text-2xl text-center bg-red-300 py-2 m-3">Reading Time: {readingTime}</h1>
            </div>
            <div className=" mt-2 rounded-md">
                <p className="text-3xl text-center py-3">BookMarked Blogs: {bookMarked.length} </p>
                {
                    bookMarked.map((bookMark, idx) => <BookMark key={idx} bookMark={bookMark}></BookMark>)
                }

            </div>
        </div>
    );
};

export default Bookmarks;