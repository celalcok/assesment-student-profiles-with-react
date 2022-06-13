import { useEffect, useState } from "react";
import Search from "./components/search/Search";
import StudentList from "./components/student/StudentList";
import Deneme from "./Deneme";



function App() {
  const [searchName, setSearchName] = useState("");
  const [searchTag, setSearchTag] = useState("");
  
  
  //take data from input
  const handleChangeName = (e) => {
    setSearchName(e.target.value);
  }
  const handleChangeTag = (e) => {
    setSearchTag(e.target.value);
  }

  return (
    <div className="app">
      <Search 
        searchName={searchName}
        onChange={handleChangeName}
        placeHolder="Search by name"
      />
      <Search
        searchName={searchTag}
        onChange={handleChangeTag}
        placeHolder="Search by tag"
      />
      <StudentList
        searchName={searchName}
        searchTag={searchTag}
      />

      {/* <Deneme/> */}
    </div>
  );
}

export default App;
