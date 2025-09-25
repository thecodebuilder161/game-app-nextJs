'use server';

import { z } from "zod";
import { LoginFormSchema, LoginResponse } from "@/app/lib/definations";
import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/app/lib/sessions";
import { deleteUserInfo, getUserFromSession, setUserInfo } from "@/app/lib/getUserInfo";

export async function login(prevState: any, formData: FormData) {
    const username = formData.get('username');
    const password = formData.get('password');

    // Validate input
    if (username?.toString().trim() === '') {
      return { success: false, message: 'Missing field(s)', errors: {
          username: { errors: ['Username cannot be blank'] }
      } };
    } 
    if (password?.toString().trim() === '') {
      return { success: false, message: 'Missing field(s)', errors: {
          password: { errors: ['Password cannot be blank'] }
      } };
    } 

    const validateInputResult = LoginFormSchema.safeParse({ 
      username, password
    });

    if (!validateInputResult.success) {
        return { success: false, message: 'Please check the Username/Password fields', errors: z.treeifyError(validateInputResult.error).properties};
    }

    // make API call
    const res = await fetch(process.env.BACKEND_URL + "/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
        cache: "no-store"
    });
    
    const data: LoginResponse = await res.json();
    
    if (!res.ok) {
      return { success: false, message: data?.error?.length ? data.error : 'Login failed' };
    }

    await createSession(username as string);
    await setUserInfo(data.player);
    redirect("/games");   
}

export async function logout() {
    const username = await getUserFromSession();
    // make API call
    const res = await fetch(process.env.BACKEND_URL + "/logout", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
        cache: "no-store"
    });
    
    if (!res.ok) {
      alert('Logout failed');
      return { success: false, message: 'Logout failed' };
    }
    await deleteUserInfo();
    await deleteSession();
    redirect("/login");
}