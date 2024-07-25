// import form from '@tailwindcss/forms'

// export default function ContactForm() {
//   return (
//     <div className="relative bg-white">
//       <div className="lg:absolute lg:inset-0">
//         <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
//           <img
//             className="h-56 w-full object-cover lg:absolute lg:h-full"
//             src="https://images.unsplash.com/photo-1520038410233-7141be7e6f97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1653&q=80"
//             alt=""
//           />
//         </div>
//       </div>
//       <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
//         <div className="lg:pr-8">
//           <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
//             <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">Let us take the stress out of your next move.</h2>
//             <p className="mt-4 text-lg text-gray-500 sm:mt-3">
//               We’d love to hear from you! Give us a call, or send us a message using the form below.
//             </p>
//             <form action="#" method="POST" className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
//               <div>
//                 <label htmlFor="first_name" className="block text-sm font-medium text-gray-700">
//                   First name
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     type="text"
//                     name="first_name"
//                     id="first_name"
//                     autoComplete="given-name"
//                     className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
//                   />
//                 </div>
//               </div>
//               <div>
//                 <label htmlFor="last_name" className="block text-sm font-medium text-gray-700">
//                   Last name
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     type="text"
//                     name="last_name"
//                     id="last_name"
//                     autoComplete="family-name"
//                     className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
//                   />
//                 </div>
//               </div>

//               <div className="sm:col-span-2">
//                 <label htmlFor="email" className="block text-sm font-medium text-gray-700">
//                   Email
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     id="email"
//                     name="email"
//                     type="email"
//                     autoComplete="email"
//                     className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
//                   />
//                 </div>
//               </div>

//               <div className="sm:col-span-2">
//                 <label htmlFor="company" className="block text-sm font-medium text-gray-700">
//                   Company
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     type="text"
//                     name="company"
//                     id="company"
//                     autoComplete="organization"
//                     className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
//                   />
//                 </div>
//               </div>

//               <div className="sm:col-span-2">
//                 <div className="flex justify-between">
//                   <label htmlFor="phone" className="block text-sm font-medium text-gray-700">
//                     Phone
//                   </label>
//                   <span id="phone_description" className="text-sm text-gray-500">
//                     Optional
//                   </span>
//                 </div>
//                 <div className="mt-1">
//                   <input
//                     type="text"
//                     name="phone"
//                     id="phone"
//                     autoComplete="tel"
//                     aria-describedby="phone_description"
//                     className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
//                   />
//                 </div>
//               </div>

//               <div className="sm:col-span-2">
//                 <div className="flex justify-between">
//                   <label htmlFor="how_can_we_help" className="block text-sm font-medium text-gray-700">
//                     How can we help you?
//                   </label>
//                   <span id="how_can_we_help_description" className="text-sm text-gray-500">
//                     Max. 500 characters
//                   </span>
//                 </div>
//                 <div className="mt-1">
//                   <textarea
//                     id="how_can_we_help"
//                     name="how_can_we_help"
//                     aria-describedby="how_can_we_help_description"
//                     rows={4}
//                     className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
//                     defaultValue={''}
//                   />
//                 </div>
//               </div>

