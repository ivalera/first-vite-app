import { useContext } from "react";
import { UserContext } from "../../context/user.context";

function SelectUser() {
    const { userId, setUserId } = useContext(UserContext);

    const onChangeUser = (e) => {
        setUserId(Number(e.target.value));
        console.log(e.target.value);
    }

    return (
        <select name="user" id="user" value={userId}  onChange={onChangeUser}>
            <option value="1">Валерий</option>
            <option value="2">Евгений</option>
        </select>
  )
}

export default SelectUser;
