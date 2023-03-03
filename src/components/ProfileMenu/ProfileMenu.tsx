import React from 'react'
import { Outlet } from 'react-router'
import { NavMenu } from '../NavMenu/NavMenu'

type Props = {}

export const ProfileMenu: React.FC<Props> = (props):JSX.Element => {
  return (
    <>
    <Outlet />
    <div>ProfileMenu</div>
    <NavMenu />
    </>
  )
}