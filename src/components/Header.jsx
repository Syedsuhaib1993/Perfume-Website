import React, { useEffect, useState } from 'react'
import { FiHeart, FiMenu, FiSearch, FiShoppingCart, FiUser } from 'react-icons/fi'

const Header = () => {
    const [scroll,setScroll] =useState(false)
    const [menuopen,setMenuopen] =useState(false)

    useEffect(()=>{
        const handleScroll = ()=>{
            setScroll(window.scrollY>10)
        };
        window.addEventListener('scroll',handleScroll);
        return()=> window.removeEventListener('scroll',handleScroll)
    },[])

    const navItems = [
        {id:1,name:'Home',link:'#home'},
        {id:2,name:'Products',link:'#products'},
        {id:3,name:'Categories',link:'#categories'},
        {id:4,name:'Offers',link:'#offers'},
        {id:5,name:'About',link:'#about'},
        {id:6,name:'Contact',link:'#contact'}
    ]
  return (
    <header className={`sticky top-0 z-50 transition-all duration-300`}>
        <div className={`w-full ${scroll ? 'bg-gray-100/95 backdrop-blur shadow-md py-2':'bg-gray-100 py-4'}`}>
            <div className='max-x-7xl mx-auto px-4 sm:px-6 lg:px-8'>
                <div className='flex flex-col md:flex-row items-center justify-between gap-3 md:gap-6'>
                    <div className='flex justify-between items-center w-full md:w-auto'>
                        <a href="/" className='text-2xl font-bold text-pink-600'>
                        ShopEasy
                        </a>
                        <button className='md:hidden text-gray-700 hover:text-indigo-600'
                        onClick={()=>setMenuopen(!menuopen)}
                        aria-label='Toggle mobile menu'>
                            <FiMenu size={24}/>
                        </button>
                    </div>
                    <div className='w-full md:flex-1 max-x-sm'>
                        <div className='relative w-full'>
                            <input type="text"
                            placeholder='Sreach' 
                            className='w-full px-3 py-2 text-xs border border-gray-300 rounded-full
                            focus:outline-none focus:right-2 focus:ring-indigo-500'/>
                            <button className='absolute right-2 top-1/2 -translate-y-1/2 text-gray-500 hover:text-indigo-600'
                            aria-label='Search Button'> 
                                <FiSearch size={16}/>
                            </button>
                        </div>
                    </div>
                    <div className='flex items-center justify-end space-x-4 w-full md:w-auto'>
                        <button className='relative p-2 text-gray-700 hover:text-pink-600'
                        aria-label='Wishlist'>
                            <FiHeart size={20}/>
                            <span className='absolute -top-1 -right-1 bg-pink-500 text-white text-xs
                            rounded-full h-5 w-5 flex items-center justify-center'>
                                3
                            </span>
                        </button>
                        <button className='relative p-2 text-gray-700 hover:text-pink-600'
                        aria-label='Cart'>
                            <FiShoppingCart size={20}/>
                            <span className='absolute -top-1 -right-1 bg-pink-500 text-white text-xs
                            rounded-full h-5 w-5 flex items-center justify-center'>
                                5
                            </span>
                        </button>
                        <button className='p-2 text-gray-700 hover:text-pink-600'
                        aria-label='User'>
                            <FiUser size={20}/>
                        </button>
                    </div>
                </div>
            </div>
        </div>
        <div className='bg-pink-950'>
            <div className='max-w-7xl mx-auto px-4 sm:pxx-6 lg:px-8'>
                <nav className='hidden md:flex justify-center py-3'>
                    <ul className='flex flex-wrap gap-x-6 text-sm font-medium text-white'>
                        {navItems.map((items)=>(
                            <li key={items.id}>
                            <a href={items.link} className='hover:text-pink-300 transition-colors'>
                                {items.name}
                            </a>
                            </li>
                        ))}
                    </ul>
                </nav>
                {menuopen && (
                    <div className='md:hidden mt-2 bg-white rounded-lg shadow-md p-4 space-y-3 text-amber-950 text-center'>
                        {navItems.map((items)=>(
                            <a key={items.id} 
                            href={items.link}
                           className='block hover:text-amber-600 text-sm font-medium'>
                            {items.name}
                            </a>

                        ))}
                    </div>
                )}
            </div>
        </div>
    </header>
  )
}

export default Header
