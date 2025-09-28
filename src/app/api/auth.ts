'use server';
import { z } from "zod";
import { LoginFormSchema, Player } from "@/features/login/model";
import { redirect } from "next/navigation";
import { createSession, deleteSession } from "@/app/lib/sessions";
import { deleteUserInfo, setUserInfo } from "@/app/lib/getUserInfo";
import loginApiCall from "./login";
import logoutApiCall from "./logout";

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

    const data = await loginApiCall(username as string, password as string);

    if (data.success) {
        await createSession(username as string);
        await setUserInfo(data?.data?.player as Player);
        redirect("/games");
    } else {
        return { success: false, message: data.message };
    }
}

export async function logout() {

  const data = await logoutApiCall();
  if (data.success) {
    await deleteUserInfo();
    await deleteSession();
    redirect("/login");
  }
    
}