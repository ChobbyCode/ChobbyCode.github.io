import { Fragment } from "react";

function ListGroup(){
 
  const items = ["Bread", "Chesse", "And", "Toast"];
  //const items = [];


  if (items.Length === 0){
    return <p>No items Found</p>
  }

  return (
  <Fragment>
  <h1>ListGroup</h1>
  { items.length === 0 ? <p>No Items Found</p> : null}
    <ul className="list-group">
      {items.map((item) => (
        <li className="list-group-item" key={item}>{item}</li>
      ))}
    </ul>
  </Fragment>
  ); 
}

export default ListGroup;
