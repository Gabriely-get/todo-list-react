import { useState } from 'react';
import * as Components from './App.styles';
import { Item } from "./types/Item";
import { ListItem } from './components/ListItem';

const App = () => {
  const [list, setList] = useState<Item[]>([
    { id: 4, name: 'Get rich', done: false },
    {
      id: 2,
      name: 'Do react course',
      done: true
    },
  ]);

  return (
      <Components.Container>
        <Components.Area>
          <Components.Header> Todo List </Components.Header>

          {/* Add new todo */}

          {
            list.map((item, index) => (
              <div>
                <ListItem key={index} item={item} />
              </div>
            ))
          }
        </Components.Area>
      </Components.Container>
  );
}

export default App;