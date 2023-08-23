// project module
// responsibilty - view and navigate to any project 
// not responsible for displaying projects
// Projects are objects with a title that contain todos 

// project factory function 
// responsibility - todo container

// problem -> strict mode converts "this" into undefined
// Solution -> convert to a constructor or class and move on
export class Project {
    todos = [];
    constructor (title) {
        this.title = title;
    }
    add (title, description) {
        todos.add(new todo(title, description));
    } 
    remove(idx){
        todos.splice(idx, 1);
    }
}

export class Todo {
    dueDate;
    priority = 1; // low = 0 , high = 1
    constructor(title, description) {
        this.title = title;
        this.description = description;
    }

    setTitle (newTitle) { 
        title = newTitle; 
    }
    setDiscription (newDis){ 
        description = newDis;
    }
    setDueDate (newDate) { 
        dueDate = newDate;
    }
    setPriority (newPriority) {
        priority = newPriority;
    } 
}
