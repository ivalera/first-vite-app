import CardButton from "../card-button/card-button";
import "./journal-add-button.css";

function JournalAddButton() {

    return (
        <CardButton className="journal-add">
            <img src="/add.svg" alt="Добаление записи" />
            Новая запись
        </CardButton>
  )
}

export default JournalAddButton;