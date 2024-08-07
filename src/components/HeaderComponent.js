import React from 'react'
import { useNavigate } from 'react-router-dom';

 const HeaderComponent = () => {
//     const [open, setOpen] = useState(false)
//     <a onClick={() => setOpen(true)}>Traffic Control System</a>
//     {open && <HomePageComponent />}
// }

    const navigate = useNavigate();

    const handleNavigation = () => {
        navigate('/');
    };

  return (
    <div>
        <header>
            <nav className='navbar navbar-expand-md navbar-dark bg-dark'>
                <div>
                    <button onClick={handleNavigation} className='navbar-left'>
                        Traffic Control System
                    </button>
                    
                </div>
            </nav>
        </header>
    </div>
  )
 }

export default HeaderComponent