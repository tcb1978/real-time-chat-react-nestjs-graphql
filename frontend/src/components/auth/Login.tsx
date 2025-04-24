import { Link as MUILink } from '@mui/material';
import type { FC } from 'react';
import { Link } from 'react-router-dom';
import Auth from './Auth';

type LoginProps = {

};

const Login: FC<LoginProps> = ({ }) => {
  return (
    <Auth submitLabel="Login" onSubmit={async (email, password) => { console.log(email, password); }}>
      <Link to={'/signup'} style={{ alignSelf: "center" }}>
        <MUILink>Sign Up</MUILink>
      </Link>
    </Auth>
  );
};

export default Login;