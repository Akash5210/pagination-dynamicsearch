import { useEffect, useState } from 'react';
import '../App.css';
import Person from "./Person";
import tableCollection from "../mockaroo-data.json"
import Pagination from './Pagination';

function App() {
  const [tableData, setTableData] = useState("");
  const [currentPage, setCurrentPage] = useState(1);          //it is current active page
  const [postsPerPage, setPostPerPage] = useState(10);
  const [theme, setTheme] = useState({themeValue: "light-theme", themeIcon: "fa fa-moon-o"});     // state for theme

  useEffect(()=>{
    setTableData(tableCollection);
  }, []);

        //theme toggler start*******
  const toggleTheme = ()=>{
    theme.themeValue === "dark-theme" ? setTheme({themeValue: "light-theme", themeIcon: "fa fa-moon-o"}) 
      : setTheme({themeValue: "dark-theme", themeIcon: "fa fa-sun-o"});
  }
  useEffect(()=>{
    document.body.className = theme.themeValue; 

  }, [theme]);
        //theme toggler end*********
  
  const lastPostIndex = currentPage * postsPerPage;
  const firstPostIndex = lastPostIndex - postsPerPage;
  // const currentPosts = tableData.slice(firstPostIndex, lastPostIndex);

  return (
    <div className="App container">
      <div className='d-flex mt-2 justify-content-between'>
        <h2 className=''>Welcome to person data</h2>
        <div className="">
          <span class="theme-toggler" onClick={toggleTheme}>
            <i className={theme.themeIcon} /> 
          </span> 
        </div>  
      </div>
      <Person 
        tableData={tableData} 
        firstPostIndex={firstPostIndex} 
        lastPostIndex={lastPostIndex}  
        setCurrentPage={setCurrentPage}
      />
      <Pagination 
        totalPosts={tableData.length} 
        postsPerPage={postsPerPage} 
        setCurrentPage={setCurrentPage}
        currentPage={currentPage}
      />
    </div>
  );
}

export default App;
