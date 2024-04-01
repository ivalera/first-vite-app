import "./journal-list.css";
import CardButton from '../card-button/card-button';
import JournalItem from '../journal-item/journal-item';

function JournalList({ items }) {
    if(items.length === 0) {
        return <p>Пока записей нет, добавьте первую</p>;
    }

    const sortItems = (a, b) => {
        if(a.date < b.date) {
          return 1;
        } else { 
          return -1;
         }
    }
    
    return <>
        {items.sort(sortItems).map(item => (
        <CardButton key={item.id}>
            <JournalItem 
              title={item.title}
              text={item.text}
              date={item.date}
            />
        </CardButton> 
    ))}
    </>;
}

export default JournalList;
