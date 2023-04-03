import React,{useState, useEffect} from 'react';
import Logo from '../../assets/logo.svg';
import ShoopingCart from '../../assets/fa_shopping-basket.svg';
import './css/navbar.scss';
import OrderAside from '../orderAside/orderAside.jsx';
import { onAuthStateChanged, signOut  } from "firebase/auth";
import { auth } from '../../firebase.js';
import { useNavigate } from 'react-router-dom';



const Navbar = ({ cart, setCart, isLogged, setIsLogged, userData, setUserData }) => {
    const [showCart, setShowCart] = useState(true);
    const [showMenu, setShowMenu] = useState(false);

    const handleCart = () => {
        setShowCart(!showCart);
    }

    const handleMenu = () => {
        setShowMenu(!showMenu);
    }

    let user = auth.currentUser;
   
    const navigate = useNavigate();
 
    const handleLogout = () => {               
        signOut(auth).then(() => {
        // Sign-out successful.
            navigate("/");
            console.log("Signed out successfully")
        }).catch((error) => {
        // An error happened.
        });
    }

    const handleLogin = () => {
        navigate("/login");
    }

    








    const prodcuctsLength = cart.reduce((acc, item) => acc + item.quantity, 0);


    return (

        <>

        <nav className='navbar-wrapper py-0 fixed-top container' >
            <div className='d-flex justify-content-between align-items-center '>
                <div className='logo-nav'>
                    <img src={Logo} alt="Logo" />
                </div>
                <div className='nav-right '>
                    <ul className='d-flex align-items-center justify-content-center'>
                       <li className='me-3'> {user ? user.email : "Guest"}</li>

                        <li className='nav-cart d-flex' onClick={handleCart}>
                            <img src={ShoopingCart} alt="Shopping Cart" />

                            <div>
                                <span className='cart-quantity'>{prodcuctsLength}</span>
                            </div>


                        </li>

                        <li className='avatar ms-3' onClick={handleMenu}>
                            <img src="https://www.gravatar.com/avatar/bfcb1d6a22d7098499771d3bcec5a8c4?d=identicon&f=y&s=128" alt="Avatar" />
                        </li>
                    </ul> 
                    { showMenu && (

           
                        <div className='menu' >  
                            { user ? <span onClick={handleLogout}>Logout</span> : <span onClick={handleLogin}>Login</span> }   
                        </div>
                        
                    )}
                    
                </div>
                
            </div>
            <OrderAside showCart={showCart} setShowCart={setShowCart} cart={cart} setCart={setCart} isLogged={isLogged} setIsLogged={setIsLogged} userData={userData} setUserData={setUserData}/>
         
        </nav> 
      


        
        </>
       
    );
}

export default Navbar;