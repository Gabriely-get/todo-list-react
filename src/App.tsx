import { useState } from 'react';
import * as Components from './App.styles';
import { Item } from "./types/Item";
import { ListItem } from './components/ListItem';
import { AddArea } from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 1, name: 'Get rich', done: false },
    {
      id: 2,
      name: 'Do react course',
      done: true
    },
  ]);

  const handleAddNewTask = (taskName: string) => {
    let newList = [...list];
    
    newList.push({
      id: newList.length+1,
      name: taskName,
      done: false
    });
    setList(newList);
  }

  const changeTaskStatus = (itemId: number, status: boolean) => {
    let newList = [...list];

    newList.forEach(newItem => {
      if (newItem.id === itemId) newItem.done = status;
    });

    setList(newList);
  }

  return (
      <Components.Container>
        <Components.Area>
          <Components.Header> Todo List </Components.Header>

          <AddArea onEnter={handleAddNewTask} />

          {
            list.map((item, index) => (
              <div>
                <ListItem key={index} item={item} changeStatus={changeTaskStatus} />
              </div>
            ))
          }
        </Components.Area>
      </Components.Container>
  );
}

export default App;