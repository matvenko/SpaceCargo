import React from 'react';
import './cargo.css'

const Cargo = (props) => {

    let newsElements = props.newsData.map(newsItem => <li  id={newsItem.id}> {newsItem.description}</li>);
    let messagesData = props.messagesData.map(message => <div id={message.id}>{message.message}</div>);

    let newMessage = React.createRef()

    let addMessage = () => {
        props.addMessage();
    }

    let onMessageChange = () =>{
        let message = newMessage.current.value;
        props.updateNewMessageText(message);
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
                    <textarea ref={newMessage} onChange={onMessageChange} value={props.newMessageText} />
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