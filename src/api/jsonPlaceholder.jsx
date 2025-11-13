export async function getPosts(page = 1, limit = 10) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_page=${page}&_limit=${limit}`
  )
  return response.json()
}

export async function searchPosts(query) {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/posts?q=${query}`
  )
  return response.json()
}
export default {
  // ... existing config
  esbuild: {
    loader: 'jsx',
  },
}