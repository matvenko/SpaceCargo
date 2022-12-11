let rerenderEntireTree = () => {
    console.log("temporary")
}

let state = {
    cargoPage: {
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
    },
    loginPage: [
        {
            username: 'mate',
            token: '?????'
        }
    ]
}

window.state = state;

export let addMessage = () => {
    let newMessage = {
        id: 7,
        message: state.cargoPage.newMessageText
    }
    state.cargoPage.messagesData.push(newMessage);
    state.cargoPage.newMessageText='';
    rerenderEntireTree(state);
}

export const updateNewMessageText = (newMessage) => {
    state.cargoPage.newMessageText = newMessage;
    rerenderEntireTree(state);
}

export const subscribe = (observer) => {
    rerenderEntireTree = observer;
}


export default  state;

