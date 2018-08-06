import React, { Component } from 'react'
import PropTypes from 'prop-types'
import escapeRegExp from 'escape-string-regexp'
import sortBy from 'sort-by'


class ListContacts extends Component {
    static propTypes = {
        contacts: PropTypes.array.isRequired,
        onDeleteContact: PropTypes.func.isRequired
    }

    state = {
        query: ''
    }

    updateQuery = (query) => {
        this.setState( {query: query.trim() })
    }

    render() {
        return (
            <div className='list-contacts'>
                <div className='list-contact-top'>
                    <input
                        className='search-contacts'
                        type='text'
                        placeholder='Search contacts'
                        value={this.state.query}
                        onChange={(event) => this.updateQuery(event.target.value)}
                        />
                </div>
                <ol className='contact-list'>
                    {this.props.contacts.map(person => (
                        <li key={person.id} className='contact-list-item'>
                        <div className='contact-avatar' style={{
                            backgroundImage: `url(${person.avatarURL})`
                        }}/>
                        <div className='contact-details'>
                            <p>{person.name}</p>
                            <p>{person.email}</p>
                        </div>
                            <button onClick={() => this.props.onDeleteContact(person)} className='contact-remove'>
                                Remove
                            </button>
                        </li>
                    ))}
                </ol>
            </div>
        )
    }
}




export default ListContacts 