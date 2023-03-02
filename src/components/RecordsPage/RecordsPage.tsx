type Props = {};

export const RecordsPage: React.FC<Props> = (props):JSX.Element => {
  return (
    <>
      <Outlet />
      <h1></h1>
      <NavMenu />
    </>
  )
}
