import { getUserFromSession } from "@/app/lib/getUserInfo";

const logoutApiCall = async () => {
  const username = await getUserFromSession();

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

  return { success: true  };


}

export default logoutApiCall