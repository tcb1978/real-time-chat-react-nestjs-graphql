import { Button, Stack, TextField } from '@mui/material';
import type { FC } from 'react';
import { useState } from 'react';

type AuthProps = {
  submitLabel: string;
  onSubmit: (email: string, password: string) => Promise<void>;
  children?: React.ReactNode;
};

const Auth: FC<AuthProps> = ({
  submitLabel,
  onSubmit,
  children,
}) => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>('');

  return (
    <Stack
      spacing={3}
      sx={{
        height: "100vh",
        maxWidth: {
          xs: "70%",
          md: "30%",
        },
        margin: '0 auto',
        justifyContent: "center"
      }}>
      <TextField type="email" label="Email" value={email} variant="outlined" onChange={(e) => setEmail(e.target.value)} />
      <TextField type="password" label="Password" value={password} variant="outlined" onChange={(e) => setPassword(e.target.value)} />
      <Button variant="contained" color="primary" onClick={() => onSubmit(email, password)}>
        {submitLabel}
      </Button>
      {children}
    </Stack>
  );
};

export default Auth;