import './ListItem.css'

function ListItem(props) {
  return (
    <p className="listitem">
      <p className="listcontent">{`${props.name} (${props.age} years old)`}</p>
    </p>
  );
}

export default ListItem;
