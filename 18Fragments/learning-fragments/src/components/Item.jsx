const Item = (props) => {
  return (
    <li key={props.foodItem} className="list-group-item kg-item"><span className="kg-span">{props.foodItem}</span></li>
    // <li className="list-group-item">{props.foodItem}</li>
  )
}

export default Item;