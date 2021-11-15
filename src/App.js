import './App.css';
import React, {useEffect} from "react";
import {useDispatch, useSelector} from "react-redux";
import {
    fetchProducts,
    addToWishList,
    removeFromWishList,
    addToCart,
    removeFromCart
} from './redux';

const Header = () => {
    const {wishList} = useSelector(({products}) => products);
    const {cart} = useSelector(({products}) => products);

    const wishListTottalPrice = wishList.reduce((acc, el) => {
        return acc += el.price
    }, 0)
    const cartTottalPrice = cart.reduce((acc, el) => {
        return acc += el.price
    }, 0)

    return (
        <>
            <header style={{
                display: 'flex',
                justifyContent: 'space-between',
                alignItems: 'center'
            }}>
                <h3>Our nice shop!</h3>

                <div style={{
                    display: 'flex',
                    alignItems: 'center'
                }}>
                    <h3 style={{marginRight: '20px'}}>Cart {cart.length}</h3>
                    <h3>Wishlist {wishList.length}</h3>
                </div>

            </header>
            <hr/>
        </>
    )
}

const isInWishList = (wishList, id) => !!wishList.find(el => el.id === id);
const isInCart = (cart, id) => !!cart.find(el => el.id === id);

const Products = () => {
    const {wishList} = useSelector(({products}) => {
        return products
    });
    const {cart} = useSelector(({products}) => products);

    const {products, isProductsLoADING} = useSelector(({products}) => products);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts());
    }, [])

    if (isProductsLoADING) {
        return <div>Loading!!!</div>
    }

    return (
        <div>
            {products.map(product => (
                <div key={product.id} style={{
                    margin: '20px auto'
                }}>

                    <h4>{product.title}</h4>
                    <h4>Price: {product.price}$</h4>
                    <img style={{width: '200px'}} src={product.image} alt="img"/>
                    <p>{product.description}</p>
                    <button onClick={() => {
                        isInCart(cart, product.id)
                            ? dispatch(removeFromCart(product.id))
                            : dispatch(addToCart(product.id))
                    }}>{isInCart(cart, product.id) ? 'remove from cart' : 'add to cart'}
                    </button>

                    <button onClick={() => {
                        isInWishList(wishList, product.id)
                            ? dispatch(removeFromWishList(product.id))
                            : dispatch(addToWishList(product.id))
                    }}>{isInWishList(wishList, product.id) ? 'remove from wish list' : 'add to wish list'}
                    </button>
                </div>
            ))}
        </div>
    )
}

function App() {

    return (
        <div className="App">
            <Header/>
            <Products/>
        </div>
    );
}

export default App;