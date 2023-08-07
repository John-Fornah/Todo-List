/**
 *  Project Brainstorming:
 * 
 *  - projects > todos > task desciptions
 * 
 *  - view/webpages:
 *  - projects tabs
 *  - todos for an individual project
 *  - a space to edit description, due date, and priority
 *  - all of this can be on one view 
 * 
 *  - Todo object props:
 *  - Title
 *  - Discription
 *  - dueDate
 *  - Priority
 * 
 * 
 *  - initally, Project 1 could be a default project, where all todos initally go
 *      - allow the user to change the default?
 * 
 *  - Modulars needed (separate dom and application logic):
 *  - create new todo (logic)
 *  - setting todo as complete (logic)
 *  - changing todo priority (logic)
 *  - tab logic (logic? dom)
 *      
 *  - UI Requirments:
 *      - view all projects (Ui)
 *      - view all todos in a individual project (Ui)
 *      - expand a todo to see/edit details (Ui, logic)
 *      - delete a todo (ui, logic)
 *      - delete a project ( add safety ) (Ui, logic)
 * 
 *  - UI design:
 *      - UI will use the holy grail desgin 3 rows 2 column
 *      - projects will be on the columns so user can switch between projects more
 *          efficiently in comparison to original idea
 *      - todos will be display on the second row
 *      - todos will be in the shapre of retangles
 */

// inital view | veiw all projects
import { project } from "./projects";

let content = document.querySelector("#content");

// Ui stuff
let projectContainer = document.createElement("div");
let addProjectBtn = document.createElement("button");

// onclick function for our project 
let addProject = () => {
    let title = prompt("Enter a title for your new project");
    projectContainer.append(project(title));
}

addProjectBtn.textContent = "Create New Project";
addProjectBtn.addEventListener("click", addProject);
projectContainer.append(addProjectBtn);

let todoContainer = document.createElement("div");
let addTodoBtn = document.createElement("button");
addTodoBtn.textContent = "Add New Todo";

// onclick for to add todo to project
let addTodo = () => {
    // prompt user for input, use input to create new project
    let title = prompt("Please enter a title for the todo.");
    let desciptions = prompt("Please add a description for the todo.");

    // how do i know which project object to referance: current problem
    project.add()
}

todoContainer.append(addTodoBtn);

content.append(projectContainer);
content.append(todoContainer);




// function to display our list of projects

// funcion to display todos tied to a project

// logic to switch for one project to another is mostly Ui 