//               <fieldset className="sm:col-span-2">
//                 <legend className="block text-sm font-medium text-gray-700">Size of your home</legend>
//                 <div className="mt-4 grid grid-cols-1 gap-y-4">
//                   <div className="flex items-center">
//                     <input
//                       id="1_bedroom"
//                       name="bedrooms"
//                       defaultValue="1_bedroom"
//                       type="radio"
//                       className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
//                     />
//                     <label htmlFor="1_bedroom" className="ml-3">
//                       <span className="block text-sm text-gray-700">1 bedroom</span>
//                     </label>
//                   </div>
//                   <div className="flex items-center">
//                     <input
//                       id="2_bedrooms"
//                       name="bedrooms"
//                       defaultValue="2_bedrooms"
//                       type="radio"
//                       className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
//                     />
//                     <label htmlFor="2_bedrooms" className="ml-3">
//                       <span className="block text-sm text-gray-700">2 bedrooms</span>
//                     </label>
//                   </div>
//                   <div className="flex items-center">
//                     <input
//                       id="3_bedrooms"
//                       name="bedrooms"
//                       defaultValue="2_bedrooms"
//                       type="radio"
//                       className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
//                     />
//                     <label htmlFor="3_bedrooms" className="ml-3">
//                       <span className="block text-sm text-gray-700">3 bedrooms</span>
//                     </label>
//                   </div>
//                   <div className="flex items-center">
//                     <input
//                       id="3_bedrooms"
//                       name="bedrooms"
//                       defaultValue="3_bedrooms"
//                       type="radio"
//                       className="focus:ring-indigo-500 h-4 w-4 text-indigo-600 border-gray-300"
//                     />
//                     <label htmlFor="4_or_more_bedrooms" className="ml-3">
//                       <span className="block text-sm text-gray-700">4 or more bedrooms</span>
//                     </label>
//                   </div>
//                 </div>
//               </fieldset>
//               <div className="sm:col-span-2">
//                 <label htmlFor="how_did_you_hear_about_us" className="block text-sm font-medium text-gray-700">
//                   How did you hear about us?
//                 </label>
//                 <div className="mt-1">
//                   <input
//                     type="text"
//                     name="how_did_you_hear_about_us"
//                     id="how_did_you_hear_about_us"
//                     className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
//                   />
//                 </div>
//               </div>

//               <div className="text-right sm:col-span-2">
//                 <button
//                   type="submit"
//                   className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
//                 >
//                   Submit
//                 </button>
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </div>
//   )
// }







