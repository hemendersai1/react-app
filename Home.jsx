import React from 'react'
import Header from '../components/home/Header'
import "./home.css";
import SearchBar from '../components/home/SearchBar';
import Filters from '../components/home/Filters';
import Todos from '../components/home/Todos';
import addTask from '../components/home/addTask';
const Home = () => {
    const homeData = {
      stats:[
         {label: "All",
         value:4},
        {label: "completed",
        value:6},
        {label: "In Progress",
        value:2},
        {label: "Archived",
        value:10}
      ],



 todo_data:[
  {
    title:"Title1",
    desc:"desc1Lorem ipsum dolor sit amet consectetur adi obcaecativitae nihil",
    color:"#00ac69",
    status:"completed",
  },
  {
    title:"Title2",
    desc:"dLorem ipsum dolor sit amet consectetur adipisicing vitae nihil",
    color:"#00ac69",
    status:"in progress",
  },
  {
    title:"Title3",
    desc:"dLorem ipsum dolor sit amet consectetur adipisicing ",
    color:"#00ac69",
    status:"archived",
  },
  {
    title:"Title4",
    desc:"desc4dLorem ipsum dolor sit amet consectetur adipisicing ",
    color:"#00ac69",
    status:"completed",
  },
 ]



    };
  return (
    <div>
      <addTask/>
      <div className='home-container'><Header />
      <SearchBar/>
      <Filters apiData={homeData}/>
      <Todos apiData={homeData?.todo_data}/></div>
    </div>
  );
};

export default Home
