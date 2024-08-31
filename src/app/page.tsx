import Link from "next/link";
import Image from 'next/image';
import ModalForm from "./components/modal";

export default function HomePage() {
  return (
    <main className="flex flex-col items-center justify-center bg-gradient-to-b from-[#76129b] to-[#15162c] text-seance-200">
      <button
        data-modal-target="crud-modal"
        data-modal-toggle="crud-modal"
        className="text-white bg-tulip-tree-700 mt-5 hover:bg-tulip-tree-800 focus:ring-tulip-tree-300 dark:bg-tulip-tree-600 dark:hover:bg-tulip-tree-700 dark:focus:ring-tulip-tree-800 block rounded-lg px-5 py-2.5 text-center text-sm font-medium focus:outline-none focus:ring-4"
        type="button"
      >
        Toggle modal
      </button>
      <div className="flex flex-col bg-cover bg-center sm:w-full">
        <Image
          src="/images/marketplace.webp"
          alt="image"
          className="mx-auto mt-3 rounded-md border-8 border-seance-50 mix-blend-normal"
          width={1024}
          height={200}
        />
        <h1 className="mt-10 box-border text-center text-3xl font-extrabold tracking-tight text-seance-200 sm:text-[5rem]">
          <span className="text-[hsl(280,100%,70%)]">Food from</span>{" "}
          {"The King's Courtyard"}
        </h1>
      </div>
      <div className="mx-4 mt-8 space-y-4 lg:mt-16">
        <p className="lg:text-2xl">
          If you have registered as a beneficiary before and wish to check the
          status of your registration click <Link href={"/search"}>here</Link>
        </p>
        <p className="lg:text-2xl">
          If not the click any of the buttons below to begin
        </p>
      </div>
      <div className="container flex flex-grow flex-col items-center justify-center gap-12 px-4 py-16">
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-8">
          <Link
            className="bg-white/10 text-white hover:bg-white/20 hover-draw-border box-border flex max-w-xs flex-col gap-4 rounded-xl p-4"
            href="/beneficiary-register"
          >
            <h3 className="text-2xl font-bold">Beneficiary →</h3>
          </Link>
          <Link
            className="bg-white/10 text-white hover:bg-white/20 hover-draw-border box-border flex max-w-xs flex-col gap-4 rounded-xl p-4"
            href="/api/auth"
          >
            <h3 className="text-2xl font-bold">Volunteer →</h3>
          </Link>
        </div>
      </div>
      <ModalForm />
    </main>
  );
}
