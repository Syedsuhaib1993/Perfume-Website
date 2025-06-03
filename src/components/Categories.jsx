import React from 'react'
import product8 from '../assets/product8.png'
import product9 from '../assets/product9.png'
import product10 from '../assets/product10.png'
import product11 from '../assets/product11.png'
import product12 from '../assets/product12.png'
import product13 from '../assets/product13.png'
const Categories = () => {
    const categories =[
        {img: product8, alt:"Men's Perfume",title:"Men's collection",descripation:"This is Men's Perfum collection"},
        {img: product9, alt:"Women's Perfume",title:"Women's collection",descripation:"This is Women's Perfum collection"},
        {img: product10, alt:"Luxury Perfume",title:"Luxury collection",descripation:"This is Luxury Perfum collection"},
        {img: product11, alt:"Unisex Perfume",title:"Unisex collection",descripation:"This is Unisex Perfum collection"},
        {img: product12, alt:"Arabic Perfume",title:"Arabic collection",descripation:"This is Arabic Perfum collection"},
        {img: product13, alt:"Gifts Perfume",title:"Gifts collection",descripation:"This is Gifts Perfum collection"},
    ]
  return (
    <section id='categories' className='py-16 scroll-mt-20 bg-white'>
        <div className='container text-center mx-auto px-4'>
            <h2 className='text-3xl font-bold  text-amber-950 mb-3'>
                Explore Our Fragrance Collection
            </h2>
            <p className='text-lg text-gray-800 max-w-2xl mx-auto'>
                This is Our Preimum Perfume Collection
            </p>
        </div>
        <div className='grid grid-cols-1 sm:grid-cols-3 gap-6 px-2'>
            {categories.map((category,index)=>(
                <div key={index} className='relative group overflow-hidden rounded-lg shadow-md hover:shadow-lg
                transition-shadow duration-300 '>
                    <div className='h-64 overflow-hidden'>
                        <img src={category.img} alt={category.alt} 
                    className='w-full h-full object-cover group-hover:scale-105 transition-transform duration-500'/>
                    </div>
                    <div className='absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent'>
                        <div className='absolute bottom-0 left-0 p-6'>
                            <h3 className='text-xl font-semibold text-white'>{category.title}</h3>
                            <p className='text-gray-200 mt-1'>{category.descripation}</p>
                        </div>
                    </div>
                </div>
                
            ))}
        </div>
    </section>
  )
}

export default Categories

