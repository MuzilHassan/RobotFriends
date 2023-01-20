import React from "react";


const Searchbox = ({ change }) => {

    return (
        <div>
            <input className=" ba bg-lightest-blue b--green  pa3" type='Search' placeholder="Search here" onChange={change}></input>

        </div>
    )
}
export default Searchbox;