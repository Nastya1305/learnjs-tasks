let textarea = document.createElement("textarea");

let textEdit = document.createElement("div");
textEdit.innerHTML = "<div class='text-edit'>"
   + "<button id='ok-btn' type='submit'>OK</button>"
   + "<button id='cencel-btn' type='reset'>CANSEL</button>"
   + "</div>";
textEdit.prepend(textarea);

let okBtn = textEdit.querySelector("#ok-btn");
let cencelBtn = textEdit.querySelector("#cencel-btn");

let baguaTable = document.body.querySelector("#bagua-table");


baguaTable.onclick = function (event) {
   let td = event.target;
   if (td.tagName != 'TD') return;

   if (this.querySelector("td.edited")) return;


   td.classList.add("edited");

   textarea.style.height = td.clientHeight + "px";
   textarea.style.width = td.clientWidth + "px";

   let tdText = td.innerHTML;
   textarea.value = tdText;

   td.innerHTML = "";
   td.append(textEdit);

   textarea.focus();

   okBtn.onclick = function () {
      td.innerHTML = textarea.value;
      td.classList.remove("edited");
   };

   cencelBtn.onclick = function () {
      td.innerHTML = tdText;
      td.classList.remove("edited");
   };

};





