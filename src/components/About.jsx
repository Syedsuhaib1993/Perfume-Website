import React from 'react'
import product from '../assets/product.png'
const About = () => {
  return (
    <section id='about' className='min-h-screen scroll-mt-20 bg-gradient-to-b from-gray-50 to-white py-12
    px-4 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
            <div className='flex flex-col lg:flex-row gap-12 mb-20'>
                <div className='lg:w-1/2'>
                    <div className='relative rounded-2xl overflow-hidden h-96 shadow-xl'>
                        <img src={product} alt="Luxury Perfumes" className='w-full h-full object-cover' />
                        <div className='absolute inset-0 bg-gradient-to-t from-black to-transparent opacity-50'></div>
                        <div className='absolute bottom-0 left-0 p-6 text-white'>
                            <h3 className='text-2xl font-bold'>Since 2000</h3>
                            <p className='mt-w'>We offer Best Perfumes there are</p>
                        </div>
                    </div>
                </div>
                <div className='lg:w-1/2 flex flex-col justify-center'>
                    <h2 className='text-4xl font-bold text-amber-900 mb-6'>
                        About us
                    </h2>
                    <p className='text-lg text-gray-600 mb-4'>
                        Our Perfumes are fragrant liquids made from essential oils, aroma compounds, 
                        and solvents, used to give a pleasant and lasting scent to the body,
                         clothing, or surroundings.
                    </p>
                    <div className='grid grid-cols-2 gap-4 mt-4'>
                    <div className='bg-white p-4 rounded-lg shadow-sm border border-gray-100'>
                        <h4 className='font-semibold text-pink-600'>500+</h4>
                        <p className='text-gray-600'>Unique Fragrance</p>
                    </div>
                    <div className='bg-white p-4 rounded-lg shadow-sm border border-gray-100'>
                        <h4 className='font-semibold text-pink-600'>50+</h4>
                        <p className='text-gray-600'>World WorldWide</p>
                    </div>
                    <div className='bg-white p-4 rounded-lg shadow-sm border border-gray-100'>
                        <h4 className='font-semibold text-pink-600'>100%</h4>
                        <p className='text-gray-600'>Costumer satisfaction</p>
                    </div>
                    <div className='bg-white p-4 rounded-lg shadow-sm border border-gray-100'>
                        <h4 className='font-semibold text-pink-600'>24/7</h4>
                        <p className='text-gray-600'>Costumer Support</p>
                    </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default About
