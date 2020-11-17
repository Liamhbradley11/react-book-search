import React from "react";
import "./style.css";
function bookcard(props) {
  return (
    <div className="card" >
      <div className="img-container">
        <img alt={props.id} src={props.image} />
      </div>
      <div>
        <h1 className={props.title} />
        <h2 className={props.authors} />
        <p className={props.description} />
        <p className={props.link} />
      </div>
      <div button onClick={() => props.saveBook(props.id)} className="save"></div>
      <div button onClick={() => props.deleteBook(props.id)} className="delete"></div>
    </div>
  );
}
export default bookcard;