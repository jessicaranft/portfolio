import { Outlet } from 'react-router-dom'
import { Header } from '../../components/Header'
import { Footer } from '../../components/Footer'
import { DefaultLayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <DefaultLayoutContainer>
      <Header />

      <div className="content-wrapper">
        <Outlet />
      </div>

      <Footer />
    </DefaultLayoutContainer>
  )
}
