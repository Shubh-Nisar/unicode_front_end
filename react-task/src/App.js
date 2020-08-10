import React, { useState } from 'react';

import NavBar from '../src/NavBar/NavBar';
import Input from '../src/Input/Input';
import User from '../src/components/User/User';

const App = () => {
  const [isProceed, setIsProceed] = useState(false);
  const [nameReceived, setNameReceived] = useState('');
  const [emailReceived, setEmailReceived] = useState('');

  const onSubmitDetailsHandler = (name, email) => {
    setIsProceed(true);
    setNameReceived(name);
    setEmailReceived(email);
  };

  if(isProceed){
    return (
      <User
      nameReceived={nameReceived}
      />
    );
  }

  return (
    <div className="block">
      <NavBar />
      <Input onSumbitDetails={onSubmitDetailsHandler}/>
    </div>
  );
};

export default App;