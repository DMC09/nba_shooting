import React,{useEffect,useState,useContext} from 'react';
import { CategoryContext } from "../../context/categoryContext";
import Item from '../service/Item';
import {v4 as uuidv4 } from 'uuid';



function Threes({totalTreys,avgTreys,pctTrys}) {
  const[data, setData,
    headshotData,setheadshotData,
   minutes, setMinutes,
   points,setPoints,
   rebounds,setRebounds,
   assists,setAssists,
   steals,setSteals,
    blocks,setBlocks,
  threes,setThrees,
  fouls,setFouls,
  turnovers,setTurnovers,
  techfoulouts,setTechFoulOuts,
  currentStat,setCurrentStat,
  orderBy,setOrderBy,
  ] = useContext(CategoryContext)
  let viewingStat;

  if(orderBy === 'total') { viewingStat= totalTreys};
  if(orderBy === 'average') { viewingStat= avgTreys};
  if(orderBy === 'percentage') { viewingStat= pctTrys};

  let TopTenList= viewingStat.ranks.slice(0,10);
  let list = TopTenList.map((item,index)=> <Item key={uuidv4()} index={index} info={item}/>)

  useEffect(() => {
    console.log(totalTreys,avgTreys,pctTrys, 'are the stats here??');
  }, []);






  return <div className="stat_container">






   <ul className="stat-items">{list}</ul>
       </div>;
}


export default Threes;


{/*






  */}
