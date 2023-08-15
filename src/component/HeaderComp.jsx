import logo from '../assets/logo.svg'

function Header() {
  return (
    <div className="main-header d-flex justify-content-between align-items-center p-3 rounded-3">
        <div className="">
            <p className='pale-orange'>My balance</p>
            <h2 className='pale-orange'>$921.48</h2>
        </div>
        <div>
            <img src={logo} alt="logo" />
        </div>
    </div>
  )
}

export default Header