import { notFound } from '@tanstack/react-router'
import { createServerFn } from '@tanstack/start'
import axios from 'redaxios'

export type PostType = {
  id: string
  title: string
  body: string
}

export const fetchPost = createServerFn({ method: 'GET' })
  .validator((postId: string) => postId)
  .handler(async ({ data }) => {
    console.info(`Fetching post with id ${data}...`)
    const post = await axios
      .get<PostType>(`https://jsonplaceholder.typicode.com/posts/${data}`)
      .then((r) => r.data)
      .catch((err) => {
        console.error(err)
        if (err.status === 404) {
          throw notFound()
        }
        throw err
      })

    return post
  })

export const fetchPosts = createServerFn({ method: 'GET' }).handler(
  async () => {
    console.info('Fetching posts...')
    await new Promise((r) => setTimeout(r, 1000))
    return axios
      .get<Array<PostType>>('https://jsonplaceholder.typicode.com/posts')
      .then((r) => r.data.slice(0, 10))
  },
)