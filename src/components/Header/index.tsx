import React, { useState } from 'react'
import { Container } from './styles'
import { FaBars, FaChevronLeft} from 'react-icons/fa'
import Sidebar from '../Sidebar'



const Header = () => {
  const [sidebar, setSidebar] = useState(false)

  const showSiderbar = () => setSidebar(!sidebar)

 console.log(sidebar)
  return (
    <Container>
      <FaBars onClick={showSiderbar} />
      {sidebar &&
      <Sidebar active={setSidebar}/>}
    </Container>
  )
}

export default Header
