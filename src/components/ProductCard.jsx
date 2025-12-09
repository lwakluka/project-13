import { Link } from 'react-router-dom'

function ProductCard({ product }) {
  const formatPrice = (price) => {
    return '$' + new Intl.NumberFormat('en-US').format(price)
  }

  return (
    <div className="group relative border border-gray-950">
      <Link to={`/product/${product.id}`}>
        <div className="aspect-[3/4] bg-gray-100 overflow-hidden mb-4">
          <img
            src={product.image}
            alt={product.name}
            className="border-b border-gray-950 w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
        <div className="px-2">
          <h3 className="text-sm font-medium text-black">{product.name}</h3>
          <p className="text-lg font-semibold text-black">
            {formatPrice(product.price)}
          </p>
        </div>
      </Link>

      <div className="absolute top-4 right-4 flex flex-col gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
        <button className="bg-white p-2 hover:bg-gray-100 transition-colors">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 4v16m8-8H4"
            />
          </svg>
        </button>
        <button className="bg-white p-2 hover:bg-gray-100 transition-colors">
          <svg
            className="w-5 h-5"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M5 5a2 2 0 012-2h10a2 2 0 012 2v16l-7-3.5L5 21V5z"
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default ProductCard

