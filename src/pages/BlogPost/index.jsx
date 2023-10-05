import { useEffect, useState } from 'react'

import { MdArrowBackIosNew } from 'react-icons/md'

import { format } from 'date-fns'

import { wpApi } from '../../lib/axios'

import { Container, PostContentContainer, PostDetailsContainer } from './styles'
import { useNavigate, useParams } from 'react-router-dom'

export function BlogPost() {
  const { id } = useParams()
  const [postContent, setPostContent] = useState(null)
  const [tags, setTags] = useState([])

  const navigate = useNavigate()

  function handleBack() {
    navigate('/blog')
  }

  async function fetchPostContent() {
    try {
      const response = await wpApi.get(`/posts/${id}`)
      const post = response.data

      setPostContent(post)

      if (post.tags && post.tags.length > 0) {
        const tagsResponse = await wpApi.get(
          `/tags?include=${post.tags.join(',')}`,
        )
        const tagNames = tagsResponse.data.map((tag) => tag.name)
        setTags(tagNames)
      }
    } catch (error) {
      console.error('Error while fetching this post.', error)
    }
  }

  useEffect(() => {
    fetchPostContent()
  }, [])

  return (
    <Container>
      {postContent && (
        <PostContentContainer>
          <button onClick={handleBack}>
            <MdArrowBackIosNew />
            Go back
          </button>

          <h1
            dangerouslySetInnerHTML={{ __html: postContent.title.rendered }}
          />

          <PostDetailsContainer>
            <span>
              {format(new Date(postContent.modified), 'dd/MMM/yyyy')} at{' '}
              {format(new Date(postContent.modified), 'hh:mm bb')}
            </span>
            <span className="desktop-only">|</span>
            <div>
              {tags.map((tag) => (
                <span key={tag}>{tag}</span>
              ))}
            </div>
          </PostDetailsContainer>

          <p
            dangerouslySetInnerHTML={{ __html: postContent.content.rendered }}
          />
        </PostContentContainer>
      )}
    </Container>
  )
}