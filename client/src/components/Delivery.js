import React from 'react'

const Delivery = () => {
  return (
    <div className='w-full bg-white py-16 px-4'>
        <h3 className='text-orange-500 font-bold text-2xl text-center'> Quick Delivery App</h3>
        <div className='w-[1240px] mx-auto grid md:grid-cols-2'>
            <img className="w-[550px] mx-auto my-4" src="https://www.shopurfood.com/images/fast_food/fast-food-ordering-app.webp" alt="" />
            <div className='flex flex-col justify-center'>
                <p className='text-[#00df9a] font-bold'>Get The App</p>
                <h1 className='md:text-4xl sm:text-2xl font-bold py-2'>Limitless Convenience on-demand</h1>
                <p className='font-medium'>
                When it comes to Fast food delivery, Timing is the essential factor! Delivery zone management is a challenging and time-consuming task. Our software helps you to set up delivery zones and track on maps conveniently. All thanks to Shopurfood's fast food online ordering system.When it comes to Fast food delivery, Timing is the essential factor! Delivery zone management is a challenging and time-consuming task. Our software helps you to set up delivery zones and track on maps conveniently. All thanks to Shopurfood's fast food online ordering system.
                </p>
                <button className='bg-black text-[#00df9a] w-[200px] rounded-md font-medium my-6 mx-auto md:mx-0 py-3'>Get Started</button>
            </div>
        </div>

    </div>
  )
}

export default Delivery
