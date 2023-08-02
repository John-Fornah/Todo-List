// tab for all projects the user has created

// project module
// responsibilty - view and navigate to any project 
// not responsible for displaying projects
// Projects are objects with a title that contain todos 

// project factory function 
// responsibility - todo container
let project = (title) => {
    this.todos = [];
    
    let add = (title) => todos.add(todo(title));
    let remove = (idx) => todos.splice(idx, 1);

    return {title, add, remove}
}

// todo factory function
// responsibily - contain info about a individual task
let todo = (title, description) => {
    this.title = title;
    this.description = description;
    this.dueDate;
    this.priority;

    // edit title, discription, dueDate, priorty 
    let editTitle = (newTitle) => title = newTitle;
    let editDiscription = (newDis) => description = newDis;
    let editDue = (newDate) => dueDate = newDate;
    let editPriority = (newPriority) => priority = newPriority;
    return { editTitle, editDiscription, editDue, editPriority }
}
