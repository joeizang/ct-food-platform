import Image from "next/image";
import Link from "next/link";
import React from "react";

export default async function RegisteredBeneficiaries () {

  return (
    <main className="mx-2 px-2 h-screen overflow-hidden rounded-lg border bg-gradient-to-b from-[#76129b] to-[#15162c] shadow transition hover:shadow-lg">
      <ul role="list" className="divide-y divide-gray-100 w-10/12 mx-auto mt-32">
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <Image width={400} height={400} className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-seance-50">Leslie Alexander</p>
        <p className="mt-1 truncate text-xs leading-5 text-seance-100">leslie.alexander@example.com</p>
      </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="text-sm leading-6 text-seance-50">Co-Founder / CEO</p>
      <p className="mt-1 text-xs leading-5 text-seance-100">Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time></p>
    </div>
    <div className="hidden shrink-0 lg:flex lg:flex-row lg:items-end">
      <Link href="/registered-beneficiaries/id"><p className="text-sm text-seance-50 hover:text-tulip-tree-200 hover:cursor-pointer">Details</p></Link>
      <Link href="/registered-beneficiaries/id"><p className="text-sm text-seance-50 hover:text-tulip-tree-200 hover:cursor-pointer">Update</p></Link>
    </div>
  </li>
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <Image width={400} height={400} className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1519244703995-f4e0f30006d5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-seance-50">Michael Foster</p>
        <p className="mt-1 truncate text-xs leading-5 text-seance-100">michael.foster@example.com</p>
      </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="text-sm leading-6 text-seance-50">Co-Founder / CTO</p>
      <p className="mt-1 text-xs leading-5 text-seance-100">Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time></p>
    </div>
  </li>
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <Image width={400} height={400} className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-seance-50">Dries Vincent</p>
        <p className="mt-1 truncate text-xs leading-5 text-seance-100">dries.vincent@example.com</p>
      </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="text-sm leading-6 text-seance-50">Business Relations</p>
      <div className="mt-1 flex items-center gap-x-1.5">
        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
        </div>
        <p className="text-xs leading-5 text-seance-100">Online</p>
      </div>
    </div>
  </li>
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <Image width={400} height={400} className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-seance-50">Lindsay Walton</p>
        <p className="mt-1 truncate text-xs leading-5 text-seance-100">lindsay.walton@example.com</p>
      </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="text-sm leading-6 text-seance-50">Front-end Developer</p>
      <p className="mt-1 text-xs leading-5 text-seance-100">Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time></p>
    </div>
  </li>
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <Image width={400} height={400} className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-seance-50">Courtney Henry</p>
        <p className="mt-1 truncate text-xs leading-5 text-seance-100">courtney.henry@example.com</p>
      </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="text-sm leading-6 text-seance-50">Designer</p>
      <p className="mt-1 text-xs leading-5 text-seance-100">Last seen <time dateTime="2023-01-23T13:23Z">3h ago</time></p>
    </div>
  </li>
  <li className="flex justify-between gap-x-6 py-5">
    <div className="flex min-w-0 gap-x-4">
      <Image width={400} height={400} className="h-12 w-12 flex-none rounded-full bg-gray-50" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" alt="" />
      <div className="min-w-0 flex-auto">
        <p className="text-sm font-semibold leading-6 text-seance-50">Tom Cook</p>
        <p className="mt-1 truncate text-xs leading-5 text-seance-100">tom.cook@example.com</p>
      </div>
    </div>
    <div className="hidden shrink-0 sm:flex sm:flex-col sm:items-end">
      <p className="text-sm leading-6 text-seance-50">Director of Product</p>
      <div className="mt-1 flex items-center gap-x-1.5">
        <div className="flex-none rounded-full bg-emerald-500/20 p-1">
          <div className="h-1.5 w-1.5 rounded-full bg-emerald-500"></div>
        </div>
        <p className="text-xs leading-5 text-seance-100">Online</p>
      </div>
    </div>
  </li>
</ul>

    </main>
  )
}