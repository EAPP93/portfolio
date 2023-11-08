import * as React from 'react'

const portfolioIcon = (props: React.SVGProps<SVGSVGElement>) => (
  <svg height={24} width={24} xmlns="http://www.w3.org/2000/svg" {...props}>
    <path d="M20 6h-4V4a2 2 0 0 0-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-2 .89-2 2v11a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2M10 4h4v2h-4zm2 5a2.5 2.5 0 0 1 2.5 2.5A2.5 2.5 0 0 1 12 14a2.5 2.5 0 0 1-2.5-2.5A2.5 2.5 0 0 1 12 9m5 10H7v-1.25c0-1.38 2.24-2.5 5-2.5s5 1.12 5 2.5z" />
  </svg>
)

export default portfolioIcon