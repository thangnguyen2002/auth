import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import Button from '@mui/material/Button';
import CssBaseline from '@mui/material/CssBaseline';
import TextField from '@mui/material/TextField';
import FormControlLabel from '@mui/material/FormControlLabel';
import Checkbox from '@mui/material/Checkbox';
import Link from '@mui/material/Link';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import LockOutlinedIcon from '@mui/icons-material/LockOutlined';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import { Select, InputLabel, MenuItem } from '@mui/material';

function Copyright(props) {
  return (
    <Typography variant="body2" color="text.secondary" align="center" {...props}>
      {'Copyright © '}
      <Link color="inherit" href="https://mui.com/">
        Your Website
      </Link>{' '}
      {new Date().getFullYear()}
      {'.'}
    </Typography>
  );
}

// TODO remove, this demo shouldn't need to reset the theme.

const defaultTheme = createTheme();

const Register = () => {
    const [fullname, setFullname] = useState('');
    const [phone_number, setPhoneNumber] = useState('');
    const [user_code, setUser_code] = useState('');
    const [password, setPassword] = useState('');
    const [retype_password, setReTypePassword] = useState('');
    const [email, setEmail] = useState('');
    const [address, setAddress] = useState('');
    const [date_of_birth, setDOBirth] = useState('');
    const [role_id, setRoleId] = useState('');

    const navigate = useNavigate();
  
    const handleSubmit = async (e) => {
      e.preventDefault();
      if (password !== retype_password) {
        alert('Mật khẩu không khớp');
        return;
      }
      try {
        const response = await fetch('http://localhost:8080/api/v1/users/register', {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify({ 
            fullname, 
            phone_number, 
            user_code, 
            password,
            retype_password,
            email,
            address,
            date_of_birth,
            role_id
          }),
        });
        console.log('response: ', response);
        if (response.ok) {
          navigate('/login');
        } else {
          alert('Đăng ký thất bại');
        }
      } catch (error) {
        console.error('Error:', error);
      }
    };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <Box
          sx={{
            marginTop: 8,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
        >
          <Avatar sx={{ m: 1, bgcolor: 'secondary.main' }}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box component="form" noValidate onSubmit={handleSubmit} sx={{ mt: 3 }}>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  name="fullname"
                  required
                  fullWidth
                  id="fullname"
                  label="Full Name"
                  autoFocus
                  value={fullname}
                  onChange={(e) => setFullname(e.target.value)}
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="phone_number"
                  label="Phone Number"
                  name="phone_number"
                  value={phone_number}
                  onChange={(e) => setPhoneNumber(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="user_code"
                  label="User Code"
                  name="user_code"
                  value={user_code}
                  onChange={(e) => setUser_code(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type="password"
                  id="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="retype_password"
                  label="Retype Password"
                  type="password"
                  id="retype_password"
                  value={retype_password}
                  onChange={(e) => setReTypePassword(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="email"
                  label="email"
                  type="email"
                  id="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="address"
                  label="Address"
                  id="address"
                  value={address}
                  onChange={(e) => setAddress(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="date_of_birth"
                  type="date"
                  id="date_of_birth"
                  value={date_of_birth}
                  onChange={(e) => setDOBirth(e.target.value)}
                />
              </Grid>
              <Grid item xs={12}>
              <InputLabel id="demo-simple-select-label">Role</InputLabel>
                  <Select
                    required
                    fullWidth
                    name="role_id"
                    label="Role"
                    id="role_id"
                    value={role_id}
                    onChange={(e) => setRoleId(e.target.value)}
                  >
                    <MenuItem value={10}>STUDENT</MenuItem>
                    <MenuItem value={20}>TEACHER</MenuItem>
                    <MenuItem value={30}>ADMIN</MenuItem>
                  </Select>
                
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={<Checkbox value="allowExtraEmails" color="primary" />}
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
        <Copyright sx={{ mt: 5 }} />
      </Container>
    </ThemeProvider>
  )
}

export default Register