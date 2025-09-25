
'use client';
import Link from 'next/link';
import Image from 'next/image';

export default function Home() {
  return (
    <div className="relative flex min-h-screen flex-col items-center justify-center overflow-hidden">
     
      <div className="absolute inset-0 w-full h-full z-0 flex flex-wrap opacity-60 blur-sm select-none pointer-events-none items-center justify-center content-center">
        <Image src="/book_of_inferno_logo.png" alt="Book of Inferno" width={180} height={120} className="w-1/4 h-1/3 object-contain m-2" />
        <Image src="/feasting_fox.png" alt="Feasting Fox" width={180} height={120} className="w-1/4 h-1/3 object-contain m-2" />
        <Image src="/warp_wreckers_powerglyph_logo.png" alt="Warp Wreckers" width={180} height={120} className="w-1/4 h-1/3 object-contain m-2" />
        <Image src="/scatter-monster-logo.png" alt="Scatter Monster" width={180} height={120} className="w-1/4 h-1/3 object-contain m-2" />
        <Image src="/renoseverns_logo_one_line_shadow.png" alt="Reno Severns" width={180} height={120} className="w-1/4 h-1/3 object-contain m-2" />
      </div>
      
      <div className="absolute inset-0 bg-gradient-to-br from-[#1a1a2e]/90 to-[#16213e]/90 z-10" />
      <div className="relative z-20 bg-[#232946] rounded-2xl shadow-2xl p-10 max-w-lg w-full text-center border-2 border-[#8eb50d]">
        <div className="flex flex-col items-center mb-4">
          <h1 className="text-4xl font-extrabold mb-2 text-[#8eb50d] tracking-wide">Welcome to ComeOn!</h1>
          <span className="text-lg text-[#eebbc3] font-medium">Your gateway to online gaming</span>
        </div>
        <div className="flex justify-center gap-6 mt-8">
          <Link
            href="/login"
            className="px-8 py-3 bg-gradient-to-r from-[#8eb50d] to-[#eebbc3] hover:from-[#eebbc3] hover:to-[#8eb50d] text-[#232946] font-extrabold rounded-lg shadow-lg transition text-lg tracking-wide border-2 border-[#8eb50d] inline-flex items-center justify-center"
          >
            Sign In
          </Link>
        </div>
      </div>
    </div>
  );
}
