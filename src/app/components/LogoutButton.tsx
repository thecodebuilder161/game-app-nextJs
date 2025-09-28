'use client';

import { logout } from "../api/auth";

const LogoutButton = () => {
  return (
    <div>
      <button type="button" onClick={() => logout()} className="ml-6 cursor-pointer bg-gradient-to-r from-[#8eb50d] to-[#eebbc3] hover:from-[#eebbc3] hover:to-[#8eb50d] text-[#232946] font-extrabold py-2 px-6 rounded-lg shadow transition text-sm sm:text-lg md:text-lg border-2 border-[#8eb50d]">
        Logout
      </button>
    </div>
  )
}

export default LogoutButton