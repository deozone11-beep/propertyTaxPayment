export const ArraySample = (props) => {

    const {items} = props
  return (
    <div>
        <div>Items List</div>
        <ul>
            {items.map((items)=>(
                <li key={items.id}>{items.name}</li>
            ))}
        </ul>
    </div>
  )
}
