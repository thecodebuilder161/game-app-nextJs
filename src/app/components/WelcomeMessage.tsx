
import { getUserInfo } from "../lib/getUserInfo";

export default async function WelcomeMessage() {
  const userDetails = await getUserInfo();

  return (
    <div>
      <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-left sm:text-left mb-2 text-white drop-shadow-lg tracking-wide">
        Welcome, <span className="text-[#8eb50d]">{userDetails?.name}</span>
      </h1>
      <p className="text-sm sm:text-base md:text-lg text-gray-300 mb-6 sm:mb-8">
        {userDetails?.event}
      </p>
    </div>
  )
}
