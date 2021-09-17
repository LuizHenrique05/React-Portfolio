import React, { useState } from 'react'

import Main from './components/layout/Main'
import Sidebar from './components/layout/Sidebar'
import Content from './components/layout/Content'
import SideBarOpenButton from './components/layout/SideBarOpenButton'

export default () => {
  const [open, setOpen] = useState('-100%')

  function sidebarToggle() {
    return open == '-100%' ? setOpen('0px') : setOpen('-100%')
  }

  return (
    <Main >
      <Sidebar open={open} />
      <SideBarOpenButton onClicar={sidebarToggle} />
      <Content />
    </Main>
  )
}
  