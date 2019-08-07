var listElement = document.querySelector('#app ul');
var inputElement = document.querySelector('#app input');
var buttonElement = document.querySelector('#app button');

//array todo
var todos = JSON.parse(localStorage.getItem('list_todos')) || [];

/*var todos = [
    'fazer café',
    'estudar java Script',
    'acessar comunidade js'
];
*/
function renderTodos(){
listElement.innerHTML = '';

    for (todo of todos){
        var todoElement = document.createElement('li');
        var todoText = document.createTextNode(todo);

       var linkElement = document.createElement('a');

       linkElement.setAttribute('href', '#');

       var pos = todos.indexOf(todo);
       linkElement.setAttribute('onclick', 'deleteTodo(' + pos + ')');

       var linkText =  document.createTextNode( ' Excluir');

        linkElement.appendChild(linkText);
        todoElement.appendChild(todoText);
        todoElement.appendChild(linkElement);
        listElement.appendChild(todoElement);
    }
}

renderTodos();

function addTodos(){

    var todoText = inputElement.value;

    todos.push(todoText);
    inputElement.value = '';
    renderTodos();
    saveStorage();

}

buttonElement.onclick = addTodos;

function deleteTodo(pos){
    todos.splice(pos, 1);
    renderTodos();
    saveStorage();
}

function saveStorage(){
    localStorage.setItem('list_todos', JSON.stringify(todos))
}
