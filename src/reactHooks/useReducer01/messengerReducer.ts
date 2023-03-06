import * as type from './type';

export const initialState : type.stateType = {
    contactId: 0,
    messages: [
        {contactId: 0, content: 'Hello Warren'},
        {contactId: 1, content: 'Hello Hualin'},
        {contactId: 2, content: 'Hello Zheng'},
    ]
};

export enum MessengerActionTypes {
    CHANGE_CONTACT = 'change_contact',
    EDIT_MESSAGE = 'edit_message',
    SEND_MESSAGE = 'sent_message',
}

export const messengerReducer = (state: type.stateType, action: type.reduceActionType) => {
    const { type, contactId, messageContent} = action;

    switch(type){
        case MessengerActionTypes.CHANGE_CONTACT: {
            return {
                ...state,
                contactId: contactId,
            };
        }
        case MessengerActionTypes.EDIT_MESSAGE: {
            return {
                ...state,
                messages: state.messages.map(msg => {
                    if(msg.contactId == contactId){
                        return {...msg, content: messageContent};
                    }
                    return msg;
                }),
            };
        }
        case MessengerActionTypes.SEND_MESSAGE: {
            return{
                ...state,
                messages: state.messages.map(msg => {
                    if(msg.contactId == contactId){
                        return {...msg, content: ''};
                    }
                    return msg;
                }),
            };
        }
        default:
            return state;
    }
}