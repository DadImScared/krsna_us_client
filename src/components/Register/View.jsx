
import React from 'react';

import SocialConnectionButtons from '../SocialConnectionButtons';
import RegisterForm from './RegisterForm';

const View = ({ onSocialSuccess, updateForm, registerUser }) => (
  <div>
    <SocialConnectionButtons prefix={'Register'} onSuccess={onSocialSuccess} />
    <RegisterForm updateform={updateForm} registerUser={registerUser} />
  </div>
);

export default View;
