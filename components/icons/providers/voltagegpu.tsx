import React from 'react'

// Simplified monochrome mark derived from the VoltageGPU logo (a V inside a ring)
export default function VoltageGPUIcon({ className, ...props }: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      className={className}
      aria-hidden="true"
      {...props}
    >
      <path
        fill="currentColor"
        fillRule="evenodd"
        d="M12 2.5a9.5 9.5 0 1 0 0 19 9.5 9.5 0 0 0 0-19Zm0 1.8a7.7 7.7 0 1 0 0 15.4 7.7 7.7 0 0 0 0-15.4Z"
      />
      <path fill="currentColor" d="M6.9 6.5h2.7L12 13.9l2.4-7.4h2.7l-3.9 11h-2.4Z" />
    </svg>
  )
}
