'use client'
import React from 'react'

export type SearchFormProps = {
  searchServerAction: (data: FormData) => Promise<void>
}

export default function SearchForm (props: SearchFormProps) {

  const clientAction = async () => {
    return {}
  }

  return (
    <div className="w-full h-4/6">
      <form action={clientAction} className="">

      </form>
    </div>
  )
}