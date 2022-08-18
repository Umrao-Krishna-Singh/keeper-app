import React, {useState} from 'react';
import Heading from './Header';
import Footer from  './Footer';
import Note from  './Note';
import Notes from '../notes';
import CreateArea from './CreateArea'


function App() {

const [ notesArray, setNotesArray] = useState(Notes)
function updateNotesArray(title, content){
    const random = Math.random();
    const newNote =  {key: random, id:random, compare: random, title: title, content: content}
    setNotesArray(prevValue=>{
            return [...prevValue, newNote]
        })
    console.log(notesArray)
}

function onDelete(id){
setNotesArray(prevValue=>{
   return prevValue.filter((file, index )=>{
        return  index !== id ;
    })
})
}

    return (
    <div>
        <Heading />
        <CreateArea add={updateNotesArray}/>
        {notesArray.map( (file, index) => <Note 
            key = {file.key}
            id = {index}
            title = {file.title}
            content = {file.content}
            delete = {onDelete}
        />
    )}
        <Footer />
    </div>
    )};

export default App;