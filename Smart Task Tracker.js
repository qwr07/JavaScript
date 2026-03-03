let tasks =[
    {"tasks":"Clean the house"},
    {"tasks":"study for exams"},
    {"tasks":"washing the dishes"}
]
let newtasks =prompt("Enter your tasks:")
let status=prompt("is the task completed? (yes/no)")
let iscompleted = status.toLowerCase()==="yes"
tasks.push({title:newtasks, completed:iscompleted})
console.log("your tasks are:")
for (let i=0; i<tasks.length; i++){
    let taskStatus=tasks[i].completed?"✔ Done":"✘ Not Done"
    console.log(`${i+1}.${tasks[i].title}-completed:${taskStatus}`)
}
