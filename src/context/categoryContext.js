import React, {useState,createContext} from 'react';
export const CategoryContext = createContext();


export const CategoryProvider = (props) =>{

const [data,setData] = useState([]);
const [minutes,setMinutes] = useState([]);
const [points,setPoints] = useState([]);
const [rebounds,setRebounds] = useState([]);
const [assists,setAssists] = useState([]);
const [steals,setSteals] = useState([]);
const [blocks,setBlocks] = useState([]);
const [threes,setThrees] = useState([]);
const [turnovers,setTurnovers] = useState([]);
const [fouls,setFouls] = useState([]);
const [techfoulouts,setTechFoulOuts] = useState([]);
const [misc,setMisc] = useState([]);
const [currentStat,setCurrentStat] = useState(null);
const [headshotData,setheadshotData] = useState();

  return (
    <CategoryContext.Provider
      value={[
      data,setData,
      minutes,setMinutes,
      points,setPoints,
      rebounds,setRebounds,
      assists,setAssists,
      steals,setSteals,
      blocks,setBlocks,
      threes,setThrees,
      turnovers,setTurnovers,
      fouls,setFouls,
      techfoulouts,setTechFoulOuts,
      currentStat,setCurrentStat,
      headshotData,setheadshotData
      ]}>
      {props.children}
    </CategoryContext.Provider>
  );

}
