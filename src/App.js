import React, { Component } from 'react';
import ListContacts from './ListContacts'
import CreateContact from './CreateContact'
import * as ContactsAPI from './utils/ContactsAPI'



class App extends Component {
  state = {
    screens: 'list',
    contacts: []
  }
  componentDidMount() {
    ContactsAPI.getAll().then((contacts) => {
      this.setState({ contacts})
    })
  }

  removeContact = (contact) => {
    console.log(contact);
    this.setState((state) => ({
      contacts: state.contacts.filter((c) => (c.id !== contact.id))
    }))

    ContactsAPI.remove(contact);
  }
  render() {
    return (
      <div className="App">
        <div>
          {this.state.screens == 'list' && (
            <ListContacts onDeleteContact={this.removeContact} contacts={this.state.contacts}/>
          )}
          {this.state.screens === 'create' && (
            <CreateContact />
          )}
        </div>
      </div>
    );
  }
}

export default App;
