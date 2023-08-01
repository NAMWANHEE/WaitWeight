import axios from 'axios';
interface LoginData {
  id: string;
  password: string;
}
async function ManagerLoginAPI(loginData: LoginData) {
  try {
    const url = 'http://I9A104.p.ssafy.io:8080/admin/login';
    const response = await axios.post(url, loginData, {
      headers: {
        'Content-Type': 'application/json',
      },
    });

    return response.data;
  } catch (error: any) {
    throw new Error(
      error.response?.data?.message || 'An error occurred during login.',
    );
  }
}

export default ManagerLoginAPI;
