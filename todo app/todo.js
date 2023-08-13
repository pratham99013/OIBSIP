const task_list = document.getElementById("task_list");
const add = document.getElementById("add");
const input_task = document.getElementById("input_task");
add.addEventListener("click", () => {
  const new_input = input_task.value.trim();
  if (new_input == "") return;
  const task_element = `<div class="task" style="background-color:#FF6363;">
    <div class="task_name">${new_input}</div>
    <input type="checkbox" class="checkbox"></input>
    <button class="delete"><i class="fa-solid fa-trash"></i></button>
    </div>`;

  task_list.insertAdjacentHTML("beforeend", task_element);
  const delete_button = document.querySelectorAll(".delete");
  delete_button.forEach((item) => {
     item.addEventListener("click", () => {
      item.parentNode.remove();
    });
  });

  const checkbox = document.querySelectorAll(".checkbox");
  checkbox.forEach((item) => {
    item.addEventListener("click", () => {
      if (item.checked == true) {
        item.parentNode.style.backgroundColor = "#90EE90";
        item.parentNode.classList.add("check");
        console.log(item.parentNode)
      }
      else
      { item.parentNode.style.backgroundColor = "#FF6363";
      item.parentNode.classList.remove("check");
    }
    });
  });
});

const options = document.getElementById("options");
options.addEventListener("change", () => {
  const task = document.querySelectorAll(".task");
 
  switch (options.value) {
    case "All":
       
      task.forEach((item) => {
        item.style.display = "flex";
      });
      break;

    case "Completed":
      task.forEach((item) => {
        if (item.classList.contains("check") === false)
          item.style.display = "none";
        else item.style.display = "flex";
      });
      break;

    case "Incomplete":
      task.forEach((item) => {
        if (item.classList.contains("check") === true)
          item.style.display = "none";
        else item.style.display = "flex";
      });
      break;
      default:
        console.log("hello");
        break;
  }
});