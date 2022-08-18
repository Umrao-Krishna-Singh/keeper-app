import React, {useState} from "react";

function CreateArea(props) {
    const [inputText, setInputText] = useState({title: "", content: "" })
    
     
function handleChange(event){
  const {name, value} = event.target; 
  setInputText(prevValue=>{
  return {
    ...prevValue,
    [name]: value
  }
  })
}
function handleClick(event){
  event.preventDefault();
  props.add(inputText.title, inputText.content);
  setInputText({title: "", content: ""});
}

  return (
    <div>
      <form>
        <input onChange={handleChange} name="title" placeholder="Title" value={inputText.title} />
        <textarea onChange={handleChange} name="content" placeholder="Take a note..." rows="3" value={inputText.content}/>
        <button onClick={handleClick}>Add</button>
      </form>
    </div>
  );
}

export default CreateArea;