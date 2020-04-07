//examine the document object
// console.dir(document);

//we are basically getting all the elements
// console.log(document.domain);
// console.log(document.URL);
// console.log(document.title);
// document.title = "New title";
// console.log(document.title);
// console.log(document.doctype);
// console.log(document.body);
// console.log(document.head);
// console.log(document.all);
//so once we get all the elements of the dom, we get the indexies of the elements as well. With these indexies, we can call any element
//for example
// console.log(document.all[5] );

//we can change things based on selector
//specific methods to select things
//whatever we add to the html code, it automatically gets added to the dom tree
//we can get images as well
// console.log(document.images);


//selector methods
//getelementbyid
//console.log(document.getElementById('header-title'));
//we can add this statement to a variable as well
// var headerTitle = document.getElementById('header-title');
// var header = document.getElementById('main-header');
// console.log(headerTitle);

//we can change text also
//textContent property is used to change text
// headerTitle.textContent = 'Hello';

//using innerText
//innertext changes the text
// headerTitle.innerText = 'Goodbye';
//the difference between textConent and innerText is that the former does not consider any styling given to the element. innertext takes the styling into considersation

// headerTitle.innerHTML = '<h4>New Text</h4>';
//this adds and element in the headerTitle element
//to change the element, it's an advanced topic that will be done later
//-----------------------------------------------------------------------------------------------------------------------------------------------
var header = document.getElementById('main-header');
header.style.backgroundColor = "#282c87";

//change style
// header.style.borderBottom = ' solid 3px black';
//we should use camel case for styling property
//---------------------------------------------------------------------------------------------------------------------------------------------

//getelementbyclassname
// var items = document.getElementsByClassName('list-group-item');
// console.log(items);

// //we can select and element in this as well
// //if we want to change text then we can do that as well
// items[1].textContent = 'New List Text';
// items[1].style.fontWeight = 600;
// items[1].style.backgroundColor = '#28a745';

// //if we want to change style for all elements in a class, then it is not possible like this
// //items.style.backgroundColor = '#28a745';
// //because it is an html collection or an array. we need to loop through it to actually make this work

// //so we can iterate through it with a for loop
// for(var i=0; i<items.length; i++){
//     items[i].style.backgroundColor = '#28a745';
//     //this gets the current iteration and then through there we can say styling
// }
//.length gets the number of items in that array or collection
//-----------------------------------------------------------------------------------------------------------------------------------------------

//getelementsbytagname
//it works the same way as the class method
// var list = document.getElementsByTagName('li');
// console.log(list);

// list[1].textContent = 'Tag List';
// list[1].style.fontWeight = 900;
// list[1].style.backgroundColor = 'yellow';

// for(i=0; i<list.length; i++){
//     list[i].style.backgroundColor = 'yellow';
// }

//queryselector
//it pretty much works as jquery
//the only big difference is that we can use this only for one item and queryselectorAll can be used for multiple items
//queryselector grabs only the first one

//taking the class of title on the page that has multiple title classes
//we can take anything we want; tags, list-item, class, any css selector
// var heady = document.querySelector('#main-header');
// heady.style.borderTop = 'solid 3px yellow';

// var box = document.querySelector('input');
// box.value = 'Text Box';

// var submit = document.querySelector('input[type="submit"]');
// submit.value = 'Send';

// var items = document.querySelector('.list-group-item');
// items.style.color = 'red';

// var lastChild = document.querySelector('.list-group-item:last-child');
// lastChild.style.color = 'green';

// var second = document.querySelector('.list-group-item:nth-child(2)');
// second.style.color = 'coral';

//we can use css pseudo class/selectors

//queryselectorall
// var titles = document.querySelectorAll('.title');
// console.log(titles);
// //this gives a node list. it is similar to collection

// var odd = document.querySelectorAll('li:nth-child(odd)');
// for (i=0; i<odd.length; i++){
//     odd[i].style.backgroundColor = 'green';
// }

//---------------------------------------------------------------------------------------------------------

// Traversing the DOM, parent nodes, child nodes, sibling
//we'll learn about query parent, child and sibling

