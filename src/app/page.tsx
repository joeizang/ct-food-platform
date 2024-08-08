import Link from "next/link";
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-b from-[#2e026d] to-[#15162c] text-seance-200">
  <div className="h-screen w-full sm:w-full bg-cover bg-center" >
    <img src='/images/marketplace.webp'  alt="image" className="h-1/2 w-full" />
    <h1 className="text-5xl font-extrabold tracking-tight text-seance-200 sm:text-[5rem] box-border text-center pt-20">
      <span className="text-[hsl(280,100%,70%)]">Courtyard of</span> Truth
    </h1>
  </div>
  <div className="container flex flex-grow flex-col items-center justify-center gap-12 px-4 py-16">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
      <Link
        className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 hover-draw-border box-border"
        href="https://create.t3.gg/en/usage/first-steps"
        target="_blank"
      >
        <h3 className="text-2xl font-bold">Voucher Beneficiary →</h3>
      </Link>
      <Link
        className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 hover-draw-border box-border"
        href="https://create.t3.gg/en/introduction"
        target="_blank"
      >
        <h3 className="text-2xl font-bold">Volunteer →</h3>
      </Link>
    </div>
  </div>
</main>
  );
}
