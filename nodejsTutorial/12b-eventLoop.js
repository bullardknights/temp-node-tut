console.log('first task')
setTimeout(()=>{
    console.log('second task')
},0) // callback registered until complete
// offload the task with the callback
// asynchronous code executes after immediate synchronous code
console.log('next task')