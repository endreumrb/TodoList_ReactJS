import { useState } from 'react';
import { Item } from './types/Item';
import * as C from './App.styles';
import ListItem from './components/ListItem';
import AddArea from './components/AddArea';

const App = () => {
  const [list, setList] = useState<Item[]>([
    {
      id: 1,
      name: 'Comprar Pão',
      done: false,
    },
    {
      id: 2,
      name: 'Ir ao Trabalho',
      done: false,
    },
  ]);

  const handleAddTasks = (taskName: string) => {
    let newList = [...list];
    newList.push({
      id: list.length + 1,
      name: taskName,
      done: false,
    });
    setList(newList);
  };

  const handleTaskChange = (taskId: number, taskDone: boolean) => {
    let newList = [...list];
    for (let i in newList) {
      if (newList[i].id === taskId) {
        newList[i].done = taskDone;
      }
    }
    setList(newList);
  };

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        <AddArea onEnter={handleAddTasks} />
        {list.map((item, index) => (
          <ListItem key={index} item={item} onChange={handleTaskChange} />
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
