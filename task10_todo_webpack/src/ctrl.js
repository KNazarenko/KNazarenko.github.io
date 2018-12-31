import { local } from './local';

class ItemCtrl {
  constructor() {
    // Data Structure / State
    this.data = {
      // taskItems: [
      //   {
      //     id: 0,
      //     name: 'new task 777',
      //     project: 'New Project 0',
      //     priority: 1,
      //     description: 'some description'
      //   }
      // ],

      taskItems: local.getData(),
      currentItem: null,
      totalTasks: 0
    };
  }

  totalTasksNumber() {
    const totalTasks = this.data.taskItems.length;
    this.data.totalTasks = totalTasks;
    return totalTasks;
  }

  getItems() {
    return this.data.taskItems;
  }

  Item(id, name, project, priority, description) {
    this.id = id;
    this.name = name;
    this.project = project;
    this.priority = priority;
    this.description = description;
  }

  addNewItem(input) {
    let ID;
    // Create ID
    if (this.data.taskItems.length > 0) {
      ID = this.data.taskItems[this.data.taskItems.length - 1].id + 1;
    } else {
      ID = 0;
    }
    // Create new item
    const newItem = new this.Item(
      ID,
      input.name,
      input.project,
      input.priority,
      input.description
    );
    // Add to taskItems array
    this.data.taskItems.push(newItem);
    return newItem;
  }

  // Get item from Data
  getItemByID(idNumber) {
    let findItem = null;
    // Find current item
    this.data.taskItems.forEach(function(item) {
      if (item.id === idNumber) {
        findItem = item;
      }
    });
    return findItem;
  }

  // Set currenItem into Data
  setCurrentItem(e) {
    // Get list item id (item-0, item-1)
    const listItemId = e.target.parentNode.parentNode.parentNode.id;
    // Get list item id number
    const listItemIdArray = listItemId.split('-');
    const idNumber = parseInt(listItemIdArray[1]);
    // Get item by id
    const itemToEdit = ctrl.getItemByID(idNumber);
    // Set currenItem
    this.data.currentItem = itemToEdit;
  }

  // Get currenItem from Data
  getCurrentItem() {
    return this.data.currentItem;
  }

  // Update item's data
  updateItemData(input) {
    let itemToUpdate;
    let that = this;
    // Find current item
    this.data.taskItems.forEach(function(item) {
      if (item.id == that.data.currentItem.id) {
        itemToUpdate = item;
      }
    });
    // Set new value to data
    itemToUpdate.name = input.name;
    itemToUpdate.project = input.project;
    itemToUpdate.priority = input.priority;
    itemToUpdate.description = input.description;
    // Return to update UI
    return itemToUpdate;
  }

  // Delete item from data
  deleteCurrentItem(id) {
    // Get ids from data
    const ids = this.data.taskItems.map(function(item) {
      return item.id;
    });
    // Get index
    const index = ids.indexOf(id);
    // Remove item by index
    this.data.taskItems.splice(index, 1);
  }

  // Filter tasks by project name
  filterCardsBySelect(items, select) {
    let filterItem = [];

    // Filter items
    items.forEach(function(item) {
      if (item.project == select) {
        filterItem.push(item);
      }
    });
    // Return new array to populate
    return filterItem;
  }
}

export const ctrl = new ItemCtrl();
