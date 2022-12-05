document.getElementById("show").onclick = function () {
    event.preventDefault();
    showData();
  };

  function showData(){
    event.preventDefault();
    const Data = JSON.parse(localStorage.getItem("data"));
    const content = document.getElementById('content');
    const newData = Data.map(d =>{
      return` 
        <div>
          <p>${d.username}</p>
          <p>${d.birth}</p>
          <p>${d.phone_no}</p>
          <button id="editButton(${d})">Edit</button>
        </div>
      `
    })
    content.innerHTML = newData;
  }