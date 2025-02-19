import React from 'react'
import Navbar from './Navbar'
import SixCarts from './SixCarts'
import Footer from './Footer'
import ThreeCarts from './ThreeCarts'

const Blog = () => {
  return (
    <div>
        <Navbar />
        <main className='bg-gray-100 px-[20px] md:px-[50px] pb-[80px]'>
            <section className='md:pt-[70px] pt-[40px] md:mb-[90px] mb-[50px] text-center'>
                <h3 className='md:text-2xl font-bold'>Hello React</h3>
                <h1 className='py-[20px] text-2xl md:text-5xl font-bold'>Find all our blogs from here</h1>
                <p className='md:w-[60%] w-full mx-auto'>Lorem ipsum dolor sit, ame . Laudantium, aspernatur modit consectetur adipisicing elit. Eos neque quod delectus. Laudantium, aspernatur modi?</p>
            </section>
            <SixCarts/>
            <div className='mt-[40px]'>
            <ThreeCarts />
            </div>
        </main>
        <Footer />
    </div>
  )
}

export default Blog