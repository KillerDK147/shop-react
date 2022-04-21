import http from "./httpService";
import jwtDecode from "jwt-decode";

const tokenKey = "x-auth-token";
const apiEndpoint = "login/";

http.setJwt(getJWT());

export async function login(Email, password) {
  const { data: jwt } = await http.post(apiEndpoint, { Email, password });
  localStorage.setItem(tokenKey, jwt);
}

export function logout() {
  localStorage.removeItem(tokenKey);
}

export function getJWT() {
  return localStorage.getItem(tokenKey);
}

export function getCurrentUser() {
  try {
    const jwt = getJWT();
    return jwtDecode(jwt);
  } catch (ex) {
    return null;
  }
}
