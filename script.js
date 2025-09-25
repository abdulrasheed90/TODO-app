  const inputBox = document.getElementById("input-box");
    const listContainer = document.getElementById("list-container");

    function addTask() {
      const task = inputBox.value.trim();
      if (!task) {
        alert("You must write something!");
        return;
      }

      let li = document.createElement("li");
      li.textContent = task;

      let span = document.createElement("span");
      span.innerHTML = "&#10005;"; // × symbol
      li.appendChild(span);

      listContainer.appendChild(li);
      inputBox.value = "";
      saveData();
    }

    listContainer.addEventListener("click", function(e) {
      if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
      } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
      }
    });

    function saveData() {
      localStorage.setItem("tasks", listContainer.innerHTML);
    }

    function showTask() {
      listContainer.innerHTML = localStorage.getItem("tasks") || "";
    }

    showTask();