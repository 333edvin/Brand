import Image from 'next/image';
import Link from 'next/link';

function Hero() {
  return (
    <>
      <div
        className="relative grid grid-cols-1 md:grid-cols-2 gap-0 md:gap-8 items-center mx-auto p-6 md:p-10 h-screen bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: "url('/images/background.jpeg')" }} // Replace with your background image path
      >
        <div className="flex justify-center">
          <Image
            src="/images/banner.png"
            alt="Banner Image"
            width={500}
            height={500}
            className="max-w-full h-auto rounded-b-full"
          />
        </div>
        <div className="text-left space-y-4 z-20">
          <h1 className="text-3xl md:text-5xl font-semibold leading-tight md:leading-snug text-white">
            Innovative Web Solutions for a Digital World
          </h1>
          <p className="text-sm text-white">We are Creative Web Development Agency</p>
          <Link href={'/contact'} className="">
          <button className="relative mt-5 px-6 py-2 font-semibold text-white uppercase transition-transform duration-200 border border-cyan-500 rounded shadow-lg hover:scale-105 focus:outline-none z-30">
            Let&apos;s Get Digital
            <span className="absolute inset-0 rounded blur-lg opacity-75 bg-cyan-500 animate-pulse z-10"></span>
          </button>
          </Link>
        </div>
        {/* Optional overlay for better text readability */}
        <div className="absolute inset-0 md:bg-black/50 bg-black/20 z-10"></div>
      </div>
    </>
  );
}

export default Hero;
