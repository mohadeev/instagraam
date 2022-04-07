import '../styles/globals.css'
import MainContent from '../components/layout'

function MyApp({ Component, pageProps }) {

  return (
    <MainContent>
      <Component {...pageProps} />
    </MainContent>
  ); 
}

export default MyApp
