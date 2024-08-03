// import { MailIcon, PhoneIcon } from '@heroicons/react/outline'

// export default function Example() {
//   return (
//     <div className="relative bg-white">
//       <div className="absolute inset-0">
//         <div className="absolute inset-y-0 left-0 w-1/2 bg-gray-50" />
//       </div>
//       <div className="relative mx-auto ">
//         <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:col-span-2 lg:px-0 lg:py-24 xl:pr-12">
//           <div className="max-w-lg mx-auto">
//             <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Get in touch.</h2>
//             <p className="mt-3 text-lg leading-6 text-gray-500">
//               Contact us today to learn how we can help with your next move.
//             </p>
//             <dl className="mt-12 text-base text-gray-500">
//               <div>
//                 <dt className="sr-only">Postal address</dt>
//                 <dd>
//                   <p>73 W 44th St </p>
//                   <p>Bayonne, New Jersey 07002</p>
//                 </dd>
//               </div>
//               <div className="mt-6">
//                 <dt className="sr-only">Phone number</dt>
//                 <dd className="flex">
//                   <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
//                   <span className="ml-3">+1 (201) 275-8281</span>
//                 </dd>
//               </div>
//               <div className="mt-3">
//                 <dt className="sr-only">Email</dt>
//                 <dd className="flex">
//                   <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
//                   <span className="ml-3">daglinemoving@gmail.com</span>
//                 </dd>
//               </div>
//             </dl>
//           </div>
//         </div>

//       </div>
//     </div>
//   )
// }


import { MailIcon, PhoneIcon } from '@heroicons/react/outline';

export default function Example() {
  return (
    <div className=" relative bg-white w-full">
      <div className="absolute inset-0 w-full">
        <div className="absolute inset-y-0 left-0 w-full bg-gray-50" />
      </div>
      <div className=" relative mx-auto max-w-screen-lg">
        <div className="bg-gray-50 py-16 px-4 sm:px-6 lg:px-8 lg:py-24 xl:pr-12">
          <div className="mt-8 max-w-lg mx-auto">
            <h2 className="text-2xl font-extrabold tracking-tight text-gray-900 sm:text-3xl">Get in touch</h2>
            <p className="mt-3 text-lg leading-6 text-gray-500">
              Contact us today to learn how we can help with your next move.
            </p>
            <dl className="mt-12 text-base text-gray-700">
              <div className="mt-6">
                <dt className="sr-only">Postal address</dt>
                <dd className="flex items-start">
                  <div className="flex-shrink-0 mr-4">
                    <svg className="h-6 w-6 text-gray-400" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3v18h18V3H3zm7 7h2V6h2v4h2v2h-2v2h-2v-2H8v-2h2V7z"/>
                    </svg>
                  </div>
                  <div>
                    <p>73 W 44th St</p>
                    <p>Bayonne, New Jersey 07002</p>
                  </div>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Phone number</dt>
                <dd className="flex items-center">
                  <PhoneIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3 text-lg font-semibold text-gray-900">+1 (201) 275-8281</span>
                </dd>
              </div>
              <div className="mt-6">
                <dt className="sr-only">Email</dt>
                <dd className="flex items-center">
                  <MailIcon className="flex-shrink-0 h-6 w-6 text-gray-400" aria-hidden="true" />
                  <span className="ml-3 text-lg font-semibold text-gray-900">daglinemoving@gmail.com</span>
                </dd>
              </div>
            </dl>
          </div>
        </div>
    
      </div>
      <div className='mt-10'>
   push
   </div>
   
    </div>

  );
}



