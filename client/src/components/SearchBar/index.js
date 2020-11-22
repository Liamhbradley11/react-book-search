import React from "react";
// This file exports the Input, TextArea, and FormBtn components
// By extending the React.Component class, Counter inherits functionality from it
function SearchBar(props){
  return (
      <form className="form-group" id="searchform" onSubmit={(event) => props.handleSubmit(event)}>
        <input className="searchbar" placeholder="Please Enter a Title" onInput={(event) => props.handleInput(event)}/>
        <button className="btn btn-secondary" type="submit">
          Submit
        </button> 
      </form>
  )}
export default SearchBar;