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

  addItem() {
    // let ID;
    // // Create ID
    // if (data.items.length > 0) {
    //   ID = data.items[data.items.length - 1].id + 1;
    // } else {
    //   ID = 0;
    // }

    // Calories to number
    // calories = parseInt(calories);

    const items = this.data.items;
    console.log(items);

    // Create new item
    // const newItem = new Item(
    //   items.id,
    //   items.name,
    //   items.project,
    //   items.priority,
    //   items.description
    // );
    // console.log(newItem);

    // Add to items array
    // data.items.push(newItem);

    // return newItem;
  }

  card() {
    console.log(this.data);
  }
  // logData = function() {
  //   return data;
  // };
}

export const ctrl = new ItemCtrl();
