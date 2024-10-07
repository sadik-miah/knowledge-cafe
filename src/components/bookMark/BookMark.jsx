

const BookMark = ({ bookMark }) => {
    const { title } = bookMark;
    return (
        <div className="bg-slate-200 m-4 p-4 rounded-md">
            <h3 className="text-xl">{title}</h3>
        </div>
    );
};

export default BookMark;