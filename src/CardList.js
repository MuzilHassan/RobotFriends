import React from "react";
import Card from "./Card";


const CardList = ({ robots }) => {

    return (
        robots.map((user, i) => {
            return (
                <Card key={robots[i].id} id={user.id} name={robots[i].name} email={robots[i].email} />
            )
        })
    )


}
export default CardList;