import { Link as MUILink } from '@mui/material';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import Auth from './Auth';

type SignUpProps = {

};

const SignUp: FC<SignUpProps> = ({ }) => {
  return (
    <Auth submitLabel="Sign Up" onSubmit={async (email, password) => { console.log(email, password); }}>
      <Link to={'/login'} style={{ alignSelf: "center" }}>
        <MUILink>Login</MUILink>
      </Link>
    </Auth>
  );
};

export default SignUp;