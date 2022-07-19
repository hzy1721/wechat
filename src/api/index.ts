import axios from "axios";
import type { RegisterDto } from "./dto/RegisterDto";
import type { LoginDto } from "./dto/LoginDto";

axios.defaults.baseURL = "http://localhost:3456/";

export async function verifyEmail(email: string) {
  try {
    const res = await axios.post(`emails/verify`, { email });
    return true;
  } catch (err) {
    return undefined;
  }
}

export async function register(registerDto: RegisterDto) {
  try {
    const res = await axios.post(`register`, registerDto);
    return true;
  } catch (err) {
    return undefined;
  }
}

export function login(loginDto: LoginDto) {
  return axios.post('account/login', loginDto);
}

export function fetchAllMessages(userId: number, afterTime: Date) {
  return axios.get(`users/${userId}/messages?after=${afterTime}`);
}