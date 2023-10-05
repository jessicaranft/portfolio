// https://public-api.wordpress.com/wp/v2/sites/jessicaranft71754848434.wordpress.com/
// Posts: https://public-api.wordpress.com/wp/v2/sites/jessicaranft71754848434.wordpress.com/posts

import { useState, useEffect } from 'react'
import { useNavigate } from 'react-router-dom'

import { formatDistanceToNow } from 'date-fns'

import { wpApi } from '../../lib/axios'

import { Container, PostsContainer } from './styles'

export function Blog() {
  const [posts, setPosts] = useState([])
  const navigate = useNavigate()

  async function fetchPosts() {
    try {
      const response = await wpApi.get('/posts', {
        params: {
          _fields: 'id,title,content,modified,tags,posts,excerpt',
          per_page: 10,
        },
      })

      const postsWithTags = await Promise.all(
        response.data.map(async (post) => {
          const tagsResponse = await wpApi.get(
            `/tags?include=${post.tags.join(',')}`,
          )
          const tags = tagsResponse.data.map((tag) => tag.name)

          return { ...post, tags }
        }),
      )

      setPosts(postsWithTags)
    } catch (error) {
      console.error('Error while fetching the posts.', error)
    }
  }

  function handlePostClick(id) {
    navigate(`/post/${id}`)
  }

  useEffect(() => {
    fetchPosts()
  }, [])

  return (
    <Container>
      <h1>Blog</h1>

      <PostsContainer>
        <ul>
          {posts.map((post) => (
            <li key={post.id} onClick={() => handlePostClick(post.id)}>
              <p>
                {formatDistanceToNow(new Date(post.modified), {
                  addSuffix: true,
                })}
              </p>
              <strong
                dangerouslySetInnerHTML={{ __html: post.title.rendered }}
              />
              <p dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }} />
              <div>
                {post.tags.map((tag) => (
                  <span key={tag}>{tag}</span>
                ))}
              </div>
            </li>
          ))}
        </ul>
      </PostsContainer>
    </Container>
  )
}
