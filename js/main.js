let form = document.getElementById("form");
let addtask = document.getElementById("addtask");

// ------allinput------------------
let name1 = document.getElementById("name");
let tasktitle = document.getElementById("tasktitle");
let date = document.getElementById("date");
let description = document.getElementById("description");

let showTask = document.getElementById("showTask");

let vision = document.getElementById("vision");
let iconv = document.getElementById("iconv");

addtask.addEventListener("click", (eo) => {
  eo.preventDefault();

  let task = `

<div id="delet" class="task">
<div class="name">   ${tasktitle.value}  </div>
<div class="icon">
<i class="fa-solid fa-eye" id="iconv" data-toggle="modal" data-target="#vision"></i>
<i class="fa-solid fa-trash"></i>
</div>
</div>
`;

  showTask.innerHTML += task;
});

let delet = document.getElementById("delet");

delet.addEventListener("click", (eo) => {
  if (eo.target.className = "fa-solid fa-trash") {
    eo.target.parentElement.parentElement.remove();
  } else {
  }
});
