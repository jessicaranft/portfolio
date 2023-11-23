import { useEffect, useState } from 'react'

import { MdArrowBackIosNew } from 'react-icons/md'

import { format } from 'date-fns'

import { wpApi } from '../../lib/axios'

import { Container, PostContentContainer, PostDetailsContainer } from './styles'
import { useNavigate, useParams } from 'react-router-dom'

import { LoadingSpinner } from '../../components/LoadingSpinner'

export function BlogPost() {
  const { id } = useParams()
  const [postContent, setPostContent] = useState(null)
  const [isLoading, setIsLoading] = useState(false)
  const [tags, setTags] = useState([])

  const navigate = useNavigate()

  function handleBack() {
    navigate('/blog')
  }

  async function fetchPostContent() {
    try {
      setIsLoading(true)
      const response = await wpApi.get(`/posts/${id}`)
      const post = response.data

      setPostContent(post)
      setIsLoading(false)

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
      {isLoading ? (
        <div className="loading-container">
          <LoadingSpinner />
        </div>
      ) : (
        postContent && (
          <PostContentContainer>
            <button onClick={handleBack}>
              <MdArrowBackIosNew />
              Voltar
            </button>

            <h1
              dangerouslySetInnerHTML={{ __html: postContent.title.rendered }}
            />

            <PostDetailsContainer>
              <span>
                {format(new Date(postContent.modified), 'dd/MM/yyyy')} às{' '}
                {format(new Date(postContent.modified), 'HH:mm')}
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
        )
      )}
    </Container>
  )
}
