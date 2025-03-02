import { GraduationCap } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

export default function Logo() {
  return (
    <Link href={"/"} className="flex items-center space-x-2">
      <div className="bg-blue-500 rounded-full p-1">
        <span className="text-white font-bold text-xl">
          <GraduationCap size={24} />
        </span>
      </div>
      <span className="font-bold text-xl">
        <span className="text-blue-500">Dimension</span>
        <span className="text-green-500">Plus</span>
      </span>
    </Link>
  )
}
