// function show(){
//     // onclick pr learn more pr baky ka para show hojaya ga. = purpose.
//     var newPara = 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Fugiat ipsum animi cum ex harum repellat dolorem consequatur sapiente nihil similique!';
//     var para = document.getElementById('para');
//     para.innerHTML = newPara;
//     document.getElementById('abc').innerHTML = ''
// }


// Home task
// edit ka button bananh hai delete ka sath...edit per cclick karna par prompt khula jis ma new value lain or usky jaga wou ajaya.
// inp per type krna ka baad enter karain tou inp field mai wou value rahai.

function todo(){
    //code to make li via javascript
    var getul = document.getElementById('getul')
    var getInp = document.getElementById('inp')
    var createLi = document.createElement('li')
    var liText = document.createTextNode(getInp.value)
    createLi.appendChild(liText)
    getul.appendChild(createLi)
    getInp.value = ""
    createLi.setAttribute('class' , 'd-flex justify-content-around m-4 align-items-center')
    
    //delete button code
    var deleteBtn = document.createElement('button')
    var textDelete = document.createTextNode('Delete')
    deleteBtn.appendChild(textDelete)
    createLi.appendChild(deleteBtn)
    deleteBtn.setAttribute('class' , 'btn btn-danger')
    deleteBtn.setAttribute('onclick' , 'deltodo(this)')

    //edit button code
    var editBtn = document.createElement('button')
    var textEdit = document.createTextNode('Edit')
    editBtn.appendChild(textEdit)
    createLi.appendChild(editBtn)
    editBtn.setAttribute('onclick' , 'edittodo(this)')
    editBtn.setAttribute('class' , 'btn btn-info')
}
function deltodoall(){
    getul.innerHTML = ''
}
function deltodo(abc){
    abc.parentNode.remove()
}
function edittodo(def) {
    var newText = prompt("Edit your todo:", def.parentNode.firstChild.nodeValue);
    
    if (newText !== null) { // Check if the user clicked "Cancel"
        def.parentNode.firstChild.nodeValue = newText;
    }
}
