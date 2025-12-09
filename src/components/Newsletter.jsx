function Newsletter() {
  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle newsletter subscription
    alert('Thank you for subscribing!')
  }

  return (
    <section className="bg-white py-16">
      <div className="flex flex-col md:flex-row justify-between px-4 sm:px-6 lg:px-8">
        <div className="md:w-2/6">
          <h2 className="text-3xl font-bold text-black mb-4 md:mb-0">
            GET A DISCOUNT
          </h2>
        </div>

        <div className="md:w-3/6">
          <div className="text-gray-700 mb-10">
            <p>
              Get $10 off when you subscribe to our newsletter! <br /> Be the first to
              know about brand news.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="flex flex-col sm:flex-row gap-4"
          >
            <input
              type="email"
              placeholder="e-mail"
              className="flex-1 py-2 border-b border-gray-300 focus:outline-none focus:border-black"
              required
            />
            <button
              type="submit"
              className="text-sm hover:text-gray-700 transition-colors inline-flex items-center"
            >
              SUBSCRIBE
              <svg
                className="ml-2 w-3 h-3"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M9 5l7 7-7 7"
                />
              </svg>
            </button>
          </form>
        </div>
      </div>
    </section>
  );
}

export default Newsletter

