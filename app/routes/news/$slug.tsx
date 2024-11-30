import { createFileRoute, useParams } from '@tanstack/react-router'
import { NotFound } from "~/components/NotFound.js";
import { fetchPost } from "~/utils/posts.js";

export const Route = createFileRoute("/news/$slug")({
  loader: ({ params: { slug } }) => fetchPost({ data: slug }),
  component: RouteComponent,
  notFoundComponent: () => {
    return <NotFound>Post not found</NotFound>;
  },
});

function RouteComponent() {
  const { slug } = useParams({ strict: false });
  return <div>Hello "/news/{slug}"!</div>
}
