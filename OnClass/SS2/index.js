// const a = 1;
// const b = 2;

// console.log(a+b);
// console.log(global);

const tasks = [
    {
        name: 'Hoc 1',
        isCompleted: true
    },
    {
        name: 'Hoc 2',
        isCompleted: true
    },
    {
        name: 'Hoc 3',
        isCompleted: false
    },
    {
        name: 'Hoc 4',
        isCompleted: true
    },
    {
        name: 'Hoc sinh',
        isCompleted: false
    },

]

const completedTasks = tasks.filter(task => task.isCompleted);

console.log(completedTasks);