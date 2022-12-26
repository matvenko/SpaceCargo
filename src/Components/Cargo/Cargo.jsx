import React from 'react';
import './cargo.css'

const Cargo = (props) => {
    let newsElements = props.cargoPage.newsData.map(newsItem => <li key={newsItem.id} id={newsItem.id}> {newsItem.description}</li>);
    let messagesData = props.cargoPage.messagesData.map(message => <div key={message.id}id={message.id}>{message.message}</div>);

    let newMessage = React.createRef()

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () =>{
        let message = newMessage.current.value;
        props.onMessageChange(message);
    }

    return (
        <div className="CargoPage">
            <div>
                <h3>რატომ ირჩევენ სფეის კარგოს</h3>
                <ul>
                    {newsElements}
                </ul>
            </div>
            <div>
                <div>
                    <textarea ref={newMessage} onChange={onMessageChange} value={props.cargoPage.newMessageText} />
                </div>
                <div>
                    <button onClick={addMessage}> Add Message</button>
                </div>
            </div>

            <div>
                {messagesData}
            </div>
        </div>
    )
}

export default Cargo;