const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE = 'UPDATE-NEW-MESSAGE';

let initialState = {
    newsData: [
        {id: 1, description: 'ფრენები 300-ზე მეტი მიმართულებით'},
        {id: 2, description: 'ყოველდღიური რეისები'},
        {id: 3, description: 'საკურიერო სერვისი'},
        {id: 4, description: 'SMS-ით და ელ-ფოსტით ამანათზე ინფორმაციის შეტყობინება'},
        {id: 5, description: 'საკონსულტაციო დახმარება ნებისმიერი სახის საქონლის (კანონით დადგენილი) მოძიებასა და შესყიდვასთან დაკავშირებით'},
        {id: 6, description: 'მოქნილი და კომფორტული გადახდის საშუალებები (საბანკო გადარიცხვა, სწრაფი გადახდის აპარატები, ონლაინ და მობაილ გადახდები)'}
    ],
    messagesData: [
        {id: 1, message: 'Hi'},
        {id: 2, message: 'Hello'},
        {id: 3, message: 'How are you'},
        {id: 4, message: 'fine, thanks'},
        {id: 5, message: 'BB'}
    ],
    newMessageText: 'write text'
}

const cargoReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 7,
                message: state.newMessageText
            }
            state.messagesData.push(newMessage);
            state.newMessageText = '';
            return state;
        case UPDATE_NEW_MESSAGE:
            state.newMessageText = action.newMessage;
            return state;
        default:
            return state;

    }
}

export const addMessageActionCreator = () => ({type: ADD_MESSAGE});
export const updateNewMessageActionCreator = (message) => {
    return {
        type: UPDATE_NEW_MESSAGE,
        newMessage: message
    }
}

export default cargoReducer;