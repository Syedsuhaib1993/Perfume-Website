import React from 'react'
import { FaEnvelope, FaFacebookF, FaInstagram, FaMapMarkedAlt, FaPhone, FaTwitter } from 'react-icons/fa'

const Contact = () => {
  return (
    <section id='contact' className='min-h-screen scroll-mt-20 bg-pink-950 px-4 py-12 sm:px-6 lg:px-8'>
        <div className='max-w-7xl mx-auto'>
            <div className='text-center mb-16'>
                <h1 className='text-4xl font-serif font-bold text-white mb-4'>Contact Us</h1>
                <p className='text-lg text-gray-200 max-w-2xl mx-auto'>
                    Here is our detail that how you can connect with us
                </p>
            </div>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12'>

           
            <div className='bg-white p-8 rounded-lg shadow-xl border border-gray-100'>
                <h2 className='text-2xl font-serif font-semibold text-gray-900 mb-6'>
                    Send us a Message
                </h2>
                <form className='space-y-6'>
                    <div>
                        <label className='block text-sm font-medium text-gray-800 mb-1' >Your name</label>
                        <input type="text" 
                        className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2
                        focus:ring-gray-500 focus:border-transparent'
                        placeholder='Your Name'/>
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-800 mb-1' >Your Email</label>
                        <input type="email" 
                        className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2
                        focus:ring-gray-500 focus:border-transparent'
                        placeholder='Your@email.com'/>
                    </div>
                    <div>
                        <label className='block text-sm font-medium text-gray-800 mb-1' >Your Message</label>
                        <textarea type="text" 
                        className='w-full px-4 py-3 border border-gray-200 rounded-lg focus:ring-2
                        focus:ring-gray-500 focus:border-transparent'
                        placeholder='Tell us about your fragrance needs.....'/>
                    </div>
                    <button className='w-full bg-pink-700 hover:bg-pink-800 text-white py-3 px-6 rounded-lg
                    transition duration-300 font-medium shadow-md'>
                        Send Message
                    </button>
                </form>
            </div>
            <div className='space-y-8'>
                <div className='bg-white p-8 rounded-lg shadow-xl border border-gray-100'>
                <h2 className='text-2xl font-serif font-semibold text-gray-900 mb-6'>Contact Information</h2>
                <div className='space-y-6'>
                <div>
                    <div className='flex items-center'>
                        <div className='bg-pink-200 rounded-full p-3 mr-4'>
                            <FaPhone className='text-pink-900 text-lg'/>
                        </div>
                        <div>
                            <h3 className='text-lg font-medium text-gray-900'>Phone</h3>
                        <p className='text-gray-800'>+92 320 1234567</p>
                        <p className='text-gray-600 text-sm'>Mon-Fri : 9am-9pm</p>
                        </div>
                    </div>
                </div>    
                <div>
                    <div className='flex items-center'>
                        <div className='bg-pink-200 rounded-full p-3 mr-4'>
                            <FaEnvelope className='text-pink-900 text-lg'/>
                        </div>
                        <div>
                            <h3 className='text-lg font-medium text-gray-900'>Email</h3>
                        <p className='text-gray-800'>Contact@perfume.com</p>
                        <p className='text-gray-600 text-sm'>Support@perfume.com</p>
                        </div>
                    </div>
                </div>    
                <div>
                    <div className='flex items-center'>
                        <div className='bg-pink-200 rounded-full p-3 mr-4'>
                            <FaMapMarkedAlt className='text-pink-900 text-lg'/>
                        </div>
                        <div>
                            <h3 className='text-lg font-medium text-gray-900'>Our Boutique</h3>
                        <p className='text-gray-800'>123 Perfume Road</p>
                        <p className='text-gray-600 text-sm'>Paris, France 54321</p>
                        </div>
                    </div>
                </div>    
                </div>
                
                
                <div className='mt-24'>
                    <h3 className='text-lg font-medium text-gray-900 mb-4'>Follow Us</h3>
                    <div className='flex space-x-4'>
                        <a href="#" className='bg-pink-200 hover:bg-gray-200 p-3 rounded-full transition duration-300'>
                            <FaInstagram className='text-pink-950'/>
                        </a>
                        <a href="#" className='bg-pink-200 hover:bg-gray-200 p-3 rounded-full transition duration-300'>
                            <FaFacebookF className='text-pink-950'/>
                        </a>
                        <a href="#" className='bg-pink-200 hover:bg-gray-200 p-3 rounded-full transition duration-300'>
                            <FaTwitter className='text-pink-950'/>
                        </a>
                    </div>
                </div>
                </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default Contact
