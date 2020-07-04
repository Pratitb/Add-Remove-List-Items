//-----------------------------------------------------------------------------------------------------------------------------------------------
var header = document.getElementById("main-header");
header.style.backgroundColor = "#282c87";

//----------------------------------------------------------------------------------------------------------------
//now we'll look at creating elements using javascript. we'll add elements to the DOM. uptill now we have been just selecting and changing stuff. create and insert elements

//create a new div
var newDiv = document.createElement("div");
//add class
newDiv.className = "new-class";
//add id
newDiv.id = "new-id";
//add title
newDiv.title = "new-title";
//add attribute
newDiv.setAttribute("title", "hello-title");
//to add text, we use textNode
var newDivText = document.createTextNode("New-text");
//add text to div
newDiv.appendChild(newDivText);

//--------------------------------VIDEO 4-----------------------------------------------------------------

//HERE WE NEED TO ADD LIST ITEMS WHEN WE CLICK SUBMIT
//WE HAVE THE FORM ID AS ADDFORM
//LET'S CREATE A VARIABLE TO COLLECT THE FORM

var form = document.getElementById("addForm");

//LETS'S PUT THE UNORDERED LIST INTO A VARIABLE

var list = document.getElementById("items");

//LET'S PUT THE FORM TEXT BOX INTO A VARIABLE
var filter = document.getElementById("filter");

//FILTER EVENT LISTENER
filter.addEventListener("keyup", filterItem);

//NOW WE WANT THE FORM SUBMIT EVENT

form.addEventListener("submit", addItem);

//WE ARE LISTENING FOR A SUBMIT EVENT. ONCE THAT EVENT IS FIRED OFF, WE CALL FOR A FUNCTION ADDITEM
//LET'S CREATE A FUNCTION CALLED ADDITEM

//REMOVE ITEM
list.addEventListener("click", removeItem);

function addItem(e) {
  e.preventDefault();

  //WE PASS OUR EVENT PARAMETER E OR THE OUR EVENT OBJECT
  //WHENEVER WE SUBMIT A FORM, WE HAVE TO STOP THE DEFAULT ACTION USING PREVENT

  //GET INPUT VALUE
  var newItem = document.getElementById("item").value;

  //ONCE WE GET THIS WE WANT TO CREATE A NEW LI AND ADD IT IN
  //WE'LL USE THE CREATE ELEMENT THING
  var live = document.createElement("li");
  //LET'S GIVE IT A CLAS NAME COZ ALL LI HAVE CLASS
  live.className = "list-group-item";
  //ADD TEXTNODE WITH INPUT VALUE
  live.appendChild(document.createTextNode(newItem));

  //WE WANT TO TAKE THE UNORDERED LIST AND ADD LIST ITEMS TO IT

  list.appendChild(live);

  //NOW WE NEED TO CREATE A DELETE BUTTON
  var deleteBtn = document.createElement("button");
  //ADD CLASSES TO THE BUTTON
  deleteBtn.className = "btn btn-danger btn-sm float-right delete";
  //ADD THE 'X' TO THE BUTTON
  deleteBtn.appendChild(document.createTextNode("X"));
  //ADD BUTTON TO LI
  live.appendChild(deleteBtn);
  //APPEND LI TO UL
  list.appendChild(live);
}

//REMOVING ITEMS
//WE'LL TAKE THE ITEM LIST AND  ADD EVENTLISTENER TO IT
//WE DON'T WANT TO REMOVE LIST IF CLICKED ON LIST. WE WANT TO REMOVE WHEN CLICKED ON THE CROSS BUTTON

function removeItem(e) {
  //check if what we are clicked has the class delete or not
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure you want to remove this item from the list?")) {
      //if clicked yes then create a variable named li
      //we click on the button and we get the whole li
      //e.target will return the element that triggered the event. it gets the element on which the event originally occured.
      var li = e.target.parentElement;
      //then we remove the child of list
      list.removeChild(li);
    }
  }
}

//FILTER ITEMS FUNCTION
function filterItem(e) {
  //CONVERT ENTERED TEXT TO LOWERCASE
  var text = e.target.value.toLowerCase();
  //GET THE LIST
  var lists = list.getElementsByTagName("li");

  //NOW WE NEED TO TURN THIS COLLECTION OF LIST ITEMS INTO AN ARRAY BECAUSE THERE ARE CERTAIN THINGS THAT CANNOT BE DONE WITHIN HTML

  //CONVERTING TO AN ARRAY
  Array.from(lists).forEach(function (item) {
    var itemName = item.firstChild.textContent;

    //WE BASICALLY WANT TO COMPARE THE SEARCH BOX TEXT TO THE TEXT IN THE LIST-ITEMS
    if (itemName.toLowerCase().indexOf(text) != -1)
      item.style.display = "block";
    else {
      item.style.display = "none";
    }
  });
  //FOREACH MEANS LOOPING THROUGH ALL INDIVIDUAL ITEMS AND THEN WE'LL RUN A FUNCTION
  //ITEM IS THE IDENTIFIER
}
