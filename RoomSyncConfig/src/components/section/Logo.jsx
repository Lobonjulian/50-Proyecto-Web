import SvgLogo from '/logo.svg'

const Logo = () => {
  return (
    <>
      <a href='/'>
        <img src={SvgLogo} alt='Logo' width='80px' />
      </a>
    </>
  )
}

export default Logo
