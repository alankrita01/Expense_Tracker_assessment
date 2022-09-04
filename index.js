function saveToLocalStorage(event){
  event.preventDefault();

  const expenseValue = event.target.exp.value;
  const description  = event.target.descr.value;
  const category = event.target.categ.value;

  const obj = {
    expenseValue : expenseValue,
    description : description,
    category : category
  }

  localStorage.setItem('expenseTracker',JSON.stringify(obj));
  showOnScreen(obj);
}


function showOnScreen(user){
  const parentNode=document.getElementById('listOfUser');

  const childHTML =`<li id=${user.description}> ${user.expenseValue} - ${user.description} - ${user.category} <button style="border-color:green;" onclick=editUserDeatils('${user.description}')>Edit Expense</button> <button style="border-color:red;" onclick=deleteUser('${user.description}')>Delete Expense</button> </li>`;

  parentNode.innerHTML =parentNode.innerHTML + childHTML;

 

}

//edit user

function editUserDeatils(descr,categ){
  document.getElementById('descr').value=descr;
  //document.getElementById('exp').value=exp;
  document.getElementById('categ').value=categ;

  deleteUser(descr);
}

//delete user

function deleteUser(descr){
  console.log(descr);
  localStorage.removeItem(descr);
  removeUserFromScreen(descr);
}

//remove user

function removeUserFromScreen(descr){
  const parentNode = document.getElementById('listOfUser');
  const childNodeToBeDeleted = document.getElementById(descr);

  if(childNodeToBeDeleted){
    parentNode.removeChild(childNodeToBeDeleted);
  }
}

 //fetch ()

 window.addEventListener('DOMContentLoaded', (expenseValue) => {
  console.log('Expense fetched from localStorage');
 });