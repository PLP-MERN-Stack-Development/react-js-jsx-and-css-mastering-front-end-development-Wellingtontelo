import { useState, useEffect } from 'react'
import { getPosts, searchPosts } from '../api/jsonPlaceholder.jsx'
import Card from '../Components/card.jsx'
import Button from '../Components/button.jsx'

export default function Posts() {
  const [posts, setPosts] = useState([])
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [page, setPage] = useState(1)
  const [search, setSearch] = useState('')

  useEffect(() => {
    loadPosts()
  }, [page])

  const loadPosts = async () => {
    setLoading(true)
    try {
      const data = await getPosts(page)
      setPosts(prev => page === 1 ? data : [...prev, ...data])
      setError('')
    } catch (err) {
      setError('Failed to load posts')
    } finally {
      setLoading(false)
    }
  }

  const handleSearch = async () => {
    if (!search) {
      setPage(1)
      loadPosts()
      return
    }
    
    setLoading(true)
    try {
      const data = await searchPosts(search)
      setPosts(data)
      setError('')
    } catch (err) {
      setError('Search failed')
    } finally {
      setLoading(false)
    }
  }

  return (
    <div className="p-4">
      <Card className="max-w-4xl mx-auto">
        <h1 className="text-2xl font-bold mb-4">Posts</h1>
        
        <div className="flex gap-2 mb-4">
          <input
            type="text"
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            placeholder="Search posts..."
            className="flex-1 p-2 border rounded"
          />
          <Button onClick={handleSearch}>Search</Button>
        </div>

        {error && <div className="text-red-500 mb-4">{error}</div>}
        {loading && <div className="text-blue-500 mb-4">Loading...</div>}

        <div className="grid gap-4 md:grid-cols-2">
          {posts.map(post => (
            <Card key={post.id} className="p-4">
              <h3 className="font-bold text-lg">{post.title}</h3>
              <p className="text-gray-600">{post.body}</p>
            </Card>
          ))}
        </div>

        <div className="mt-4 text-center">
          <Button onClick={() => setPage(page + 1)} disabled={loading}>
            {loading ? 'Loading...' : 'Load More'}
          </Button>
        </div>
      </Card>
    </div>
  )
}