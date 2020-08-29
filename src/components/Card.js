import React from "react";
import { Collapse } from "antd";
const { Panel } = Collapse;

const Card = ({ img, title, ingredients, calories }) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={img} width="180" height="180" alt="Recipe" />
      </div>
      <div className="recipe-infos">
        <div className="recipe-title">{title}</div>
        <div className="recipe-calories">{Math.floor(calories)}ka</div>
      </div>
      <hr />
      <div className="ingeredients">
        <Collapse defaultActiveKey={["1"]}>
          <Panel header="INGREDEINTS">
            {ingredients.map((ingr, i) => {
              return <p key={i}>{ingr}</p>;
            })}
          </Panel>
        </Collapse>
        ,
      </div>
    </div>
  );
};

export default Card;
