import ListItem from "../ListItem/ListItem";
import './List.css'

function List(props) {
    return (
        <div className="list">
            {props.list.map((item) => (
                <ListItem
                    key={item.id}
                    name={item.name}
                    age={item.age}
                />
            ))}
        </div>
    )
}

export default List;
