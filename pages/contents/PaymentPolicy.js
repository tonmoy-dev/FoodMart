import React from 'react';
import Image from "next/image";

const PaymentPolicy = () => {
    return (
        <div className='mt-6'>
             <h1 className='text-center text-black text-4xl font-bold'>Payment  Policy</h1> 

            <section className="text-gray-600 body-font">
  <div className="container px-5 py-24 mx-auto flex flex-wrap">
    <div className="flex flex-wrap w-full">
      <div className="lg:w-2/5 md:w-1/2 md:pr-10 md:py-6">
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-green-400 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-semibold title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 1(Options)</h2>
            <p className="leading-relaxed">One of the first policies to consider is what sort of payment accept. One option is an e-commerce gateway like PayPal, Google Checkout or Amazon Payments.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-green-400 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-semibold title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2(Policies)</h2>
            <p className="leading-relaxed">A good policy states not only what forms of payment you take, but also identifies the circumstances under which your customers receive a refund, and what sort of liability each of you assumes.</p>
          </div>
        </div>

        {/* <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-green-400 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yelllow-400 inline-flex items-center justify-center text-white relative z-10">
         2
            <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
            </svg> 
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-semibold title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 2</h2>
            <p className="leading-relaxed">Vice migas literally kitsch +1 pok pok. Truffaut hot chicken slow-carb health goth, vape typewriter.</p>
          </div>
        </div> */}

        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-green-400 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor"className="w-5 h-5" viewBox="0 0 24 24">
              <circle cx="12" cy="5" r="3"></circle>
              <path d="M12 22V8M5 12H2a10 10 0 0020 0h-3"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-semibold title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 3(Authentication Procedures)</h2>
            <p className="leading-relaxed">As ecommerce grows, so do attempts to exploit the system, whether by phishing for information or by attacking the software.</p>
          </div>
        </div>
        <div className="flex relative pb-12">
          <div className="h-full w-10 absolute inset-0 flex items-center justify-center">
            <div className="h-full w-1 bg-green-400 pointer-events-none"></div>
          </div>
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M20 21v-2a4 4 0 00-4-4H8a4 4 0 00-4 4v2"></path>
              <circle cx="12" cy="7" r="4"></circle>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-semibold title-font text-sm text-gray-900 mb-1 tracking-wider">STEP 4(Security Procedures)</h2>
            <p className="leading-relaxed">To give your customers good security, build protection into your website as you design it.</p>
          </div>
        </div>
        <div className="flex relative">
          <div className="flex-shrink-0 w-10 h-10 rounded-full bg-yellow-400 inline-flex items-center justify-center text-white relative z-10">
            <svg fill="none" stroke="currentColor" stroke-wid className="w-5 h-5" viewBox="0 0 24 24">
              <path d="M22 11.08V12a10 10 0 11-5.93-9.14"></path>
              <path d="M22 4L12 14.01l-3-3"></path>
            </svg>
          </div>
          <div className="flex-grow pl-4">
            <h2 className="font-semibold title-font text-sm text-gray-900 mb-1 tracking-wider">FINISH(Fraudulent Purchasing)</h2>
            <p className="leading-relaxed">Another concern is that you will be given a fraudulent credit card number when a customer makes a purchase.</p>
          </div>
        </div>
      </div>

      <Image
                  className=""
                  src="https://i.ibb.co/7g3NB14/payment-policy-banner.png"
                  alt="Picture of the author"
                  width={650}
                  height={200}
                  priority
                />
      {/* <img class="lg:w-3/5 md:w-1/2 object-cover object-center rounded-lg md:mt-0 mt-12" src="https://dummyimage.com/1200x500" alt="step"> */}
    </div>
  </div>
</section>

            
 

        </div>
    );
};

export default PaymentPolicy;