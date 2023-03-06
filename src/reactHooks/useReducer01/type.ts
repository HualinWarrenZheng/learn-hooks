export type contactType = {
    id: number;
    name: string;
    email: string;
};

export type messageType = {
    contactId: number;
    content: string;
};

export type stateType = {
    contactId: number;
    messages: messageType[];
};

export type reduceActionType = {
    type: string; 
    contactId: number;
    messageContent: string; 
};




