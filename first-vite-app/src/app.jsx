import { useEffect } from 'react';
import { useState } from 'react';
import './app.css';

import Header from './components/header/header';
import JournalAddButton from './components/journal-add-button/journal-add-button';
import JournalForm from './components/journal-form/journal-form';

import JournalList from './components/journal-list/journal-list';
import Body from './layouts/body/body';
import LeftPanel from './layouts/left-panel/left-panel';

// const INITIAL_DATA = [
//   { 
//     id: 1,
//     title: 'Повторение материала по React',
//     text: 'Я понял, что мне нужно повторить материал. Для этого, по новому прочитать все темы, которые прошел и только после этого продолжить идти дальше.',
//     date: new Date()
//   },
//   { 
//     id: 2,
//     title: 'Проводить регулярные тренировки на велостанке',
//     text: 'Выполняя регулярные тренироки, должны улучшаться мои покаказатели выносливости, увелиения скорости передвижения, а так же более четкое понимание, как правильно крутить педали.',
//     date: new Date()
//   },
//   {
//     id: 3,
//     title: 'Правильное питание',
//     text: 'О нем немного позже наишу.',
//     date: new Date()
//   }
// ]

function App() {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const data = JSON.parse(localStorage.getItem('data'));
    if(data) {
      setItems(data.map(item => ({
        ...item,
        date: new Date(item.date)
      })));
    }
  }, []);

  useEffect(() => {
    if(items.length){
      console.log('note');
      localStorage.setItem('data', JSON.stringify(items));
    }
  }, [items]); 

  const addItem = item => {
    setItems(oldItems => 
      [...oldItems, {
        id: oldItems.length > 0 ? Math.max(...oldItems.map(i => i.id)) + 1 : 1,
        post: item.post,
        title: item.title,
        date: new Date(item.date)
      }]);
  };

  return (
    <div className='app'>
      <LeftPanel>
        <Header/>
        <JournalAddButton/>
        <JournalList items={items}>
          
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm onSubmit={addItem}/>  
      </Body>
    </div>
  )
}

export default App;
