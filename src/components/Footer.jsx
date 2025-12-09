function Footer() {
  return (
    <footer className="bg-black text-white">
      <div className="px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <h2 className="text-4xl font-bold">ASTRNTBRND</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 mb-8">
          <div>
            <h3 className="font-semibold mb-4">About the Brand</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  about astronaut
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  our stores
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  ask a question
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  details
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  contacts
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">For Buyers</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white">
                  frequently asked questions
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  product care
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  payment and delivery
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  exchange and return
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  bonus program
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  installment payment
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  payment in parts
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4">Contacts</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="mailto:support@astronautbrand.ru"
                  className="hover:text-white"
                >
                  support@astronautbrand.ru
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  whatsapp (online order)
                </a>
              </li>
              <li className="flex flex-col gap-2 mt-4">
                <a href="#" className="hover:text-white">
                  telegram
                </a> 
                <a href="#" className="hover:text-white">
                  vkontakte
                </a>
                <a href="#" className="hover:text-white">
                  instagram
                </a>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold mb-4 mt-5 md:mt-0">Stores</h3>
            <ul className="space-y-2 text-gray-400">
              <li className="mt-4 mb-7">
                <p className="font-semibold mb-2">Store in Moscow</p>
                <p className="text-sm">Address and phone</p>
              </li>
              <li className="mt-2">
                <p className="font-semibold mb-2">Store in Ufa</p>
                <p className="text-sm">Address and phone</p>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-gray-400">
          <p>© 2024 astrntbrnd</p>
          <div className="flex gap-6 mt-4 md:mt-0">
            <a href="#" className="hover:text-white">
              public offer
            </a>
            <a href="#" className="hover:text-white">
              website development
            </a>
            <a href="#" className="hover:text-white">
              privacy policy
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer

