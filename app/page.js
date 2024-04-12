import Cardcom from '@components/Cardcom'
import Navbar from '@components/Navbar'
import Link from 'next/link'
import React from 'react'

const page = () => {
  return (
    <main className="flex min-h-screen flex-col">
    <Navbar />
    <div className="container mt-24 mx-auto px-12 py-4  text-center flex flex-col items-center justify-center  w-76 sm:w-full">
        <Cardcom />
    </div>
</main>

  )
}

export default page
