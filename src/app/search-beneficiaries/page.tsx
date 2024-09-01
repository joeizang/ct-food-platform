import React from 'react'
import SearchForm from '../components/searchForm'
import { searchServerAction } from '~/server/serverfunctions'


export default function SearchBeneficiary () {

  return (
    <main className="mx-2 h-screen overflow-hidden rounded-lg border bg-gradient-to-b from-[#76129b] to-[#15162c] shadow transition hover:shadow-lg">
      <SearchForm searchServerAction={searchServerAction}/>
    </main>
  )
}