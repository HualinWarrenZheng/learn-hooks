import React, { Dispatch } from 'react'
import * as type from './type';
import {MessengerActionTypes} from './messengerReducer'

export const Chat: 
React.FC<{contact: type.contactType, message: string, dispatch: React.Dispatch<type.reduceActionType>}> = 
({contact, message, dispatch}) => 
(
    <section className='chat'>
        <textarea
            onChange={
                (e) => {
                    dispatch({
                        type: MessengerActionTypes.EDIT_MESSAGE,
                        contactId: contact.id,
                        messageContent: e.target.value,
                    });
                }
            }
        >{message}</textarea>
        <button onClick={() => {
            dispatch({
                type: MessengerActionTypes.SEND_MESSAGE,
                contactId: contact.id,
                messageContent: '',
            });
        }}>Sent</button>
    </section>
)

