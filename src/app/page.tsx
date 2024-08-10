import Link from "next/link";
import Image from 'next/image';

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-b from-[#76129b] to-[#15162c] text-seance-200">
  <div className=" flex flex-col sm:w-full bg-cover bg-center" >
    <Image src="/images/marketplace.webp"  alt="image" className="mix-blend-normal rounded-md border-seance-50 border-8 mt-3 mx-auto" width={1024} height={200} />
    <h1 className="text-3xl font-extrabold tracking-tight text-seance-200 sm:text-[5rem] box-border text-center mt-5">
      <span className="text-[hsl(280,100%,70%)]">Food from</span> {"The King's Courtyard"}
    </h1>
  </div>
  <div className="container flex flex-grow flex-col items-center justify-center gap-12 px-4 py-16">
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
      <Link
        className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 hover-draw-border box-border"
        href="/beneficiary-register"
      >
        <h3 className="text-2xl font-bold">Voucher Beneficiary →</h3>
      </Link>
      <Link
        className="flex max-w-xs flex-col gap-4 rounded-xl bg-white/10 p-4 text-white hover:bg-white/20 hover-draw-border box-border"
        href="/auth/register"
      >
        <h3 className="text-2xl font-bold">Volunteer →</h3>
      </Link>
    </div>
  </div>
</main>
  );
}
