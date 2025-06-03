import React from 'react'
import { FiClock, FiGift, FiPercent } from 'react-icons/fi'

const Offers = () => {
    const currentOffers = [
        {
            id:1,
            title:'Hot Summer Sale',
            description:'Up to 30% on our Summer Perfume Collection',
            discount:'30%',
            endDate:'2025-08-20',
            code:'SUMMER30',
            bgcolor:'bg-amber-200',
            textcolor:'text-amber-700'
        },
        {
            id:2,
            title:'Free Perfume Sale',
            description:'Get a free Perfume when you buy two Perfumes',
            discount:'Gift',
            endDate:'2025-10-02',
            code:'FREEPERFUME',
            bgcolor:'bg-purple-200',
            textcolor:'text-purple-700'
        },
        {
            id:3,
            title:'New Launch Discount',
            description:'20% Off on our new brands',
            discount:'20%',
            endDate:'2025-12-30',
            code:'NEW30',
            bgcolor:'bg-pink-200',
            textcolor:'text-pink-700'
        },
    ]
  return (
    <section id='offers' className='container scroll-mt-20 mx-auto px-4 py-12'>
        <h2 className='text-3xl font-bold text-center mb-2 text-amber-900'>Special Offers</h2>
        <p className='text-center text-gray-600 mb-12'>Take Advantage of these limmited-time offers</p>
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
            {
                currentOffers.map((offer)=>(
                    <div key={offer.id}
                    className={`${offer.bgcolor} rounded-xl shadow-lg overflow-hidden transition-transform duration-300 
                    hover:scale-105`}>
                        <div className='p-6'>
                            <div className='flex justify-between items-start mb-4'>
                                <h3 className={`${offer.textcolor} text-xl font-semibold`}>{offer.title}</h3>
                                {offer.discount.includes('%') ?(
                                    <span className='bg-white rounded-full p-3 shadow-md'>
                                        <FiPercent className={`${offer.textcolor}`}/>
                                    </span>
                                ):(
                                    <span className='bg-white rounded-full p-3 shadow-md'>
                                        <FiGift className={`${offer.textcolor}`}/>
                                    </span>
                                )}
                            </div>
                           <p className='text-gray-700 mb-6'>{offer.description}</p>
                           <div className='flex items-center text-gray-600 mb-6'>
                                <FiClock className='mr-2'/>
                                <span>End on {offer.endDate}</span>                               
                           </div>
                           <div className='bg-white rounded-lg p-4 mb-4'>
                                 <p className='bg-white text-center rounded-lg p-4 mb-4'>Use Code</p>
                                <p className='font-mono text-center font-bold text-lg'>{offer.code}</p>
                           </div>
                           <button className={`w-full py-3 rounded-lg ${offer.textcolor} font-semibold border
                            ${offer.textcolor.replace('text','border')} hover:bg-white`}>
                            Claim Offer
                                </button>
                        </div>
                    </div>
                ))
            }
        </div>
    </section>
  );
};

export default Offers
