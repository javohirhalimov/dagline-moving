const reviews = [
  {
    customerName: 'Janki B',
    customerQuote: `Russell and his team were fantastic to work with. The quality of their work was unbeatable and very professional. I would recommend them to anyone looking for moving services.`
  },
  {
    customerName: 'K C',
    customerQuote: 'Disassembled/moved.assembled a bowflex treadmill (wt.280lbs). Russell was the contact who was very patient, answering all my questions. They were puntual and very professional. Not only I will use them again, but I will highly recommend them.'
  
  },
    {
    customerName: 'Ridwana R',
    customerQuote: `Moving is usually so stressful but they made it so much easier. used them for my move, my brother's and junk removeAllListeners. Would definitely recommend!`
  },
  {
    customerName: 'Sam C',
    customerQuote: `Russell and his team are true professionals, it was the most comfortable move I have ever had, they take care of all my furniture and fragile items. I highly recommend their services and will use them again in the future. I want to say thank you guys again.`
  }
]

export default function Example() {
  return (
    <section className="  overflow-hidden ">
      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <h2 className="text-3xl mt-2 font-extrabold tracking-tight sm:text-4xl flex justify-center">What our customers have to say about us.</h2>

        {reviews.map((review) => (

          <div className="relative">
            <blockquote className="mt-12">
              <div className="max-w-3xl mx-auto text-center text-1xl leading-9 font-medium text-gray-900">
                <p>
                  &ldquo;{review.customerQuote}&rdquo;
                </p>
              </div>
              <footer className="mt-8">
                <div className="md:flex md:items-center md:justify-center">
                  <div className="md:flex-shrink-0">
                    <img
                      className="mx-auto h-10 w-10 rounded-full"
                      src="https://images.unsplash.com/photo-1605214101860-84e51cf4c0db?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MjB8fGF2YXRhciUyMHNpbGhvdWV0dGV8ZW58MHx8MHx8&ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
                      alt=""
                    />
                  </div>
                  <div className="mt-1 text-center md:mt-0 md:ml-4 md:flex md:items-center">
                    <div className="text-base font-medium text-gray-900">{review.customerName}</div>

                    <svg className="hidden md:block mx-1 h-5 w-5 text-indigo-600" fill="currentColor" viewBox="0 0 20 20">
                      <path d="M11 0h3L9 20H6l5-20z" />
                    </svg>

                    <div className="text-base font-medium text-gray-500">Verified Customer</div>
                  </div>
                </div>
              </footer>
            </blockquote>
          </div>
        ))}

      </div>
    </section>
  )
}
