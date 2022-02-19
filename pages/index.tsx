import type { NextPage } from 'next'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar/>
      <Welcome/>
    </div>
  )
}

export default Home
