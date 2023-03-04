import React from 'react'
import { Outlet } from 'react-router'
import { NavMenu } from '../NavMenu/NavMenu'
import { OptionMenu } from '../OptionMenu/OptionMenu'

type Props = {}

export const ProfileMenu: React.FC<Props> = (props):JSX.Element => {
  return (
    <>
    <Outlet />
    <OptionMenu/>
    <NavMenu />
    </>
  )
}