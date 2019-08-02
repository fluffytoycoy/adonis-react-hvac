import React from 'react';


function BulletPoints(props){
  return (
    <div  className="bullet-points float">
      <ul>
        <ListItem bulletPoints={props.bulletPoints}/>
      </ul>
    </div>
  )

  function ListItem(){
    return (
    props.bulletPoints.map((bulletPoint, index)=>{
      return <li key={index}>{bulletPoint}</li>
    }))
  }
}

export default BulletPoints;