//1st we'll look at parent node. we have couple of methods
// var itemList = document.querySelector('#items');
//looking at the parent node property
// console.log(itemList.parentNode);
// itemList.parentNode.style.backgroundColor = "#f4f4f4";

//for example we can go nested for the parent node like
// console.log(itemList.parentNode.parentNode.parentNode);
// itemList.parentNode.parentNode.parentNode.style.backgroundColor = "#f4f4f4";

//parentelement
//same as parentNode

//children
//property called child nodes
// console.log(itemList.children);
//with this we get a nodelist or an array. we'll get the text as an array number. the text node represents a white space or a line break. it is basically the line-breaks between 2 list items. child nodes is not recommened due to this reason

//rather use children property. this will give a html collection
// console.log(itemList.children);
// console.log(itemList.children[2]);
// itemList.children[2].style.backgroundColor = 'orange';


//then we have firstChild. this will give the 1st element and it might be the blank space
// console.log(itemList.firstChild);
//so this property is of no use. rather we should use firstElementChild
// console.log(itemList.firstElementChild);
// itemList.firstElementChild.style.border = "3px solid white";

//we have lastChild
// console.log(itemList.lastChild);
// //so this property is of no use. rather we should use lastElementChild
// console.log(itemList.lastElementChild);
// itemList.lastElementChild.textContent = 'List item 4';

// //siblings--------------------------------------------------------
// console.log(itemList.nextSibling);
// //so this property is of no use. rather we should use nextElementSibling
// console.log(itemList.nextElementSibling);

// //previous sibling
// console.log(itemList.previousSibling);
// //previousElementSibling
// console.log(itemList.previousElementSibling);
// itemList.previousElementSibling.textContent = 'List';

//----------------------------------------------------------------------------------------------------------------
//now we'll look at creating elements using javascript. we'll add elements to the DOM. uptill now we have been just selecting and changing stuff. create and insert elements

//create a new div
var newDiv = document.createElement('div');
//add class
newDiv.className = 'new-class';
//add id
newDiv.id = 'new-id';
//add title
newDiv.title = 'new-title';
//add attribute
newDiv.setAttribute('title', 'hello-title');
//to add text, we use textNode
var newDivText = document.createTextNode('New-text');
//add text to div
newDiv.appendChild(newDivText);

//add div to dom
// var container = document.querySelector('header .container');
// var h1 = document.querySelector('header h1');
// console.log(newDiv);
// container.insertBefore(newDiv, h1);
//adding newdiv before h1. adding between container and h1



//----------------------------------------------VIDEO 3-----------------------------------------------------------


//we will be studying about all types of events like mouse events, keyboard events. this won't be as relative to the last 2 dom video but it is realy important part of interactive javascript. adding event listeners to elements in the dom

//add an eventListner

// var button = document.getElementById('button').addEventListener('click', buttonClick);

// function buttonClick(){
//     document.getElementById('header-title').textContent = 'Changed Text using Javascript';
//     document.getElementById('header-title').style.color = 'red';
// }

// var sendButton = document.getElementById('button').addEventListener('click', sendButton);
// function sendButton(e){
//     //passing an event parameter e. when we listen for an event and run a function, we can pass in this parameter
//     //we can write anything insteasd of e
//     console.log(e);
//     //after clicking this button, we get all these properties. we can get ids, classnames or attributes, we can get position of mouse where we clicked in clientx clienty
//     //when we target the element it will show the entire element in the console. or if we keydown on an input it will give the input element
//     console.log(e.target);

//     //we can get the id and class names
//     console.log(e.target.id);
//     //we can get the class names as well
//     console.log(e.target.className);
//     console.log(e.target.classList);
//     //this will give you a DOM list of classes of that element
// }
//so here we store the button in a variable. then we add a event listener to it and listen for a click and then run a function on click
//we can replace this function with a name function as well i.e we can call an already present function in the code
//addEventListener sets up a function that will be called whenever the specifies event is delivered to target. targets can be element, document or a window



//--------------------------------------------------------------------------------------------------



//if we want to fire up something while an option is selected from the dropdown, we need to use th change event
// var select =document.querySelector('select');
// select.addEventListener('change', runEvent);

