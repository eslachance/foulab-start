import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/exposition/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/exposition/"!</div>
}