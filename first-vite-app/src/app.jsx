import './app.css';
import CardButton from './components/card-button/card-button';
import Header from './components/header/header';
import JournalAddButton from './components/journal-add-button/journal-add-button';
import JournalForm from './components/journal-form/journal-form';
import JournalItem from './components/journal-item/journal-item';
import JournalList from './components/journal-list/journal-list';
import Body from './layouts/body/body';
import LeftPanel from './layouts/left-panel/left-panel';

function App() {
  const data = [
    {
      title: 'Повторение материала по React',
      text: 'Я понял, что мне нужно повторить материал. Для этого, по новому прочитать все темы, которые прошел и только после этого продолжить идти дальше.',
      date: new Date()
    },
    {
      title: 'Проводить регулярные тренировки на велостанке',
      text: 'Выполняя регулярные тренироки, должны улучшаться мои покаказатели выносливости, увелиения скорости передвижения, а так же более четкое понимание, как правильно крутить педали.',
      date: new Date()
    }
  ]

  return (
    <div className='app'>
      <LeftPanel>
        <Header/>
        <JournalAddButton/>
        <JournalList>
          <CardButton>
            <JournalItem 
              title={data[0].title}
              text={data[0].text}
              date={data[0].date}
            />
          </CardButton>
          <CardButton>
            <JournalItem 
              title={data[1].title}
              text={data[1].text}
              date={data[1].date}
            />
          </CardButton>
        </JournalList>
      </LeftPanel>
      <Body>
        <JournalForm/>
      </Body>
    </div>
  )
}

export default App;
