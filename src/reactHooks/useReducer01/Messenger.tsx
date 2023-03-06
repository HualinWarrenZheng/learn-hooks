import { useReducer } from "react";
import { Chat } from "./Chat";
import { ContactList } from "./ContactList";
import { initialState, messengerReducer } from "./messengerReducer";
import * as type from "./type";

const contacts : type.contactType[] = [
    {id: 0, name: 'Warren', email: 'warren@mail.com'},
    {id: 1, name: 'Hualin', email: 'hualin@mail.com'},
    {id: 2, name: 'Zheng', email: 'zheng@mail.com'},
  ];

 const Messenger = () => {
    const [state, dispatch] = useReducer(messengerReducer, initialState);
    const message = state.messages[state.contactId];
    const contact: type.contactType = contacts.find((c) => c.id === state.contactId) as type.contactType;

  return (
    <div>
        <ContactList 
        contacts = {contacts}
        contactId = {state.contactId}
        dispatch = {dispatch}
        />
        <Chat
        contact={contact}
        message={message.content}
        dispatch = {dispatch}
        />
    </div>
  )
}

export default Messenger;