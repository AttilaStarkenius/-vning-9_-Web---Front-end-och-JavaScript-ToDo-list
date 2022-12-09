// var list = document.getElementById('demo');
//     var entry = document.getElementById('formAddItem');
//     entry.onsubmit = function(evt) {
//     evt.preventDefault();
//     var item = document.getElementById('item').value;
//     var entry = document.createElement('li');
//     entry.appendChild(document.createTextNode(item));
//     list.appendChild(entry);
// }

// document.getElementById("add").addEventListener("click", addTask);

//     function addTask(evt) {
// 		evt.preventDefault()
//         let task = document.getElementById("task").value;
//         let listElement = document.createElement("LI");
//         let textNode = document.createTextNode(task);
//         listElement.appendChild(textNode);
//         document.getElementById("tasks-list").appendChild(listElement);
//         // Add click listener
//         listElement.addEventListener('click', done);
//     }


function addItemToTheList() {
    var newItem = document.createElement("li");
    var input = document.getElementById("Input");
    newItem.innerHTML = input.value;
    input.value = "";
    document.getElementById("todo").appendChild(newItem);
    
    // Add click listener
    newItem.addEventListener('click', done);
  }
  
  function done() {
    this.className = "done";
    this.removeEventListener('click',done);
  }
  
  // Initialize all listener for current undone tasks
  function init() {
    var undoneItems = document.getElementsByClassName('undone');
    for(var i = 0; i < undoneItems.length; i++){
      undoneItems[i].addEventListener('click', done);  
    }
  }
    

// var node = document.createElement('li');
// node.appendChild(document.createTextNode('Scooter'));
 
// document.querySelector('ul').appendChild(node);





    // prompt(list || n);
    // var el = document.getElementById('demo');
    // alert(el.innerHTML);
    // console.log(el.innerHTML);
// for (var i = 0; i < el.children.length; i++) {
//         el.children[i].innerHTML();
//     }

  

// (document.querySelectorAll('ol')).forEach (function (list) {
//     for (var s, el = list.firstElementChild; el; el = el.nextElementSibling)
//       el.innerHTML = '<span>' + el.innerHTML + '</span>';
// });

//   [0].slice.call (document.querySelectorAll ('ol, ul')).forEach (function (list) {
//     for (var s, el = list.firstElementChild; el; el = el.nextElementSibling)
//       el.innerHTML = '<span>' + el.innerHTML + '</span>';

//     list.addEventListener ('click', function (ev) {
//         if (ev.target.tagName !== 'SPAN')
//           for (var el = this.firstElementChild; el; el = el.nextElementSibling)
//               el.className = el === ev.target ? 'selected' : '';
//     }, false);    
// });