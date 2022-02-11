let tasks = [
  { priority: 10, name: "Task 1" },
  { priority: 5, name: "Task 2" },
  { priority: 15, name: "Task 3" },
];

let sortArray = () => {
  tasks.sort((a, b) => b.priority - a.priority);
};


let addTask = (task) => {
  tasks.push(task);
  sortArray();
};

let deleteTask = (priorityNumber) => {
  let index = tasks.findIndex((task) => task.priority === priorityNumber);
  tasks.splice(index, 1);
  sortArray();
};

console.log('Initial Value', tasks);
addTask({ priority: 7, name: "Task 4" });
console.log("After adding a task", tasks);
deleteTask(15);
console.log("After deleting a task", tasks);




