import { Link } from "react-router-dom";
import { useState } from "react";
import HomeSidebar from '../components/HomeSidebar';
import BoardManager from "../components/BoardManager";
import { BoardContext } from '../context/BoardContext';


const Home = () => {
  const boardData = {
    active:0,
    boards:[
      {
        //name:'To do list',
        //bgcolor:'#069',
        list:[
          {id:"1",title:"To do",items:[{id:"cdrFt",title:"Project Description 1"}]},
          {id:"2",title:"In Progress",items:[{id:"cdrFv",title:"Project Description 2"}]},
          {id:"3",title:"Done",items:[{id:"cdrFb",title:"Project Description 3"}]}
        ]
      }
    ]
  }
  const [allboard,setAllBoard] = useState(boardData); 


  return (
    <div>
        <BoardContext.Provider value={{allboard,setAllBoard}}>
      <div className='content flex'>
         <HomeSidebar/> 
         <BoardManager/> 
      </div>
        </BoardContext.Provider>
    </div>
  );
};

export default Home;
