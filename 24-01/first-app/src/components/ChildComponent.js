import React, { useContext } from "react";
import { AnupamaContext } from "../App";

const ChildComponent = ({ context }) => {
  const anupamaContext = useContext(AnupamaContext);
  return (
    <div>
      <h1
        onClick={(e) => {
          anupamaContext.favoriteCharacter = "Anuj";
        }}
      >
        Child Component: {anupamaContext.favoriteCharacter}
      </h1>
    </div>
  );
};

export default ChildComponent;
