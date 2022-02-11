import React, { useRef } from "react";
import { useCookies } from "react-cookie";

const TestComponent = () => {
  const ref = useRef(null);
  return (
    <>
      <ButtonComponent ref={ref}>Test button </ButtonComponent>
    </>
  );
};

const ButtonComponent = React.forwardRef((props, ref) => {
  const [cookies, setCookie, removeCookie] = useCookies(["name"]);
  return (
    <button ref={ref} onClick={(e) => removeCookie("name")}>
      {props.children}
    </button>
  );
});
export default TestComponent;
