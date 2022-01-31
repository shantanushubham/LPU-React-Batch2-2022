import React, { useRef } from "react";

const TestComponent = () => {
  const ref = useRef(null);
  return (
    <>
      <ButtonComponent ref={ref}>Test button </ButtonComponent>
    </>
  );
};

const ButtonComponent = React.forwardRef((props, ref) => (
  <button ref={ref} onClick={(e) => console.log(props)}>
    {props.children}
  </button>
));

export default TestComponent;
