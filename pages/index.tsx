import type { NextPage } from 'next'
import Background from '../components/Background'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar/>
      <Welcome/>
      <Background/>
    </div>
  )
}

export default Home
