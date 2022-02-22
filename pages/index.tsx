import type { NextPage } from 'next'
import Background from '../components/Background'
import Fill from '../components/Fill'
import Navbar from '../components/Navbar'
import Welcome from '../components/Welcome'

const Home: NextPage = () => {
  return (
    <div>
      <Navbar/>
      <Welcome/>
      <Background/>
      <Fill/>
    </div>
  )
}

export default Home
