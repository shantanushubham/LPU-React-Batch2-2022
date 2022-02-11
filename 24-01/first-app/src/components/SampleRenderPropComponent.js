import React from "react";

const SampleRenderPropComponent = ({ render }) => {
  return (
    <div>
      This is Sample Render Prop Component
      {render()}
    </div>
  );
};

export default SampleRenderPropComponent;
