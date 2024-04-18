console.log("Welcome to todo app");

let todos=[];

let todoDataList=document.getElementById("todo-data-list");
let saveButton=document.getElementById("save-todo");
let todoInputBar=document.getElementById("todo-input-bar");

todoInputBar.addEventListener("keyup",(()=>{
    let todoText=todoInputBar.value;
    if(todoText.length==0){
        if(saveButton.classList.contains("disabled")) return;
        saveButton.classList.add("disabled");
    }
    else if(saveButton.classList.contains("disabled")){
        saveButton.classList.remove("disabled");
    }
}))

saveButton.addEventListener("click",(()=>{
    let todotext=todoInputBar.value;
    if(todotext.length==0) return;
    todos.push(todotext);
    addTodo(todotext,todos.length);
    todoInputBar.value='';

}))

function removeTodo(e){
    let deleteButtonPressed=e.target;
    let indexTobeRemoved=Number(deleteButtonPressed.getAttribute("todo-idx"));
    todos.splice(indexTobeRemoved,1);
    todoDataList.innerHTML="";
    todos.forEach((ele,idx)=>{
        addTodo(ele,idx+1);
    })
}

function addTodo(todoData,todoCount){

    let rowDiv=document.createElement("div");
    let todoItem=document.createElement("div");
    let todoNumber=document.createElement("div");
    let todoDetails=document.createElement("div");
    let todoStatus=document.createElement("div");
    let todoActions=document.createElement("div");
    let deleteButton=document.createElement("button");
    let finishedButton=document.createElement("button");
    let hr=document.createElement("hr");

     deleteButton.setAttribute("todo-idx",todoCount-1);
    deleteButton.onclick=removeTodo;

    // adding classes
    rowDiv.classList.add("row");
    todoItem.classList.add("todo-item","d-flex",
    "flex-row", "justify-content-between", "align-item-center");
    todoNumber.classList.add("todo-no");
    todoDetails.classList.add("todo-details","text-muted");
    todoStatus.classList.add("todo-status","text-muted");
    todoActions.classList.add("todo-action","d-flex","justify-content-start","gap-2");
    deleteButton.classList.add("btn","btn-danger","delete-todo");
    finishedButton.classList.add("btn","btn-success","finished-todo");



    todoNumber.textContent=`${todoCount}`;
    todoDetails.textContent=todoData;
    todoStatus.textContent="In Progress";
    deleteButton.textContent="Delete";
    finishedButton.textContent="Finished";

    todoActions.appendChild(deleteButton);
    todoActions.appendChild(finishedButton);

    todoItem.appendChild(todoNumber);
    todoItem.appendChild(todoDetails);
    todoItem.appendChild(todoStatus);
    todoItem.appendChild(todoActions);

    rowDiv.appendChild(todoItem);
    rowDiv.appendChild(hr);
     
    todoDataList.appendChild(rowDiv);

    

}