var itemList = [];
var mapToStore = new Map();
var id = 0;
// ul=document.getElementById("list");
function addItem()
{
    if(String.length>0)
    {
        var item = document.getElementById("job").value;
        itemList.push(item);
        //update it here after coming back.
        updateList(item);
        item = "";
    }
    else
    {
        alert("Oh cmon, Enter Somethin");
    }
}

function updateList(item)
{
    var itemListGivenNow= document.createElement("li");

    itemList.className= "list";
    itemList.id = id;
    id++;
    var editButton = document.createElement("button");
    editButton.innerText="Edit";
    editButton.className="editButton";
    editButton.addEventListener("click", function() { editTask(itemList,itemList.childNodes[0].textContent); } );

    var deleteButton = document.createElement("button");
    deleteButton.innerText="Delete";
    deleteButton.className="deleteButton";
    var textnode = document.createTextNode(item);
    deleteButton.addEventListener("click", removeItem);

    itemListGivenNow.appendChild(textnode);
    itemListGivenNow.appendChild(editButton);
    itemListGivenNow.appendChild(deleteButton);

    //ul.appendChild(itemListGivenNow);
    document.getElementById("list").appendChild(itemListGivenNow);
}
function removeItem()
{
    var itemList=this.parentNode;
	var ul=itemList.parentNode;
	//Remove the parent list item from the ul.
	ul.removeChild(itemList);
}

function editItem(itemList,item)
{
    var editedTask = prompt("Please enter your Task", inputItem);
    if (editedTask != "")
    {
        itemList.childNodes[0].textContent = editedTask;
    }
}
