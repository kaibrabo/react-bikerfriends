import React from "react";
import Card from "./card";

const CardList = ({ friends }) => {
  return (
    <div>
      {
        friends.map((u, i) => { // 'u' is the array (required), 'i' is the index
            return (
                <Card
                    key={i} // key attribute required - for loops (map)
                    id={friends[i].id}
                    name={friends[i].name}
                    email={friends[i].email}
                />
            );
        })
      }
    </div>
  );
};

export default CardList;
