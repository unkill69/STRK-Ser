import Link from "next/link"
import React from "react"

export default function Footer() {
  return (
    <div className="text-center py-6 max-w-7xl mx-auto">
      Built by &nbsp;
      <Link
        href={"https://github.com/unkill69"}
        className=" hover:underline"
        target="_blank"
        rel="noopener noreferrer"
      >
        Unkill
      </Link>{" "}
    </div>
  )
}
