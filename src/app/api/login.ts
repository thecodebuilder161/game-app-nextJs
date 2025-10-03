import { LoginResponse } from "@/features/login/model";

const loginApiCall = async(username: string, password: string) => {

  const res = await fetch(process.env.BACKEND_URL + "/login", {
    method: "POST",
    headers: {
        "Content-Type": "application/json",
    },
    body: JSON.stringify({ username, password }),
    cache: "default"
  });

  const data: LoginResponse = await res.json();

  if (!res.ok) {
    return { success: false, message: data?.error?.length ? data.error : 'Login failed', data: null };
  }

  return { success: true, data, message: 'Login successful' };
}

export default loginApiCall