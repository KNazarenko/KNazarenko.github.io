class ItemCtrl {
  constructor() {
    // Data Structure / State
    this.data = {
      items: [
        {
          id: 0,
          name: 'new task 0',
          project: 'New Project 0',
          priority: 1,
          description: 'some description'
        },
        {
          id: 1,
          name: 'new task 1',
          project: 'New Project 0',
          priority: 2,
          description: 'some description1'
        },
        {
          id: 2,
          name: 'new task 2',
          project: 'New Project 2',
          priority: 1,
          description: 'some description2'
        }
      ],
      // items: StorageCtrl.getItemsFromStorage(),
      currentItem: null,
      totalTasks: 0
    };
  }

  getTotalTasks() {
    const totalTasks = this.data.items.length;
    this.data.totalTasks = totalTasks;
    return totalTasks;
  }

  getItems() {
    return this.data.items;
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
    if (this.data.items.length > 0) {
      ID = this.data.items[this.data.items.length - 1].id + 1;
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

    // Add to items array
    this.data.items.push(newItem);
    console.log(this.data.items);

    return newItem;
  }
}

export const ctrl = new ItemCtrl();
