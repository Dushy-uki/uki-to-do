function clickHere(){
    let inpt = document.getElementById("input").value;
    let checkBox = document.getElementById("check");
    let task = document.createElement("div")
    task.innerHTML = `<span>${inpt}</apan>  <input type="checkbox">`  
    checkBox.appendChild(task); 
};