// function runEvent(e){
//     console.log('Event type:' + e.type);
//     console.log(e.target.value);
// }

//----------------------------------------------------------------------------------------------------------
//--------------------------------VIDEO 4-----------------------------------------------------------------

//HERE WE NEED TO ADD LIST ITEMS WHEN WE CLICK SUBMIT
//WE HAVE THE FORM ID AS ADDFORM
//LET'S CREATE A VARIABLE TO COLLECT THE FORM

var form = document.getElementById('addForm');

//LETS'S PUT THE UNORDERED LIST INTO A VARIABLE

var list = document.getElementById('items');

//LET'S PUT THE FORM TEXT BOX INTO A VARIABLE
var filter = document.getElementById('filter');

//FILTER EVENT LISTENER
filter.addEventListener('keyup', filterItem);

//NOW WE WANT THE FORM SUBMIT EVENT

form.addEventListener('submit', addItem);

//WE ARE LISTENING FOR A SUBMIT EVENT. ONCE THAT EVENT IS FIRED OFF, WE CALL FOR A FUNCTION ADDITEM
//LET'S CREATE A FUNCTION CALLED ADDITEM

//REMOVE ITEM
list.addEventListener('click', removeItem);

function addItem(e){
    e.preventDefault();

//WE PASS OUR EVENT PARAMETER E OR THE OUR EVENT OBJECT
//WHENEVER WE SUBMIT A FORM, WE HAVE TO STOP THE DEFAULT ACTION USING PREVENT


    //GET INPUT VALUE
    var newItem = document.getElementById('item').value;

    //ONCE WE GET THIS WE WANT TO CREATE A NEW LI AND ADD IT IN
    //WE'LL USE THE CREATE ELEMENT THING
    var live = document.createElement('li');
    //LET'S GIVE IT A CLAS NAME COZ ALL LI HAVE CLASS
    live.className= 'list-group-item';
    //ADD TEXTNODE WITH INPUT VALUE
    live.appendChild(document.createTextNode(newItem));

    //WE WANT TO TAKE THE UNORDERED LIST AND ADD LIST ITEMS TO IT

    list.appendChild(live);

    //NOW WE NEED TO CREATE A DELETE BUTTON
var deleteBtn = document.createElement('button');
//ADD CLASSES TO THE BUTTON
deleteBtn.className = 'btn btn-danger btn-sm float-right delete';
//ADD THE 'X' TO THE BUTTON
deleteBtn.appendChild(document.createTextNode('X'));
//ADD BUTTON TO LI
live.appendChild(deleteBtn);
//APPEND LI TO UL
list.appendChild(live);
}

//REMOVING ITEMS
//WE'LL TAKE THE ITEM LIST AND  ADD EVENTLISTENER TO IT
//WE DON'T WANT TO REMOVE LIST IF CLICKED ON LIST. WE WANT TO REMOVE WHEN CLICKED ON THE CROSS BUTTON

function removeItem(e){
    //check if what we are clicked has the class delete or not
    if(e.target.classList.contains('delete')){
        if(confirm('Are you sure you want to remove this item from the list?')){
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
function filterItem(e){
    //CONVERT ENTERED TEXT TO LOWERCASE
    var text = e.target.value.toLowerCase();
    //GET THE LIST
    var lists = list.getElementsByTagName('li');

    //NOW WE NEED TO TURN THIS COLLECTION OF LIST ITEMS INTO AN ARRAY BECAUSE THERE ARE CERTAIN THINGS THAT CANNOT BE DONE WITHIN HTML

    //CONVERTING TO AN ARRAY
    Array.from(lists).forEach(function(item){
        var itemName = item.firstChild.textContent;
        

        //WE BASICALLY WANT TO COMPARE THE SEARCH BOX TEXT TO THE TEXT IN THE LIST-ITEMS
        if(itemName.toLowerCase().indexOf(text) != -1)
        item.style.display = 'block';
        else{
            item.style.display = 'none';
        }
    });
    //FOREACH MEANS LOOPING THROUGH ALL INDIVIDUAL ITEMS AND THEN WE'LL RUN A FUNCTION
    //ITEM IS THE IDENTIFIER
}