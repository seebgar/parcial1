import React from "react";

function Menu(props) {
  return (
    <div>
      <ul className="list-group">
         {props.menuList.map((x, i) => {
             return <li className="list-group-item" key={i}> <span><img src={x.image} alt="algo" /></span> {x.text}</li>
         })}
      </ul>
      <br/>
      <p style={{backgroundColor: 'rgb(65, 159, 232)', color: 'white', borderRadius: '1em', padding: '1em'}}>Twieter</p>
    </div>
  );
}

export default Menu;
