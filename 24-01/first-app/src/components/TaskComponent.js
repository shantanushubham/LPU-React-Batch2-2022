import React, { useEffect, useState } from "react";
import higherOrderComponent from "./HOC";
import LOC from "./LOC";

const TaskComponent = () => {
  const [taskList, setTaskList] = useState([]);
  const [sum, setSum] = useState(0);

  // useEffect(() => {
  //   dummyApiCall()
  //     .then((data) => setTaskList(data))
  //     .catch()
  //     .finally(() => setIsLoading(false));
  // }, []);

  useEffect(() => {
    console.log("TaskComponent was mounted!");
  }, [taskList]);

  useEffect(() => {
    console.log("TaskComponent was updated!");

    return () => {
      console.log("TaskComponent was unmounted!");
    };
  });

  const LowerOrder = higherOrderComponent(
    () => console.log("LOC in Task Component"),
    LOC
  );

  return (
    <>
      <div>
        <h1 onClick={(e) => setSum(sum + 1)}>The sum is: {sum}</h1>
      </div>
      <LowerOrder />
    </>
  );
};

export default TaskComponent;

// useEffect is LIKE a combination of componentDidMount, componentDidUpdate, and componentWillUnmount
// useEffect has 2 arguments
// 1. A function that will run when the component is rendered
// 2. An array of values that will trigger the function (optional)

// The second argument is an array
// 1. If no array is passed, then useEffect will run on initial render and every re-render.
// 2. If an empty array is passed, then useEffect will run only on initial render.
// 3. If an array is passed with some values, then useEffect will run on initial render and
// only when the values in the array change.
