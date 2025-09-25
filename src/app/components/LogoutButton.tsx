'use client';

import { logout } from "../login/actions";

const LogoutButton = () => {
  return (
    <div>
      <button type="button" onClick={() => logout()} className="ml-6 bg-gradient-to-r from-[#8eb50d] to-[#eebbc3] hover:from-[#eebbc3] hover:to-[#8eb50d] text-[#232946] font-extrabold py-2 px-6 rounded-lg shadow transition text-lg border-2 border-[#8eb50d]">
        Logout
      </button>
    </div>
  )
}

export default LogoutButton