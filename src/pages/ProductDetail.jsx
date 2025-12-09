import { useParams, Link } from 'react-router-dom'
import Header from '../components/Header'
import Footer from '../components/Footer'
import { products } from '../data/products'

function ProductDetail() {
  const { id } = useParams()
  const product = products.find(p => p.id === parseInt(id))

  if (!product) {
    return (
      <div className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-grow flex items-center justify-center">
          <div className="text-center">
            <h1 className="text-2xl font-bold mb-4">Product Not Found</h1>
            <Link to="/catalog" className="text-blue-600 hover:underline">
              Back to Catalog
            </Link>
          </div>
        </main>
        <Footer />
      </div>
    )
  }

  const formatPrice = (price) => {
    return '$' + new Intl.NumberFormat('en-US').format(price)
  }

  return (
    <div className="min-h-screen flex flex-col">
      <Header />
      <main className="flex-grow py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <Link 
            to="/catalog" 
            className="text-gray-600 hover:text-black mb-8 inline-block"
          >
            ← Back to Catalog
          </Link>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            <div className="aspect-square bg-gray-100 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name}
                className="w-full h-full object-cover"
              />
            </div>
            
            <div>
              <h1 className="text-4xl font-bold text-black mb-4">{product.name}</h1>
              <p className="text-3xl font-semibold text-black mb-6">
                {formatPrice(product.price)}
              </p>
              
              <p className="text-gray-700 mb-8 leading-relaxed">
                {product.description}
              </p>
              
              <div className="space-y-4">
                <button className="w-full bg-black text-white py-4 font-medium hover:bg-gray-800 transition-colors">
                  Add to Cart
                </button>
                <button className="w-full border border-black text-black py-4 font-medium hover:bg-gray-100 transition-colors inline-flex items-center justify-center">
                  <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z" />
                  </svg>
                  Add to Favorites
                </button>
              </div>
              
              <div className="mt-8 pt-8 border-t border-gray-200">
                <h3 className="font-semibold mb-4">Product Information</h3>
                <ul className="space-y-2 text-gray-700">
                  <li>Category: {product.category}</li>
                  <li>Material: High-quality material</li>
                  <li>Care: Wash at 30°C</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default ProductDetail

