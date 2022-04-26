import { useState } from 'react';
import { Item } from './types/Item';
import * as C from './App.styles';

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

  return (
    <C.Container>
      <C.Area>
        <C.Header>Lista de Tarefas</C.Header>
        {list.map((item, index) => (
          <div>{item.name}</div>
        ))}
      </C.Area>
    </C.Container>
  );
};

export default App;
