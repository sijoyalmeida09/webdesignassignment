let tableLength;
const deleteCol = document.getElementsByClassName("del-col"); //Fetch the th
const editCol = document.getElementsByClassName("edit-col"); //Fetch the th
var count_checkbox = 0;

//Adding new element to the table
function newElement() {
  var table = document.querySelectorAll('tbody > tr');
  var len = table.length;
  var col = document.getElementById("myTable").rows[0].cells.length;
  const min = 10000;
  const max = 99999;
  var row_count = 0;
  for(i=1; i<=table.length; i++)
  {
    if(i % 2!=0) {
      row_count++;
    }
  }
  var table_1 = document.getElementById("myTable");

  var row_1 = table_1.insertRow();
  const td = [];
  for (i=0; i<10; i++)
  {
   td[i] = row_1.insertCell(i);
  }

  td[0].innerHTML = `<td><input type="checkbox" onclick="checkboxChange(this)"/><br /><br /><img src="down.png" width="25px" onclick = "imageAction()"/></td>`; 
  td[1].innerHTML = "Student "+ row_count;
  td[2].innerHTML = "Teacher "+ row_count;
  td[3].innerHTML = "Approved";
  td[4].innerHTML = "Fall"
  td[5].innerHTML = "TA"
  const num = Math.floor(Math.random() * (max - min + 1)) + min;
  td[6].innerHTML = num;
  td[7].innerHTML = "100%"
  td[8].innerHTML = `<td><button onclick = "deleteRow(this)">Delete</button></td>`;
  td[9].innerHTML = `<td><button onclick = "editRow(this)">Edit</button></td>`;
  alert("Student "+row_count+ " inserted");

  var row_2 = table_1.insertRow();
  var td_0 = row_2.insertCell(0);
  var td_1 = row_2.insertCell(1);

  td_0.innerHTML = '';
  td_1.innerHTML = `<td colspan="8">
  Advisor:<br /><br />
  Award Details<br />
  Summer 1-2014(TA)<br />
  Budget Number: <br />
  Tuition Number: <br />
  Comments:<br /><br /><br />
  Award Status:<br /><br /><br />
  </td>`;
  td_1.parentNode.hidden = true;
  checkboxChange(Math.floor(len/2));
}

//Checkbox onload function
window.onload = function() {
  const col = [];
  const checkbox = document.querySelectorAll('input[type = checkbox]');
  for(i=0; i<checkbox.length; i++) {
    checkboxChange(i);
  }
}

//Button, Row color functions pertaining to checkbox
function checkboxChange(value) {
  const checkbox = document.querySelectorAll('input[type = checkbox]');
    checkbox[value].addEventListener("change", function() {

      var submitBtn = document.getElementById('button');
      var parentElm = this.parentElement.parentElement.lastElementChild; //Edit Col
      var delBtn = parentElm.previousElementSibling.style.display; //Delete Col Style
      var editBtn = parentElm.style.display;
      
      checkbox[value].checked ? count_checkbox++ : count_checkbox--;
      if(count_checkbox > 0)
      {
        document.getElementById("button").style.backgroundColor = "orange";
        document.getElementById("button").style.borderColor = "orange";

        deleteCol[0].style.display = "table-cell";
        parentElm.previousElementSibling.style.display = delBtn === '' ? 'table-cell' : '';
        parentElm.previousElementSibling.innerHTML = `<td style="display: table-cell"><button onclick = "deleteRow(this)">Delete</button></td>`;
        editCol[0].style.display = "table-cell";
        parentElm.style.display = editBtn ==='' ? 'table-cell' : '';
        parentElm.innerHTML = `<td style="display: table-cell"><button onclick = "editRow(this)">Edit</button></td>`;
      }
      else if(count_checkbox == 0)
      {
        document.getElementById("button").style.backgroundColor = "gray";
        document.getElementById("button").style.borderColor = "gray"; 
        deleteCol[0].style.display = "none";
        parentElm.previousElementSibling.style.display = delBtn === '' ? 'table-cell' : '';
        editCol[0].style.display = "none";
        parentElm.style.display = editBtn ==='' ? 'table-cell' : '';
      }
      if(this.checked) {
        var row = this.parentNode.parentNode.rowIndex;
        var checked_row = document.getElementsByTagName('tr')[row];
        checked_row.style.backgroundColor = "yellow";
      } 
      else {
      var row = this.parentNode.parentNode.rowIndex;
      var unchecked_row = document.getElementsByTagName('tr')[row];
      unchecked_row.style.backgroundColor = "white";
      }
    })
  } // end of checkboxChange()

//Delete row function
function deleteRow(row) {
  var parent = row.parentNode; 
  var dropDown = row.parentNode.parentNode.nextElementSibling;
  parent.parentNode.nextElementSibling.remove(dropDown);//Removing the drop down text
  parent.parentNode.remove(parent);//Removing the row
  count_checkbox--;
  var tableLength = document.querySelectorAll('tbody > tr').length;
  if(count_checkbox == 0)
  {
    document.getElementById("button").style.backgroundColor = "gray";
    document.getElementById("button").style.borderColor = "gray";
    deleteCol[0].style.display = "none";
    editCol[0].style.display = "none";
  }
}

//Edit function 
function editRow(row) {
  prompt("Edit the details");
}

//Arrow image action
function imageAction() {
var imgTag = document.querySelectorAll("img");
var dropText = document.getElementsByClassName("dropDownTextArea");
  for(i=0; i<imgTag.length; i++)
  {
    imgTag[i].onclick = function() {
      var parentTextNode = this.parentElement;
      var textNode = parentTextNode.parentElement.nextElementSibling;
      if(textNode.style.display === "block")
      {
        textNode.style.display = "none";
      }
      else 
      {
        textNode.style.display = "block";
      }
    }
  }
}





// CODE BY PROFESSOR
//Title constructor function that creates a Title object
function Title(t1) 
{ this.mytitle = t1;
}

Title.prototype.getName = function () 
{ 
return (this.mytitle);
}

var socialMedia = {
  facebook : 'http://facebook.com',
  twitter: 'http://twitter.com',
  flickr: 'http://flickr.com',
  youtube: 'http://youtube.com'
};

var t = new Title("CONNECT WITH ME!");