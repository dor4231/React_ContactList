import React, { Component } from 'react'


function ListContacts(props) {
    return (
        <ol className='contact-list'>
            {props.contacts.map(person => (
                <li key={person.id} className='contact-list-item'>
                <div className='contact-avatar' style={{
                    backgroundImage: `url(${person.avatarURL})`
                }}/>
                <div className='contact-details'>
                    <p>{person.name}</p>
                    <p>{person.email}</p>
                </div>
                    <button onClick={() => props.onDeleteContact(person)} className='contact-remove'>
                        Remove
                    </button>
                </li>
            ))}
        </ol>
    )
}


export default ListContacts 