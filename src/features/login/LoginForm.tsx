'use client';
import { useActionState, useState } from "react";
import { useFormStatus } from "react-dom";
import { login } from "@/app/api/auth";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [state, action] = useActionState(async (prevState: any, formData: FormData) => {
      formData.set("username", username);
      formData.set("password", password);
      return await login(prevState, formData);
  }, undefined);

  return (
      <div className="w-full max-w-md">
        <form action={action} className="relative bg-[#232946] p-10 rounded-2xl shadow-2xl w-full max-w-md space-y-8 border-2 border-[#8eb50d]">
            <div className="flex flex-col items-center mb-4">
                <h2 className="text-3xl font-extrabold text-[#8eb50d] tracking-wide mb-1">Sign In</h2>
                <span className="text-sm text-[#eebbc3] font-medium">to your gaming account</span>
            </div>
            <div>
                <label htmlFor="username" className="block text-sm font-semibold text-[#eebbc3] mb-1">Username</label>
                <input
                    name="username"
                    id="username"
                    placeholder="Enter your username"
                    className="w-full px-4 py-2 bg-[#121629] border border-[#393e46] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8eb50d] placeholder-gray-400"
                    value={username}
                    onChange={e => setUsername(e.target.value)}
                />
                { !state?.success && Array.isArray(state?.errors?.username?.errors) && state?.errors?.username?.errors.length > 0 && (
                  <p className="text-red-500 text-xs mt-2">
                    {state?.errors?.username?.errors?.join(', ')}
                  </p>
                )}
            </div>
            <div>
                <label htmlFor="password" className="block text-sm font-semibold text-[#eebbc3] mb-1">Password</label>
                <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="Enter your password"
                    className="w-full px-4 py-2 bg-[#121629] border border-[#393e46] text-white rounded-lg focus:outline-none focus:ring-2 focus:ring-[#8eb50d] placeholder-gray-400"
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                />
                { !state?.success && Array.isArray(state?.errors?.password?.errors) && state?.errors?.password?.errors.length > 0 && (
                  <p className="text-red-500 text-xs mt-2">
                    {state?.errors?.password?.errors?.join(', ')}
                  </p>
                )}
            </div>
            <SubmitButton />
            { !state?.success && (
              <p className="text-red-500 text-xs mt-2">
                  {state?.message}
              </p>
            )}
        </form>
      </div>
  );
}

function SubmitButton() {
  const { pending } = useFormStatus();

  return (
    <button
        type="submit" disabled={pending} id="submitSignIn"
        className="w-full py-2 px-4 bg-gradient-to-r from-[#8eb50d] to-[#eebbc3] hover:from-[#eebbc3] hover:to-[#8eb50d] text-[#232946] font-extrabold rounded-lg shadow-lg transition text-lg tracking-wide border-2 border-[#8eb50d]"
    >
        Log In
    </button>
  );
}

export default LoginForm;