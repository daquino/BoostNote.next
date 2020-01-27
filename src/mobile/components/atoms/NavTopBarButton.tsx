import React from 'react'
import TopBarButton from './TopBarButton'
import Icon from './Icon'
import { mdiMenu } from '@mdi/js'
import { useGeneralStatus } from '../../lib/generalStatus'

const NavTopBarButton = () => {
  const { toggleNav } = useGeneralStatus()
  return (
    <TopBarButton onClick={toggleNav}>
      <Icon path={mdiMenu} />
    </TopBarButton>
  )
}

export default NavTopBarButton
