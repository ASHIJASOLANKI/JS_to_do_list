function addToList(){
    let taskname = document.getElementById('taskname').value;
    let toDo =document.getElementById('myToDo');

    let newtodoitem =document.createElement('div');
        let todoname = document.createElement('li');
        todoname.innerHTML = taskname;
        let deleteBtn = document.createElement('i');
        deleteBtn.classList.add('far');
        deleteBtn.classList.add('fa-trash-alt');

        
        newtodoitem.appendChild(todoname);
        newtodoitem.appendChild(deleteBtn);

        toDo.appendChild(newtodoitem);

}

let toDelete = document.getElementById('myToDo');
    toDelete.addEventListener('click', deleteToDo);

function deleteToDo(e){
    const element = e.target;
    if(element.classList[0] == 'far'){
        element.parentElement.remove();
    }

}
