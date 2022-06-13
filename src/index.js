document.addEventListener("DOMContentLoaded", () => {
  // your code here
  document.querySelector('form').addEventListener('submit', (e)=>{
    e.preventDefault();
    buildTodo(e.target.new-task-description.value)
  })
});


function buildTodo(task){
  let li  = document.createElement('li');
  let btn = document.createElement('button');
  btn.addEventListener('click', handleDelete)
  btn.textContent = 'Delete'
  li.textContent = task;
  li.appendChild(btn)
  console.log(li)
  document.querySelector('#tasks').appendChild(li)
}

function handleDelete(e){
  e.target.parentNode.remove()
}
