import React from 'react'
import home from './assets/home.png'
import cart from './assets/cart.png'
import wallet from './assets/wallet.png'
import order from './assets/order.png'
import pic from './assets/pic.png'
export default function Navbar() {
    return (
        <div className='w-[390px] h-[80px] flex justify-center -mt-3 border-x-2 bg-white'>
            <div className='w-[352px] h-[53px] flex justify-between items-center'>
                <div className='flex justify-center items-center flex-col'>
                    <div><img src={home} alt='home' /></div>
                    <div className='text-[12px] text-[#FC6C85]'>Home</div>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <div><img src={cart} alt='home' /></div>
                    <div className='text-[12px] text-[#C2C2C2]'>Cart</div>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <div><img src={order} alt='home' /></div>
                    <div className='text-[12px] text-[#C2C2C2]'>Order</div>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <div><img src={wallet} alt='home' /></div>
                    <div className='text-[12px] text-[#C2C2C2]'>Wallet</div>
                </div>
                <div className='flex justify-center items-center flex-col'>
                    <div><img src={pic} alt='home' /></div>
                    <div className='text-[12px] text-[#C2C2C2]'>Profile</div>
                </div>
            </div>
        </div>
    )
}
