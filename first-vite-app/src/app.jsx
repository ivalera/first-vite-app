import { useLocalStorage } from './hooks/use-localstorage.hook';
import './app.css';

import Header from './components/header/header';
import JournalAddButton from './components/journal-add-button/journal-add-button';
import JournalForm from './components/journal-form/journal-form';

import JournalList from './components/journal-list/journal-list';
import Body from './layouts/body/body';
import LeftPanel from './layouts/left-panel/left-panel';
import { UserContextProvider } from './context/user.context';

function mapItems(items) {
	if (!items) {
		return [];
	}
	return items.map(i => ({
		...i,
		date: new Date(i.date)
	}));
}

function App() {
    const [items, setItems] = useLocalStorage('data');

    const addItem = item => {
        setItems([...mapItems(items), {
            post: item.post,
            title: item.title,
            date: new Date(item.date),
            id: items?.length > 0 ? Math.max(...items.map(i => i.id)) + 1 : 1
        }]);
    }; 

    return (
        <UserContextProvider>
            <div className='app'>
            <LeftPanel>
                <Header/>
                <JournalAddButton/>
                <JournalList items={mapItems(items)}>
                
                </JournalList>
            </LeftPanel>
            <Body>
                <JournalForm onSubmit={addItem}/>  
            </Body>
            </div>
        </UserContextProvider>
    )
}   

export default App;
