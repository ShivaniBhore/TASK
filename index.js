

document.getElementById("login").onclick = function () {
    addData();
  };
  function addData() {
    event.preventDefault();
    const arr = [];
    const name = document.getElementById("username").value;
    const DOB = document.getElementById("DOB").value;
    const phone = document.getElementById("phone").value;
  
    arr.push({ birth: DOB, phone_no: phone, username : name });
    localStorage.setItem("data", JSON.stringify(arr));
    
  }
  

  

  
  function editname(d){
    const newName = document.getElementById('newName').value
    d.name = newName;
    console.log(JSON.parse(localStorage.getItem('data')));
  }