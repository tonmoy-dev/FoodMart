import Image from 'next/image';
import React from 'react';
import food4 from '../../../assets/aboutImg/foo7.jpg';
import food2 from '../../../assets/aboutImg/food.jpg';
import food1 from '../../../assets/aboutImg/food1.jpg';
import food3 from '../../../assets/aboutImg/food3.jpg';
import food5 from '../../../assets/aboutImg/food4.jpg';
import food6 from '../../../assets/aboutImg/food8.jpg';
import food7 from '../../../assets/aboutImg/food9.jpg';

const Gellary = () => {
    return (
        <div>
             <div>
            <div>
             <h1 className='text-black  text-4xl font-bold text-center'>Our Best Gellary</h1>
             </div>
        </div>

            {/* <!-- This example requires Tailwind CSS v2.0+ --> */}
<div className="relative bg-white overflow-hidden">
  <div className="pt-16 pb-80 sm:pt-24 sm:pb-40 lg:pt-40 lg:pb-48">
    <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 sm:static">
      <div className="sm:max-w-lg">
          <h3 className='text-green-600 text-2xl'>Our performance</h3>
        <h1 className="text-4xl font font-extrabold tracking-tight text-gray-900 sm:text-6xl">Your Partner for e-commerce grocery solution</h1>
        <p className="mt-4 text-xl text-gray-500">Ed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto

Pitatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia..</p>
      </div>
      <div>
        <div className="mt-10">
          {/* <!-- Decorative image grid --> */}
          <div aria-hidden="true" className="pointer-events-none lg:absolute lg:inset-y-0 lg:max-w-7xl lg:mx-auto lg:w-full">
            <div className="absolute transform sm:left-1/2 sm:top-0 sm:translate-x-8 lg:left-1/2 lg:top-1/2 lg:-translate-y-1/2 lg:translate-x-8">
              <div className="flex items-center space-x-6 lg:space-x-8">
                <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="w-44 h-64 rounded-lg overflow-hidden sm:opacity-0 lg:opacity-100">
                  <Image
            src={food1}
        alt="Picture of the author"
        width={1000}
        height={800}
        priority
      /> 
                    {/* <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-01.jpg" alt="" className="w-full h-full object-center object-cover"> */}
                  </div>
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                  <Image
            src={food2}
        alt="Picture of the author"
        width={800}
        height={600}
        priority
      /> 
                    {/* <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-02.jpg" alt="" className="w-full h-full object-center object-cover"> */}
                  </div>
                </div>
                <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                  <Image
            src={food3}
        alt="Picture of the author"
        width={800}
        height={600}
        priority
      /> 
                    {/* <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-03.jpg" alt="" className="w-full h-full object-center object-cover"> */}
                  </div>
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                  <Image
            src={food4}
        alt="Picture of the author"
        width={800}
        height={600}
        priority
      /> 
                    {/* <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-04.jpg" alt="" className="w-full h-full object-center object-cover"> */}
                  </div>
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                  <Image
            src={food5}
        alt="Picture of the author"
        width={800}
        height={600}
        priority
      /> 
                    {/* <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-05.jpg" alt="" className="w-full h-full object-center object-cover"> */}
                  </div>
                </div>
                <div className="flex-shrink-0 grid grid-cols-1 gap-y-6 lg:gap-y-8">
                  <div className="w-44 h-64 rounded-lg overflow-hidden">
                  <Image
            src={food6}
        alt="Picture of the author"
        width={800}
        height={600}
        priority
      /> 
                    {/* <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-06.jpg" alt="" className="w-full h-full object-center object-cover"> */}
                  </div>
                  <div  className="w-44 h-64 rounded-lg overflow-hidden">
                  <Image
            src={food7}
        alt="Picture of the author"
        width={800}
        height={600}
        priority
      /> 
                    {/* <img src="https://tailwindui.com/img/ecommerce-images/home-page-03-hero-image-tile-07.jpg" alt="" className="w-full h-full object-center object-cover"> */}
                  </div>
                </div>
              </div>
            </div>
          </div>

          <a href="#" className="inline-block text-center bg-green-600 border border-transparent rounded-md py-3 px-8 font-medium text-white hover:bg-indigo-700">Shop Collection</a>
        </div>
      </div>
    </div>
  </div>
</div>
        </div>
    );
};

export default Gellary;