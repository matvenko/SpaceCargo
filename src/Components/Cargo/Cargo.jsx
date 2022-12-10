import React from 'react';
import './cargo.css'

const Cargo = (props) => {

    const NewsItem = (props) => {
        return(
            <li> { props.description }</li>
        )
    }

    const MessageItem = (props) => {
        return(
            <div> { props.description }</div>
        )
    }

    let newsElements = props.newsData.map(newsItem => <NewsItem id={newsItem.id} description={newsItem.description} /> );
    let messagesData = props.messagesData.map(message=> <MessageItem id={message.id} description={message.message} /> );

    let newMessage = React.createRef()

        let addMessage = () => {
        let _message = newMessage.current.value;
        props.addMessage(_message)
    }

    return (
        <div className="CargoPage">
            <div>
                <h3>რატომ ირჩევენ სფეის კარგოს</h3>
                <ul>
                    { newsElements }
                </ul>
            </div>
            <div>
                <div>
                    <textarea ref={newMessage}></textarea>
                </div>
                <div>
                    <button onClick={ addMessage }> Add Message</button>
                </div>
            </div>

            <div>
                { messagesData }
            </div>
        </div>
    )
}

export default Cargo;