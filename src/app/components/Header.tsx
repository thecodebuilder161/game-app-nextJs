import Image from 'next/image';
import { getUserFromSession, getUserInfo } from "@/app/lib/getUserInfo";
import LogoutButton from './LogoutButton';

export default async function Header() {
  const userLoggedIn = await getUserFromSession();
  const userDetails = userLoggedIn ? await getUserInfo() : null;

  return (
    <header className="w-full bg-[#232946] shadow-lg border-b-2 border-[#8eb50d]">
      <div className="container mx-auto py-3 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <Image
            src="/logo.svg"
            alt="ComeOn!"
            width={140}
            height={40}
            className="drop-shadow-lg"
          />
        </div>
        <nav className="flex items-center gap-2">
          { userLoggedIn && userDetails && (
            <Image
              src={userDetails.avatar.startsWith('/') ? userDetails.avatar : `/${userDetails.avatar}`}
              alt={userDetails.name}
              title={userDetails.name}
              width={48}
              height={48}
              className="rounded-full"
            />
          )}
          { userLoggedIn &&  (
            <LogoutButton />
          )}
        </nav>
      </div>
    </header>
  );
}