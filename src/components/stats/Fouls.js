import React,{useEffect,useState} from 'react';
import Item from '../service/Item';
import {v4 as uuidv4 } from 'uuid';

function Fouls({totalFouls,avgFouls}) {

  const[orderBy,setOrderBy] = useState('average');
  let currentStat ;
  orderBy === 'total' ?  currentStat = totalFouls:  currentStat = avgFouls

  let TopTenList= currentStat.ranks.slice(0,10);
  let list = TopTenList.map((item,index)=> <Item key={uuidv4()} index={index} info={item}/>)





  useEffect(() => {

  }, []);
 return <div className="stat_container">
  {orderBy === 'total' ? <button onClick={()=>setOrderBy('average')}>show averages</button> : <button onClick={()=>setOrderBy('total')}>show total</button>}
  <ul className="stat-items">{list}</ul>
      </div>;
}


export default Fouls;