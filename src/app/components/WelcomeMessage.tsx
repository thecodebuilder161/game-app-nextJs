
import { getUserInfo } from "../lib/getUserInfo";

export default async function WelcomeMessage() {
  const userDetails = await getUserInfo();

  return (
    <div>
      <h1 className="text-4xl font-bold text-left mb-2 text-white drop-shadow-lg tracking-wide">Welcome, <span className="text-[#8eb50d]">{userDetails?.name}</span></h1>
      <p className="text-gray-300 mb-8">{userDetails?.event}</p>
    </div>
  )
}
