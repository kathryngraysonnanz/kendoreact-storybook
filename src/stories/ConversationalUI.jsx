import React from 'react';
import PropTypes from 'prop-types';
import { Chat } from '@progress/kendo-react-conversational-ui';
import './assets/index.scss';

export const ConversationalUI = ({...props }) => {

  const user = {
    id: 1,
  };
  const bot = {
    id: 0
  };
  const initialMessages = [{
    author: bot,
    suggestedActions: [{
      type: 'reply',
      value: 'Neat!'
    }],
    timestamp: new Date(),
    text: "Hello, this is a demo bot. I don't do much, but I can count symbols!"
  }];

  const [messages, setMessages] = React.useState(initialMessages);
  const addNewMessage = event => {
    let botResponse = Object.assign({}, event.message);
    botResponse.text = countReplayLength(event.message.text);
    botResponse.author = bot;
    setMessages([...messages, event.message]);
    setTimeout(() => {
      setMessages(oldMessages => [...oldMessages, botResponse]);
    }, 1000);
  };
  const countReplayLength = question => {
    let length = question.length;
    let answer = question + " contains exactly " + length + " symbols.";
    return answer;
  };

  return (
    <>
    <Chat {...props} user={user} messages={messages} onMessageSend={addNewMessage} placeholder={"Type a message..."} width={400} />
    </>
  );
};

ConversationalUI.propTypes = {
  attachmentTemplate: PropTypes.any,
  className: PropTypes.string,
  dir: PropTypes.oneOf(['ltr', 'rtl', 'auto']),
  message: PropTypes.element,
  messageBox: PropTypes.element,
  messages: PropTypes.any,
  messageTemplate: PropTypes.element,
  placeholder: PropTypes.string,
  showToolbar: PropTypes.any,
  toolbar: PropTypes.any,
  user: PropTypes.any,
  width: PropTypes.string

};

ConversationalUI.defaultProps = {
};
