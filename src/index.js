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
import { project, todo } from "./projects";

let content = document.querySelector("#content");

// Ui stuff
let projectContainer = document.createElement("dov");
let todoContainer = document.createElement("div");
content.append(projectContainer);
content.append(todoContainer);



