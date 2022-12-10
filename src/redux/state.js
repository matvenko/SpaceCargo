import {rerenderEntireTree} from "../render";

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
        MessagesData: [
            {id: 1, message: 'Hi'},
            {id: 2, message: 'Hello'},
            {id: 3, message: 'How are you'},
            {id: 4, message: 'fine, thanks'},
            {id: 5, message: 'bb'}
        ]
    },
    loginpage: [
        {
            username: 'mate',
            token: '?????'
        }
    ]
}

export let addMessage = (message) =>{
    let _message = {
        id: 7,
        message: message
    }
    state.cargoPage.MessagesData.push(_message);
    rerenderEntireTree()
}



export default  state;

