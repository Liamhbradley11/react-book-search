import React from "react";
// This file exports the Input, TextArea, and FormBtn components


// By extending the React.Component class, Counter inherits functionality from it
function SearchBar(props){
  return (
      <form className="form-group">
        <input className="searchbar" placeholder="Please Enter a Title" onChange={(event) => props.handleSubmit(event)}></input>
        <button className="btn btn-secondary" type="submit">
          Submit
        </button> 
      </form>
  )}
export default SearchBar;