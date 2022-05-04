import axios from 'axios';
import { showAlert } from './alerts';

export const login = async (email, password) => {
  try {
    const res = await axios({
      method: 'post',
      url: 'http://127.0.0.1:3000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    if (res.status === 200) {
      showAlert('success', 'Login Successful!');
      window.setTimeout(() => {
        window.location.href = '/';
      }, 1000);
    }
    // console.log(res);
  } catch (error) {
    showAlert('error', error.response.data.message);
    // console.log(error.response.data);
  }
};
export const logout = async () => {
  try {
    const res = await axios({
      method: 'GET',
      url: 'http://127.0.0.1:3000/api/v1/users/logout'
    });
    if ((res.data.status = 'success')) location.reload(true);
  } catch (err) {
    console.log(err.response);
    showAlert('error', 'Error logging out! Try again.');
  }
};
// export const logout = async () => {
//   try {
//     const res = await axios({
//       method: 'GET',
//       url: 'http://127.0.0.1:3000/api/v1/users/logout',
//     });
//     // console.log(res);
//     if ((res.data.status === 'success')) location.reload(true);
//   } catch (error) {
//     console.log(error.response);
//     showAlert('error', 'Error logging out!');
//   }
// };
