import React from "react";
import SampleRenderPropComponent from "./SampleRenderPropComponent";

const RenderPropComponent = () => {
  return (
    <>
      <SampleRenderPropComponent
        render={() => <h1>This is passed as a prop</h1>}
      />
    </>
  );
};

export default RenderPropComponent;
