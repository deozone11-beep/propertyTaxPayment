import { ArraySample } from "./components/ArraySample";
import { ChildComponent } from "./components/ChildComponent";
import { FunctionSample } from "./components/FunctionSample";
import { Header } from "./components/Header";
import { LearnComponents } from "./components/LearnComponents"
import { Student } from "./components/Student";
import "./css/App.css";


function App() {
  const items = [
    {id:1, name: "Item 1"},
    {id:2, name: "Item 2"},
    {id:3, name: "Item 3"}
  ]
  const handleClick = ()=>{
    alert("Button Clicked!")
  };




  return (
    <>
      <div>Welcome to Kumar</div>
      <LearnComponents /> 
      <Header/>
      <Student name="Kumar" age={30} isMarried={true}/>
      <Student name="Preetha" age={28} isMarried={true}/>
      <Student name="Neethu" age={20} isMarried={false}/>
      <Student/>

      <ChildComponent>
          <p>This is sample para 1</p>
          <p>This is sample para 2</p>
          <p>This is sample para 3</p>
      </ChildComponent>
      <ArraySample items={items}/>
      <div>
        <h2>Parent Component</h2>
        <FunctionSample handleClick={handleClick}/>
      </div>

    </>
  )
}

export default App
