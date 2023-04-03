import React, {useState} from 'react';
import './css/orderAside.scss';
import closeIcon from '../../assets/close-icon.svg';
import flechita from '../../assets/flechita.svg';






const OrderAside = ({showCart,setShowCart, cart, setCart, isLogged, setIsLogged, userData, setUserData}) => {
   
    const closeCart = () => {
        setShowCart(!showCart);
    }


    const sum = cart.reduce((acc, item) =>{
        return acc + item.price * item.quantity;
    }, 0);


    const handleRemove = (id) => {
        const newCart = cart.map((item) => {
            return item.id === id ? {...item, quantity: item.quantity - 1} : item;
        }
        );
        const newCart2 = newCart.filter((item) => item.quantity > 0);
        setCart(newCart2);
        //save to local storage
        localStorage.setItem('cart', JSON.stringify(newCart2));
        
    }




    
    return (
        <>
    {showCart  === false ? 

        <section className="product-detail">
            <div className="d-flex justify-content-between">
            <img className='arrow-icon' src={flechita} alt="arrow" onClick={closeCart}/>
            <p className="title fs-5">My order</p>
            </div>

                <div className="my-order-content">
                    <ul className = 'd-flex justify-content-around tag-list'>
                    <li>image</li>
                    <li>product</li>
                    <li>price</li>    
                    <li>quantity</li>

                    </ul>
                
                {cart && (
                <>
                <section className='order-list'>
                    {cart.map((item) => (

                        <div className="shopping-cart" key={item.id}>
                            <figure>
                            <img src={item.image} alt="bike"/>
                            </figure>
                            <p>{ `${item.title.slice(0, 10)}...`}</p>
                            <p>{ item.price}</p>
                            <p>{ item.quantity}</p>
                            <img className='close-icon' src={closeIcon}  alt="close" onClick={() => handleRemove(item.id)}/>
                        </div>
                        
                        ))}  
                </section>
                </>
                )}


                    <div className="order">
                        <p>
                        <span>Total</span>
                        </p>
                        <p>${Math.round(sum * 100) / 100} MXN</p>
                    </div>

                    <button className="primary-button">
                        Checkout
                    </button>
                </div>
        </section>
         : null}
        </>
       
    );
}

export default OrderAside;