import Headers from './components/headers/Headers'
import './App.css'
import Blogs from './components/Blogs/Blogs'
import Bookmarks from './components/bookMarks/Bookmarks'
import { useState } from 'react'


function App() {
  const [bookMarked, setBookMarks] = useState([]);
  const [readingTime, setReadingTime] = useState(0);
  const handleBookMarks = blog => {
    const newBookMarks = [...bookMarked, blog];
    setBookMarks(newBookMarks);
  }
  const handleMarksAsRead = time => {
    setReadingTime(readingTime + time);
    // console.log(readingTime);
  }
  return (
    <div className='max-w-6xl mx-auto'>
      <Headers></Headers>
      <div className='md:flex'>
        <Blogs handleBookMarks={handleBookMarks} handleMarksAsRead={handleMarksAsRead}></Blogs>
        <Bookmarks bookMarked={bookMarked} readingTime={readingTime}></Bookmarks>
      </div>

    </div>
  )
}

export default App
