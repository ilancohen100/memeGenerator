var gKeywords = {'happy': 12,'funny puk': 1}
var gImgs = [{id: 1, url: 'img/popo.jpg', keywords: ['happy']}];
var gMeme = { selectedImgId: 5, selectedTxtIdx: 0, txts:
     [ { line: 'I never eat Falafel', size: 20, align: 'left', color: 'red' } ]}
var gNextID = 0;
function createImg(path,keywords) {
    var image = {
        ID:gNextID++,
        path,
        keywords
    }
    saveToStorage('nextID', gNextID);
    return image;
}

function saveImages() {
    saveToStorage('images', gImgs);
}

function loadData() {
    gImgs = loadFromStorage('images', []);
    gNextID = loadFromStorage('nextID', 0)
    if (gImgs.length === 0) createImages();
}

function createImages() {
    gImgs = [];
    gImgs.push(createImg('img/meme-imgs (square)/003.jpg',['trump','stupid']));
    gImgs.push(createImg('img/meme-imgs (square)/004.jpg',['trump','stupid']));
    gImgs.push(createImg('img/meme-imgs (square)/005.jpg',['trump','stupid']));
    gImgs.push(createImg('img/meme-imgs (square)/006.jpg',['trump','stupid']));  
}

function getImagesToRender() {
    // var filteredTodos = gTodos.filter(function (todo) {
    //     return ((gStatusFilter === 'all') ||
    //         (gStatusFilter === 'active' && !todo.isDone) ||
    //         (gStatusFilter === 'done' && todo.isDone))
    // });
    // var SortedTodos;
    // SortedTodos = filteredTodos.sort(function(a,b){
    //     return a[gStatusSort]>b[gStatusSort]? 1 : a[gStatusSort]< b[gStatusSort]? -1 : 0;
    // })
    // return SortedTodos;
    return gImgs;
}

function findImgById(imgID) {
    return gImgs.find(function (item) {
        return item.ID === imgID;
    });
}
function findImgIndexById(imgID) {
    return gImgs.findIndex(function (item) {
        return item.ID === imgID;
    });
}

// function addTodo(title,importance) {
//     var newTodo = createTodo(title,importance);
//     gTodos.push(newTodo);
//     saveTodos()
// }

// function deleteTodo(todoID) {
//     var todoIndex = findTodoIndexById(todoID);
//     gTodos.splice(todoIndex, 1);
//     saveTodos()
// }

// function setFilterStatus(statusFilter) {
//     gStatusFilter = statusFilter;
// }

// function setSortStatus(statusSort) {
//     gStatusSort = statusSort;
// }

// function getActiveTodosCount() {
//     return gTodos.reduce(function (count, todo) {
//         if (!todo.isDone) count++;
//         return count;
//     }, 0);
// }

// function getTotalTodosCount() {
//     return gTodos.length;
// }