import cargoReducer from "./cargo-reducer";
import loginReducer from "./login-reducer";

let store = {
    _state: {
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
    },
    _callSubscriber() {
        console.log("temporary")
    },
    getState(){
        return this._state;
    },
    subscribe(observer){
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._state.cargoPage = cargoReducer(this._state.cargoPage, action);
        this._state.loginPage = loginReducer(this._state.loginPage, action);
        this._callSubscriber(this._state);
    }
}


export default  store;
window.store = store;

