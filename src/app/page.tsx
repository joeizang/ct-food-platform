import Link from "next/link";
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-b from-[#76129b] to-[#15162c] text-seance-200">
      <div className="flex flex-col bg-cover bg-center sm:w-full">
        <Image
          src="/images/marketplace.webp"
          alt="image"
          className="mx-auto mt-3 rounded-md border-8 border-seance-50 mix-blend-normal"
          width={1024}
          height={200}
        />
        <h1 className="mt-5 box-border text-center text-3xl font-extrabold tracking-tight text-seance-200 sm:text-[5rem]">
          <span className="text-[hsl(280,100%,70%)]">Food from</span>{" "}
          {"The King's Courtyard"}
        </h1>
      </div>
      <div className="container flex flex-grow flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="bg-white/10 text-white lg:hover:bg-white/20 lg:hover-draw-border box-border flex max-w-xs flex-col gap-4 rounded-xl p-4"
            href="/beneficiary-register"
          >
            <h3 className="text-2xl font-bold">Voucher Beneficiary →</h3>
          </Link>
          <Link
            className="bg-white/10 text-white lg:hover:bg-white/20 lg:hover-draw-border box-border flex max-w-xs flex-col gap-4 rounded-xl p-4"
            href="/api/auth"
          >
            <h3 className="text-2xl font-bold">Volunteer →</h3>
          </Link>
        </div>
      </div>
    </main>
  );
}
