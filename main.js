const creat = document.querySelector('.creat');
const dolist = document.querySelector('.dolist');
const add = document.querySelector('.add');
const ul = document.querySelector('.ul');

let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
show()
 
    add.addEventListener('click', function () {
    const task = dolist.value;
    if (task === "") return;
    tasks.push(task);
     
    localStorage.setItem("tasks", JSON.stringify(tasks))
    show()
    dolist.value = '';

})

 
 
 
function show() {
    ul.innerHTML = ""
    tasks.forEach((task, i) => {
        const li = document.createElement('li');
        li.textContent = task
        li.classList.add('item')
        ul.appendChild(li)
        var del = document.createElement('button')
        del.textContent = "del"
        li.appendChild(del)
        del.classList.add('del')
        del.addEventListener('click', function () {
            tasks.splice(i, 1);
            localStorage.setItem("tasks", JSON.stringify(tasks))
       show()
        })


    });
}

