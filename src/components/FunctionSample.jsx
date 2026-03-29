export const FunctionSample = (props) => {

    const {handleClick} = props;

  return (
    <div>
        <p>This is function Click Component</p>
        <button onClick={handleClick} className="btn btn-primary">Click Me!</button>
        {/* <button onClick={props.handleClick}>Click Me!</button> */}
    </div>
  )
}
