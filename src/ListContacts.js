import React, { Component } from 'react'


class ListContacts extends Component {
    render() {
        const contacts = this.props.contacts;
        return (
            <ol className='contact-list'>
                {contacts.map(person => (
                    <li key={person.id} className='contact-list-item'>
                    <div className='contact-avatar' style={{
                        backgroundImage: `url(${person.avatarURL})`
                    }}/>
                    <div className='contact-details'>
                        <p>{person.name}</p>
                        <p>{person.email}</p>
                    </div>
                        <button className='contact-remove'>
                            Remove
                        </button>
                    </li>
                ))}
            </ol>
        )
    }
}


export default ListContacts 