import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    company: "",
    phone: "",
    comments: "",
    homeSize: "",
    heardAboutUs: "",
    accessType: "",
    packing: "",
    certInsurance: ""

  });

  // const [selectedOption, setSelectedOption] = useState('');

  // const handleChange = (event) => {
  //   setSelectedOption(event.target.value);
  // };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_aopvaja", // Replace with your EmailJS service ID
        "template_13wqrt9", // Replace with your EmailJS template ID
        formData,
        "favWcKZD-EPXvzjZN" // Replace with your EmailJS user ID
      )
      .then(
        (result) => {
          console.log(result.text);
          alert("Message sent successfully! We will contact you soon!");
        },
        (error) => {
          console.log(error.text);
          alert("Failed to send message, please try again.");
        }
      );
  };

  return (
    <div className="relative bg-white">
      <div className="lg:absolute lg:inset-0">
        <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
          <img
            className="h-56 w-full object-cover lg:absolute lg:h-full"
            src="https://images.unsplash.com/photo-1520038410233-7141be7e6f97?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1653&q=80"
            alt=""
          />
        </div>
      </div>

      <div className="relative py-16 px-4 sm:py-24 sm:px-6 lg:px-8 lg:max-w-7xl lg:mx-auto lg:py-32 lg:grid lg:grid-cols-2">
        <div className="lg:pr-8">
          <div className="max-w-md mx-auto sm:max-w-lg lg:mx-0">
            <h2 className="text-3xl font-extrabold tracking-tight sm:text-4xl">
              Let us take the stress out of your next move.
            </h2>
            <p className="mt-4 text-lg text-gray-500 sm:mt-3">
              We’d love to hear from you! Give us a call, or send us a message
              using the form below.
            </p>

            <form
              className="mt-9 grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8"
              onSubmit={handleSubmit}
            >
              <div>
                <label
                  id="first_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  First name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                    autoComplete="given-name"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                  />
                </div>
              </div>

              <div>
                <label
                  id="last_name"
                  className="block text-sm font-medium text-gray-700"
                >
                  Last name
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    autoComplete="family-name"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label
                  id="email"
                  className="block text-sm font-medium text-gray-700"
                >
                  Email
                </label>
                <div className="mt-1">
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    autoComplete="email"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    required
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <label className="block text-sm font-medium text-gray-700">
                  Company
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="company"
                    value={formData.company}
                    autoComplete="organization"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    onChange={handleChange}
                  />
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    id="phone"
                    className="block text-sm font-medium text-gray-700"
                  >
                    Phone
                  </label>
                  <span
                    id="phone_description"
                    className="text-sm text-gray-500"
                  >
                    Optional
                  </span>
                </div>
                <div className="mt-1">
                  <input
                    type="tel"
                    name="phone"
                    id="phone"
                    autoComplete="tel"
                    aria-describedby="phone_description"
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />
                </div>
              </div>

              

              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label className="block text-sm font-medium text-gray-700">
                    Size of Move
                  </label>
                  <select
                    name="homeSize"
                    value={formData.homeSize}
                    onChange={handleChange}
                    className="w-64 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Room or Less">Room or Less</option>
                    <option value="Studio Apartment">Studio Apartment</option>
                    <option value="1 Bedroom Apartment">1 Bedroom Apartment</option>
                    <option value="2 Bedroom Apartment">2 Bedroom Apartment</option>
                    <option value="3 Bedroom Apartment">3 Bedroom Apartment</option>
                    <option value="1 Bedroom House">1 Bedroom House</option>
                    <option value="2 Bedroom Hous">2 Bedroom House</option>
                    <option value="3 Bedroom House">3 Bedroom House</option>
                    <option value="4 or More Bedroom House">4 or More Bedroom House</option>
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
              <div className="flex justify-between mb-2">
                  <label className="block text-sm font-medium text-gray-700">
                  Do you want us to pack your belongings into boxes(costs extra)?
                  </label>
                  
                  </div>
                <label className="flex items-center mb-2">
                  <input
                  name="packing"
                    type="radio"
                    value="No"
                    onChange={handleChange}
                    className="form-radio text-indigo-600"
                  />
                  <span className="ml-2 text-gray-700">No</span>
                </label>
                <label className="flex items-center">
                  <input
                    type="radio"
                    value="Yes"
                     name="packing"
                    onChange={handleChange}
                    className="form-radio text-indigo-600"
                  />
                  <span className="ml-2 text-gray-700">Yes, I Want Packing</span>
                </label>
              </div>



              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label className="block text-sm font-medium text-gray-700">
                   Type of Access
                  </label>
                  <select
                    name="accessType"
                    value={formData.accessType}
                    onChange={handleChange}
                    className="w-64 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  >
                    <option value="">Select</option>
                    <option value="Ground Floor">Ground Floor</option>
                    <option value="Stairs">Stairs</option>
                    <option value="Elevator">Elevator</option>
                
                  </select>
                </div>
              </div>

              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label className="block text-sm font-medium text-gray-700">
                 Do you need certificate of insurance for this building?
                  </label>
                  <select
                    name="certInsurance"
                    value={formData.certInsurance}
                    onChange={handleChange}
                    className="w-64 p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500"
                    required
                  >
                    <option value="">Select</option>
                    <option value="No">No</option>
                    <option value="Yes">Yes</option>
            
                
                  </select>
                </div>
              </div>






              <div className="sm:col-span-2">
                <label
                  htmlFor="how_did_you_hear_about_us"
                  className="block text-sm font-medium text-gray-700"
                >
                  How did you hear about us?
                </label>
                <div className="mt-1">
                  <input
                    type="text"
                    name="heardAboutUs"
                    value={formData.heardAboutUs}
                    onChange={handleChange}
                    id="how_did_you_hear_about_us"
                    className="shadow-sm focus:ring-indigo-500 focus:border-indigo-500 block w-full sm:text-sm border-gray-300 rounded-md"
                  />
                </div>
              </div>


              <div className="sm:col-span-2">
                <div className="flex justify-between">
                  <label
                    htmlFor="how_can_we_help"
                    className="block text-sm font-medium text-gray-700"
                  >
                    How can we help you?
                  </label>
                  <span
                    id="how_can_we_help_description"
                    className="text-sm text-gray-500"
                  >
                    Max. 500 characters
                  </span>
                </div>
                <div className="mt-1">
                  <textarea
                    id="how_can_we_help"
                    name="comments"
                    value={formData.comments}
                    onChange={handleChange}
                    aria-describedby="how_can_we_help_description"
                    rows={4}
                    className="block w-full shadow-sm sm:text-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                    defaultValue={""}
                  />
                </div>
              </div>

              <div className="text-right sm:col-span-2">
                <button
                  type="submit"
                  className="inline-flex justify-center py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactForm;
