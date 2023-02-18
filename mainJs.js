show_item();
let item_input = document.getElementById("item_input");
let item_submit = document.getElementById("item_submit");

item_submit.addEventListener("click", function(){
    item_input_val = item_input.value;
    if(item_input_val.trim()!=0){
        let web_item = localStorage.getItem("local_item");
        if(web_item == null){
            item_obj = []; 
        }
        else{
            item_obj = JSON.parse(web_item);
        }
        item_obj.push(item_input_val);
        localStorage.setItem("local_item", JSON.stringify(item_obj));
        item_input.value='';
    }
    else{
        alert("Insert the Stock name");
    }
    item_input.focus();
    show_item();
})

function show_item(){
    let web_item = localStorage.getItem("local_item");
    if(web_item == null){
        item_obj = []; 
    }
    else{
        item_obj = JSON.parse(web_item);
    }
    let html = '';
    let items = document.getElementById("items");
    item_obj.forEach((item, index) => {
        html += `<div class="item">
        <div class="content">
            <input type="text"
                   class="text"
                   value="${index+1} &nbsp; ${item}"
                   readonly
            />       
        </div>
        <div class="actions">
            <button class="edit" onclick="edit_item(${index})">Edit</button>
            <button class="delete" onclick="delete_item(${index})">Delete</button>
        </div>
        </div>`;
    });
    items.innerHTML = html;
}

//Edit Items
function edit_item(index){
    let save_index = document.getElementById("save_index");
    let item_submit = document.getElementById("item_submit");
    let save_item = document.getElementById("save_item");
    save_index.value = index;
    let web_item = localStorage.getItem("local_item");
    let item_obj = JSON.parse(web_item);
    item_input.value = item_obj[index];
    item_submit.style.display="none";
    save_item.style.display="block";
    item_input.focus();
}

//Save Items
let save_item = document.getElementById("save_item");
save_item.addEventListener("click", function(){
    let web_item = localStorage.getItem("local_item");
    let item_obj = JSON.parse(web_item);
    let save_index = document.getElementById("save_index").value;
    item_input_val=item_input.value;
    if(item_input_val.trim()!=0){
        item_obj[save_index] = item_input.value;
        save_item.style.display="none";
        item_submit.style.display="block";
        localStorage.setItem("local_item", JSON.stringify(item_obj));
        item_input.value='';
    }
    else{
        alert("Fill the stock name");
    }
    item_input.focus();
    show_item();
})

//Delete Items
function delete_item(index){
    let web_item = localStorage.getItem("local_item");
    let item_obj = JSON.parse(web_item);
    item_obj.splice(index, 1);
    localStorage.setItem("local_item", JSON.stringify(item_obj));
    item_input.focus();
    show_item();
}

//Delete All Items
let deleteall_item = document.getElementById("deleteall_item");
deleteall_item.addEventListener("click", function(){
    let save_item = document.getElementById("save_item");
    let item_submit = document.getElementById("item_submit");
    let web_item = localStorage.getItem("local_item");
    let item_obj = JSON.parse(web_item);
    if(web_item == null){
        item_obj = []; 
    }
    else{
        item_obj = JSON.parse(web_item);
        item_obj = [];
    }
    save_item.style.display="none";
    item_submit.style.display="block";
    localStorage.setItem("local_item", JSON.stringify(item_obj));
    item_input.value='';
    item_input.focus();
    show_item();
})


