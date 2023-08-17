// project module
// responsibilty - view and navigate to any project 
// not responsible for displaying projects
// Projects are objects with a title that contain todos 

// project factory function 
// responsibility - todo container

// problem -> strict mode converts "this" into undefined
// Solution -> convert to a constructor or class and move on
export default project = title => {
    this.todos = [];
    
    const add = (title, description) => todos.add(todo(title, description));
    const remove = idx => todos.splice(idx, 1);

    // todo factory function
    // responsibily - contain info about a individual task
    const todo = (title, description) => {
        this.title = title;
        this.description = description;
        this.dueDate;
        this.priority;

        // edit title, discription, dueDate, priorty 
        const editTitle = (newTitle) => title = newTitle;
        const editDiscription = (newDis) => description = newDis;
        const editDue = (newDate) => dueDate = newDate;
        const editPriority = (newPriority) => priority = newPriority;
        return { editTitle, editDiscription, editDue, editPriority }
    };

    return { title, add, remove };
};

