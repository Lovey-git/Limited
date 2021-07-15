
var addItemId=0;

function cart(item)
{
console.log(item)
addItemId += 1;

var selectedItem = document.createElement('div');
selectedItem.classList.add('cartImg');
selectedItem.setAttribute('id',addItemId);

var img = document.createElement('img');
img.setAttribute('src',item.children[0].currentSrc);


var title = document.createElement('div');
title.innerText = item.children[1].innerText;


var label = document.createElement('div');
label.innerText = item.children[3].children[0].innerText;

var select = document.createElement('span');
select.innerText = item.children[3].children[1].value;

label.append(select);
var delBtn = document.createElement('button');
delBtn.innerText = 'Delete';
delBtn.setAttribute('onclick','del('+addItemId+')');
var cartItems = document.getElementById('title');

selectedItem.append(img);
selectedItem.append(title);
selectedItem.append(label);
selectedItem.append(delBtn);
cartItems.append(selectedItem);

}

function del(item)
{
    document.getElementById(item).remove();
}

function checkout()
{ 
   
    const len =  document.getElementById('title').children.length
    for(let i = 0; i <len; i += 1)
    {
        document.getElementById('title').children[0].remove();
    }
}


var myIndex = 0;


function carousel() {

    
    var x = document.getElementsByClassName("mySlides");
 
    for (let i = 0; i < x.length; i++) {
      x[i].style.display = "none";  
    }

    myIndex++;

    if (myIndex > x.length) {
        myIndex = 1
    }  

    x[myIndex-1].style.display = "block"
     

    setTimeout(carousel, 4000); // Change image every 4 seconds
  }

