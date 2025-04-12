import Nav from './components/Nav';
import Header from './components/Header'
import './App.css'
import Main from './components/main';
import { useRef } from 'react';

function App() {

  const coursesRef = useRef(null);
  return (
    <>
   <Nav/>
   <Header  onScrollToCourses={() => {
        coursesRef.current?.scrollIntoView({ behavior: 'smooth' });
      }}/>
   <Main coursesRef={coursesRef} />
    </>
  )
}

export default App
