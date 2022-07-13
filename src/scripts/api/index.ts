import axios from "axios";
import type { RegisterDto } from "../dto/RegisterDto";

axios.defaults.baseURL = "http://localhost:3456/";

export async function verifyEmail(email: string) {
  try {
    const res = await axios.post(`emails/verify`, { email });
    return true;
  } catch (err) {
    return false;
  }
}

export async function register(registerDto: RegisterDto) {
  try {
    const res = await axios.post(`register`, registerDto);
    return true;
  } catch (err) {
    return false;
  }
}