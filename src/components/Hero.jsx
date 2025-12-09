import { Link } from 'react-router-dom'

function Hero() {
  return (
    <section className="relative w-full h-[600px] bg-black overflow-hidden">
      <div
        className="absolute inset-0 bg-cover bg-center opacity-80"
        style={{
          backgroundImage:
            "url(https://images.unsplash.com/photo-1483985988355-763728e1935b?w=1920&h=1080&fit=crop)",
        }}
      >
        <div className="absolute inset-0 bg-black bg-opacity-40"></div>
      </div>

      <div className="relative z-10 h-full flex items-end pb-20">
        <div className="px-4 sm:px-6 lg:px-8 w-full">
          <div className="md:flex gap-[10rem]">
            <div>
              <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                AFTER PARTY <br /> DROP
              </h1>
            </div>
            <div>
              <p className="text-sm text-white mt-10 mb-5">
                New collection for a comfortable and <br /> cozy New Year's
                weekend!
              </p>
              <Link
                to="/catalog"
                className="inline-flex items-center text-white font-medium hover:text-gray-300 transition-colors text-sm"
              >
                View
                <svg
                  className="ml-2 w-5 h-5"
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
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero

