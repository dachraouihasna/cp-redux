import logo from "./logo.svg";
import "./App.css";
import ContactList from "./Components/contactList";
import AddContact from "./Components/addContact";

function App() {
    return (
        <div className="App">
            <ContactList />
            <h1>Add contact</h1>
            <AddContact />
        </div>
    );
}

export default App;
