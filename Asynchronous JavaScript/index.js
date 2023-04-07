const tasks = [
    "Task 1",
    "Task 2",
    "Task 3",
    "Task 4",
    "Task 5"
];

const completeTask = (task) => {
    return new Promise((resolve) => {
      setTimeout(() => {
        console.log(`Completed task: ${task}`);
        resolve(task);
      }, 3000);
    });
};
  
const checkCompletion = (task) => {
    console.log(`Took a short nap after completing: ${task}`);
    if (tasks.length > 0) {
      const nextTask = tasks.shift();
      return completeTask(nextTask)
        .then(() => checkCompletion(nextTask));
    } else {
      console.log("Hurray!! All tasks completed!");
      return Promise.resolve();
    }
};
  
checkCompletion(tasks.shift());