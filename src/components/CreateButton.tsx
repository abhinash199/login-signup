'use client'
import React from 'react'
import { useRouter } from 'next/navigation'
function CreateButton() {
    const router = useRouter();
  return (
    <button className="cssbuttons-io-button"  onClick={() => router.push('/boards/create')}>
    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="24" height="24"><path fill="none" d="M0 0h24v24H0z"></path><path fill="currentColor" d="M11 11V5h2v6h6v2h-6v6h-2v-6H5v-2z"></path></svg>
    <span>Create KudoBoard</span>
  </button>
  )
}

export default CreateButton