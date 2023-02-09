import './NavBar.css'


const NavBar = () => {

   
const path = window.location.pathname


  return (
   <nav className='nav'>
    <a href='/' className='site-title'>
        CultureNet
    </a>
    <ul>
        <li>
            <a href='/books'>Books</a>
        </li>

        <li>
            <a href='/movies'>Movies</a>
        </li>
        <li>
            <a href='/music'>Music</a>
        </li>


        
    </ul>
   </nav> 
  )
}

export default NavBar