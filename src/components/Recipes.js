import React from "react";
import Card from "./Card";

const Recipes = (props) => {
  return (
    <div className="recipes-container">
      {props.loading ? (
        "Loading"
      ) : (
        <React.Fragment>
          {props.data ? (
            <React.Fragment>
              {props.data.map((recipe, i) => {
                return (
                  <Card
                    key={i}
                    title={recipe.recipe.label}
                    img={recipe.recipe.image}
                    ingredients={recipe.recipe.ingredientLines}
                    calories={recipe.recipe.calories}
                  />
                );
              })}
            </React.Fragment>
          ) : (
            <h3>No recipe to display </h3>
          )}
        </React.Fragment>
      )}
    </div>
  );
};

export default Recipes;
