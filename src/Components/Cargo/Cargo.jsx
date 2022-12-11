import React from 'react';
import './cargo.css'

const Cargo = (props) => {

    const NewsItem = (props) => {
        return (
            <li> {props.description}</li>
        )
    }

    const MessageItem = (props) => {
        return (
            <div> {props.description}</div>
        )
    }

    let newsElements = props.state.newsData.map(newsItem => <NewsItem id={newsItem.id} description={newsItem.description}/>);
    let messagesData = props.state.messagesData.map(message => <MessageItem id={message.id} description={message.message}/>);

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
                    <textarea ref={newMessage} onChange={onMessageChange} value={props.state.newMessageText} />
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