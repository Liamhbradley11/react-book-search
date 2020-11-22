import React from "react";
import "./style.css";
function Bookcard(props) {
  console.log({props});
  return (
    <div className="card" >
      <div className="img-container">
        <img alt={props.id} src={props.image} />
      </div>
      <div>
        <h1 className="card-title">{`${props.title}`}</h1>
        <h2 className="card-subtitle">{`${props.authors}`}</h2>
        <p className="card-text">{`${props.description}`}</p>
      </div>
      {props.showSave && <button className="btn btn-info" onClick={() => props.saveBook(props)}>Save</button> }
      {props.showDelete && <button className="btn btn-secondary" onClick={() => props.deleteBook(props)}>Delete</button>}
    </div>
  );
}
export default Bookcard;