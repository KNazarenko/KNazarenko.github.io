import { ctrl } from './ctrl';
import { ui } from './ui';
import { local } from './local';

// Load event listeners
const loadEventListeners = function() {
  ui.newTaskBtn.addEventListener('click', openFormForNewTask);
  ui.cancelBtn.addEventListener('click', cancelNewTask);
};

// Fetch items from data structure
const items = ctrl.getItems();

// Populate list with items
ui.populateItemList(items);

// Open form for new task
const openFormForNewTask = function() {
  console.log(1);
  ui.newTaskForm.style.display = 'block';
};

// Cancel new task
const cancelNewTask = function() {
  ui.cancelForm();
};
// Load event listeners
loadEventListeners();
