const creat = document.querySelector('.creat');
const dolist = document.querySelector('.dolist');
const add = document.querySelector('.add');
const clear = document.querySelector('.clear');
const ul = document.querySelector('.ul');

let curnutIndex = null;
// اتسارجاع العنصار من الذاكرة وان لم توجد ننشئ مصفوفة
let tasks = JSON.parse(localStorage.getItem("tasks")) || [];
// اذا في عناصر اعرضا لينا   
show()
ButtonClear()

// حدث اضافة العنصر 
add.addEventListener('click', function () {
    const task = dolist.value.trim();
    if (task === "") return;
    // الخطوة الثانية في التعديل
    // اهم حاجة هنا لو عايز تعدل في قيمة عنصر في مصفوفة بتحفظ 
    // curnutIndex   الفهرس حقها في متغير خارجي قيمتو نل
    //   بعداك بتمرر شرط اذا الفهرس في قيمة العنصر الفي المصفوفة خلي قيمتو قيمة الادخال  
    // واذا لم يوجد قيمة للفهرس اضيف المهمة عادي
    if (curnutIndex !== null) {
        tasks[curnutIndex] = task
        // task هنا قيمة الادخال  
        curnutIndex = null;

    }
    else {
        addTask(task)

    }
    show()
    ButtonClear()

    dolist.value = "";
});



// دالة الاضافة
function addTask(newTask) {
    tasks.push(newTask);
    localStorage.setItem("tasks", JSON.stringify(tasks))
}
function show() {
    ul.innerHTML = "";
    // الشكل العام للarray.forEach(function(element, index, array)
    tasks.forEach(function (task, i) {
        let li = document.createElement('li')
        li.classList.add('item')
        li.textContent = task;
        ul.appendChild(li)

        // انشاء زر الحذف
        let btn_del = document.createElement("button");
        btn_del.classList.add('del')
        btn_del.textContent = "Delet";
        li.appendChild(btn_del);
        //  انشاء زر التعديل
        let btn_update = document.createElement('button')
        btn_update.textContent = 'update';
        btn_update.classList.add('update')
        li.appendChild(btn_update)
        // حدث الحذف
        btn_del.addEventListener('click', function () {
            tasks.splice(i, 1)
            localStorage.setItem("tasks", JSON.stringify(tasks))
            show()
            ButtonClear()





        })

        // تعديل االعنصر
        btn_update.addEventListener('click', function () {
            // الخطوى الاولى عند الضغط  curnutIndex = i; 
            //   وبنخلي قيمة الادخال تساوي tasks[curnutIndex];
            curnutIndex = i;
            dolist.value = tasks[curnutIndex];



        })
    });
}

// دالة شرط ظهور زر حذف المحتوى
function ButtonClear() {
    if (tasks.length > 0) {
        clear.style.display = 'inline-block'
    }
    else {
        clear.style.display = 'none'
    }
}

// حدث الضغظ على زر حف الكل
clear.addEventListener('click', function () {
    DeleteALl();

})

// دالة حذف المحتوى كل
     function DeleteALl() {
    localStorage.removeItem("tasks")
    tasks = [];
    show()
    ButtonClear()

}















 














