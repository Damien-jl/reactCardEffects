import React from "react";

function Card({name, image}) {
    const [{angle,x,y}] = useState({
      angle: Math.random() * 90 - 45,
      x: Math.random() * 40 - 20,
      y: Math.random() * 40 - 20
    })
  
    const change = `translate(${x}px, ${y}px) rotate(${angle})`;
  
    return <img
        className="Card"
        alt={name}
        src={image}
        style={change} 
        />;
  }

export default Card;
