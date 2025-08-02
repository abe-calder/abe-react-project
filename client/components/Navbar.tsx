import { Link } from 'react-router'


function Navbar() {
 return (
    <div role="navigation" className='topnav'>
      <h2 className='nav-title'>Nav</h2>
        <Link to={'/'}>Home</Link>
          <Link to={'/troops/common'} >common-troops</Link>
          <Link to={'/troops/rare'}>rare-troops</Link>
    </div>
  )
}

export default Navbar