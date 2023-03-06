import React from 'react'
import * as type from "./type";

export const ContactList: React.FC<{contacts: type.contactType[], contactId: number, dispatch: React.Dispatch<type.reduceActionType>}> = 
({contacts, contactId, dispatch}) => (
        <section className="contact-list">
            <ul>
                {contacts.map((contact) => (         
                    <li key={contact.id}>
                        <button
                        onClick={() => {
                            dispatch({
                                type: 'change_contact',
                                contactId: contact.id,
                                messageContent: 'switch',
                            });
                        }}>
                            {contactId === contact.id ? <b>{contact.name}</b> : contact.name}
                        </button>
                    </li>
                    ))
                }
            </ul>
    </section>
)
