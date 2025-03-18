// เลือก Elements
const taskInput = document.getElementById('taskInput');
const addTaskBtn = document.getElementById('addTask');
const todoList = document.getElementById('todoList');
const clearCompletedBtn = document.getElementById('clearCompleted');
const clearAllBtn = document.getElementById('clearAll');

// ตัวแปรเก็บรายการ To-Do (ถ้าไม่มีให้ใช้ [])
let todos = JSON.parse(localStorage.getItem('todos')) || [];

// แสดงรายการ Todo
function renderTodos() {
  todoList.innerHTML = '';
  todos.forEach((todo, index) => {
    const li = document.createElement('li');
    li.classList.add(todo.completed ? 'completed' : ''); // เพิ่ม class ถ้าทำเสร็จแล้ว
    
    li.innerHTML = `
      <span>${todo.text}</span>
      <div class="task-actions">
        <button class="toggle" data-index="${index}">${todo.completed ? '↩️' : '✓'}</button>
        <button class="delete" data-index="${index}">🗑️</button>
      </div>
    `;
    
    todoList.appendChild(li);
  });

  saveTodos();
}

// บันทึก To-Do ลง Local Storage
function saveTodos() {
  localStorage.setItem('todos', JSON.stringify(todos));
}

// โหลด To-Do ตอนเริ่มต้น
function loadTodos() {
  renderTodos();
}

// ✅ **เพิ่มรายการใหม่**
addTaskBtn.addEventListener('click', function () {
  const taskText = taskInput.value.trim();
  if (taskText === '') return; // ถ้าว่าง ไม่ต้องเพิ่ม

  todos.push({ text: taskText, completed: false }); // เพิ่มลงใน array
  taskInput.value = ''; // เคลียร์ช่องป้อนข้อความ
  renderTodos(); // อัปเดต UI
});

// ✅ **กดปุ่ม "✓" เพื่อทำเครื่องหมายว่าทำเสร็จแล้ว**
todoList.addEventListener('click', function (event) {
  if (event.target.classList.contains('toggle')) {
    const index = event.target.getAttribute('data-index');
    todos[index].completed = !todos[index].completed;
    renderTodos();
  }
});

// ✅ **กดปุ่ม "🗑️" เพื่อลบรายการ**
todoList.addEventListener('click', function (event) {
  if (event.target.classList.contains('delete')) {
    const index = event.target.getAttribute('data-index');
    todos.splice(index, 1); // ลบรายการออกจาก array
    renderTodos();
  }
});

// ✅ **ลบรายการที่ทำเสร็จแล้ว**
clearCompletedBtn.addEventListener('click', function () {
  todos = todos.filter(todo => !todo.completed); // เก็บเฉพาะรายการที่ยังไม่เสร็จ
  renderTodos();
});

// ✅ **ลบทั้งหมด**
clearAllBtn.addEventListener('click', function () {
  todos = []; // ตั้งค่า array เป็นว่าง
  renderTodos();
});

// โหลดรายการ To-Do ตอนเริ่มต้น
loadTodos();
