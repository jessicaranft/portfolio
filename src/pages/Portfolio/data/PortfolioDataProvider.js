import { useTranslation } from 'react-i18next'

import previewFoodExplorer from '../../../assets/portfolio/foodexplorer.png'
import previewConexaoBritanica from '../../../assets/portfolio/conexaobritanica.png'
import previewRocketmovies from '../../../assets/portfolio/rocketmovies.png'
import previewEnglishTravel from '../../../assets/portfolio/englishtravel.png'
import previewFocusTimer from '../../../assets/portfolio/focustimer.png'
import previewPersonalEnglish from '../../../assets/portfolio/personalenglish.png'
import previewPortfolio from '../../../assets/portfolio/portfolio.png'
import previewGithubBlog from '../../../assets/portfolio/github-blog.png'

export function PortfolioDataProvider() {
  const { t } = useTranslation()

  function getPortfolioData() {
    return [
      {
        title: '<GitHub Blog />',
        previewImageSrc: previewGithubBlog,
        description: [
          t('portfolio.githubBlog.p1'),
          t('portfolio.githubBlog.p2'),
          t('portfolio.githubBlog.p3'),
          t('portfolio.githubBlog.p4'),
        ],
        stacks: [
          'ReactJS',
          'TypeScript',
          'Styled Components',
          'React Router Dom',
          'React Hook Form',
          'React Markdown',
          'Zod',
          'Date FNS',
          'NodeJS',
          'HTML5',
          'CSS in JS',
          'API Rest',
        ],
        links: [
          {
            label: t('portfolio.foodexplorer.link'),
            url: 'https://github.com/jessicaranft/blog',
          },
          {
            label: 'Demo',
            url: 'https://blog-flax-nu-26.vercel.app/',
          },
        ],
        publishedOn: '09/2023',
      },
      {
        title: '<Food Explorer />',
        previewImageSrc: previewFoodExplorer,
        description: [
          t('portfolio.foodexplorer.p1'),
          t('portfolio.foodexplorer.p2'),
          t('portfolio.foodexplorer.p3'),
          t('portfolio.foodexplorer.p4'),
          t('portfolio.foodexplorer.p5'),
          t('portfolio.foodexplorer.p6'),
        ],
        stacks: [
          'ReactJS',
          'Styled Components',
          'React Router Dom',
          'NodeJS',
          'Express',
          'HTML5',
          'CSS in JS',
          'API Rest',
          'SQLite',
        ],
        links: [
          {
            label: t('portfolio.foodexplorer.link'),
            url: 'https://github.com/jessicaranft/FoodExplorer',
          },
          {
            label: 'Demo',
            url: 'https://frontend-foodexplorer.netlify.app',
          },
        ],
        publishedOn: '07/2023',
      },
      {
        title: '<Conexão Britânica />',
        previewImageSrc: previewConexaoBritanica,
        description: [
          t('portfolio.conexaobritanica.p1'),
          t('portfolio.conexaobritanica.p2'),
          t('portfolio.conexaobritanica.p3'),
          t('portfolio.conexaobritanica.p4'),
        ],
        stacks: ['Blog', 'WordPress', 'Elementor', 'CSS', 'Figma', 'SEO'],
        links: [
          {
            label: t('portfolio.conexaobritanica.link'),
            url: 'https://conexaobritanica.com',
          },
        ],
        publishedOn: '07/2023',
      },
      {
        title: '<Portfolio />',
        previewImageSrc: previewPortfolio,
        description: [
          t('portfolio.portfolio.p1'),
          t('portfolio.portfolio.p2'),
          t('portfolio.portfolio.p3'),
        ],
        stacks: [
          'ReactJS',
          'Styled Components',
          'React Router DOM',
          'CSS in JS',
          'Figma',
          'JSON',
        ],
        links: [
          {
            label: t('portfolio.portfolio.link'),
            url: 'https://github.com/jessicaranft/portfolio',
          },
        ],
        publishedOn: '06/2023',
      },
      {
        title: '<RocketMovies />',
        previewImageSrc: previewRocketmovies,
        description: [
          t('portfolio.rocketmovies.p1'),
          t('portfolio.rocketmovies.p2'),
          t('portfolio.rocketmovies.p3'),
        ],
        stacks: [
          'ReactJS',
          'Styled Components',
          'React Router DOM',
          'NodeJS',
          'Express',
          'HTML5',
          'CSS in JS',
          'Figma',
          'JSON',
          'API Restful',
          'SQL',
        ],
        links: [
          {
            label: 'Frontend GitHub',
            url: 'https://github.com/jessicaranft/rocketmovies-frontend',
          },
          {
            label: 'Backend GitHub',
            url: 'https://github.com/jessicaranft/rocketmovies-backend',
          },
          {
            label: 'Demo',
            url: 'https://rocketmovies-frontend.netlify.app',
          },
        ],
        publishedOn: '04/2023',
      },
      {
        title: '<EnglishTravel />',
        previewImageSrc: previewEnglishTravel,
        description: [
          t('portfolio.englishtravel.p1'),
          t('portfolio.englishtravel.p2'),
          t('portfolio.englishtravel.p3'),
          t('portfolio.englishtravel.p4'),
        ],
        stacks: [
          'Landing Page',
          'WordPress',
          'Elementor',
          'CSS',
          'Figma',
          'Photoshop',
        ],
        links: [
          {
            label: t('portfolio.englishtravel.link'),
            url: 'https://conexaobritanica.com/english-travel',
          },
        ],
        publishedOn: '03/2023',
      },
      {
        title: '<FocusTimer 3.0 />',
        previewImageSrc: previewFocusTimer,
        description: [
          t('portfolio.focustimer.p1'),
          t('portfolio.focustimer.p2'),
          t('portfolio.focustimer.p3'),
          t('portfolio.focustimer.p4'),
        ],
        stacks: ['HTML', 'CSS', 'JavaScript (vanilla)', 'ES6 Modules'],
        links: [
          {
            label: t('portfolio.focustimer.link'),
            url: 'https://github.com/jessicaranft/explorer-Stage05-FocusTimer-DarkMode',
          },
          {
            label: 'Demo',
            url: 'https://jessicaranft.github.io/explorer-Stage05-FocusTimer-DarkMode/',
          },
        ],
        publishedOn: '01/2023',
      },
      {
        title: '<PersonalEnglish />',
        previewImageSrc: previewPersonalEnglish,
        description: [
          t('portfolio.personalenglish.p1'),
          t('portfolio.personalenglish.p2'),
          t('portfolio.personalenglish.p3'),
        ],
        stacks: ['Landing Page', 'WordPress', 'Elementor', 'CSS', 'Photoshop'],
        links: [
          {
            label: t('portfolio.personalenglish.link'),
            url: 'https://conexaobritanica.com/personal-english',
          },
        ],
        publishedOn: '2022',
      },
    ]
  }

  const portfolioData = getPortfolioData()

  return portfolioData
}
