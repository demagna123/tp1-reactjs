import type { ReactNode } from "react"

type H1Props = {
    children : ReactNode
}

export default function H1({
    children
}: H1Props) {
  return (
    <div>{children}</div>
  )
}
