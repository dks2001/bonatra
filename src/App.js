import { useState } from "react";
import Select from "./Select";

function App() {

  const [select,setSelect] = useState("");
  const [placeholder,setPlaceholder] = useState("");
  const [bold, setBold] = useState("");
  const [italic, setItalic] = useState("");
  const [Font, setFont] = useState(24);

   let arr = ["Heading1","Heading2","Heading3","Bold","Italic"];

   const onSelect = (item) => {
       setSelect("");
      setPlaceholder(item);
      if(item === "Heading1") {
        setFont(24);
        setBold("");
        setItalic("");
      } else if(item === "Heading2") {
        setFont(22);
        setBold("");
        setItalic("");
      } else if(item === "Heading3") {
        setFont(20);
        setBold("");
        setItalic("");
      } else if(item === "Bold") {
          setBold("bold")
          setItalic("");
      } else if(item === "Italic") {
          setItalic("italic");
          setBold("");
      }

   }



  return (
    <div className="App">
      <h1>
      <input 
      style={{fontSize: Font, fontWeight: bold, fontStyle: italic}} 
      value={select} 
      placeholder={placeholder} 
      onChange={(e) => setSelect(e.target.value)}></input>
     </h1> 
     {
        select === "/" ? 
        <>
        {
          arr.map((item,index) => (
            <Select item={item} tag={onSelect} idx={index}/>
          ))
        }
        </> :
        <>
        </>
        
      }
    </div>
  );
}

export default App;
