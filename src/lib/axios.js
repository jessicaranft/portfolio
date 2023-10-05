import axios from 'axios'

export const wpApi = axios.create({
  baseURL:
    'http://public-api.wordpress.com/wp/v2/sites/jessicaranft71754848434.wordpress.com',
})
