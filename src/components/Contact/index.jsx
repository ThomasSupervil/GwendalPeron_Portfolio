import { useState } from 'react';
import './style.scss';
import Menu from '../Menu';

const Contact = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleChangeName = (e) => {
    e.preventDefault();
    setName(e.target.value);
  };
  const handleChangeEmail = (e) => {
    e.preventDefault();
    setEmail(e.target.value);
  };
  const handleChangeMessage = (e) => {
    e.preventDefault();
    setMessage(e.target.value);
  };
  return (
    <>
      <Menu />
      <h1>Contact</h1>
      <div className='infoContact'>
        <p>gwen.peron11@gmail.com</p>
        <p>06 01 79 50 58</p>
        <p>Paris</p>
      </div>
      <form id='form' className='topBefore'>
        <div className='nameMail'>
          <input
            id='name'
            type='text'
            placeholder='NAME'
            value={name}
            onChange={handleChangeName}
          />
          <input
            id='email'
            type='text'
            placeholder='E-MAIL'
            value={email}
            onChange={handleChangeEmail}
          />
        </div>

        <textarea
          id='message'
          type='text'
          placeholder='MESSAGE'
          value={message}
          onChange={handleChangeMessage}
        />
        <input id='submit' type='submit' value='ENVOYER' />
      </form>
    </>
  );
};

export default Contact;
