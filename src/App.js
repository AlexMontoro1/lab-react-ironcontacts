import logo from './logo.svg';
import './App.css';
import contacts from "./contacts.json"
import { useState } from "react"

function App() {

  //const firstFive = contacts.slice(30,35)
  const [newContacts, setNewContacts] = useState([contacts[30], contacts[31], contacts[32], contacts[33], contacts[34]])

  const addRandomContact = () => {
    const ranomIndex = Math.floor(Math.random() * contacts.length)
    const randomContact = contacts[ranomIndex]
    setNewContacts([...newContacts, randomContact])
  }

  const sortByName = () => {
    const newArr = [...newContacts].sort((a,b) => a.name > b.name ? 1 : -1)
    setNewContacts(newArr)
  }

  const sortByPop = () => {
    const newArr = [...newContacts].sort((a,b) => a.popularity < b.popularity ? 1 : -1)
    setNewContacts(newArr)
  }

  const deleteContact = (index) => {
    const newArr = [...newContacts]
    newArr.splice(index, 1)
    setNewContacts(newArr)
  }

  return (
    <div className="App">

      <button onClick={addRandomContact}>Add random contact</button>
      <button onClick={sortByName}>Sort by Name</button>
      <button onClick={sortByPop}>Sort by popularity</button>

      {
        newContacts.map((eachContact)=> {
          return(
            <table key={eachContact.id}>
              <img src={eachContact.pictureUrl} alt="imagen" width="100px"/>
              <h5>Name: {eachContact.name}</h5>
              <p>Popularity: {eachContact.popularity}</p>
              <p>Won Oscar: {eachContact.wonOscar === true && <span>🏆</span>}</p>
              <p>Won Emmy: {eachContact.wonEmmy === true && <span>🏆</span>}</p>
              <button onClick={ () => deleteContact() }>Delete</button>
              <hr />
            </table>
          )
        }
        )
}
      
      
    </div>
  )
};

export default App;
