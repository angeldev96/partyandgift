
const products = [
    {
      id: 1,
      name: 'Arreglo de Techo',
      color: 'Multicolor',
      href: '#',
      imageSrc: '/client/public/pexels-anastasia-shuraeva-6234120.jpg',
      imageAlt: 'Ceiling Decoration Gold and Silver',
      price: 'L.90',
    
    },
    {
      id: 2,
      name: 'Fiesta de Antifaz Unisex',
      color: 'Multicolor',
      href: '#',
      imageSrc: '/client/public/pexels-davide-rotondi-15630475.jpg',
      imageAlt: 'Descp. Mascara de Fiesta',
      price: 'L.170',
    
    },
    {
      id: 3,
      name: 'Mascara Antifaz Dama',
      color: 'Multicolor',
      href: '#',
      imageSrc: '/client/public/pexels-ibolya-toldi-3836671.jpg',
      imageAlt: 'Descp. Mascara tonos obscuros Dama',
      price: 'L.210',
    
    },
    {
      id: 4,
      name: 'Cupcake Mini Pastel',
      color: 'Multicolor',
      href: '#',
      imageSrc: '/client/public/pexels-jess-bailey-designs-913136.jpg',
      imageAlt: 'Descp. Cupcake Basico',
      price: 'L.65',
    
    },
    {
      id: 5,
      name: 'Regalo Sorpresa',
      color: 'Multicolor',
      href: '#',
      imageSrc: '/client/public/pexels-karolina-grabowska-4397903.jpg',
      imageAlt: 'Descp. Gift boom',
      price: 'L.130',
    
    },
    {
      id: 6,
      name: 'Globo Personalizado',
      color: 'Multicolor',
      href: '#',
      imageSrc: '/client/public/',
      imageAlt: 'Descp. ',
      price: 'L.80',
    
    },
    {
      id: 7,
      name: 'Globo Personalizado',
      color: 'Multicolor',
      href: '#',
      imageSrc: '/client/public/pexels-davide-rotondi-15630475.jpg',
      imageAlt: 'Descp. ',
      price: 'L.170',
    
    },
    {
      id: 8,
      name: 'Globo Personalizado',
      color: 'Multicolor',
      href: '#',
      imageSrc: '/client/public/',
      imageAlt: 'Descp. ',
      price: 'L.80',
    
    },
    {
      id: 9,
      name: 'Globo Personalizado',
      color: 'Multicolor',
      href: '#',
      imageSrc: '/client/public/',
      imageAlt: 'Descp. ',
      price: 'L.80',
    
    },
    {
      id: 10,
      name: 'Globo Personalizado',
      color: 'Multicolor',
      href: '#',
      imageSrc: '/client/public/',
      imageAlt: 'Descp. ',
      price: 'L.80',
    
    },
    {
      id: 11,
      name: 'Globo Personalizado',
      color: 'Multicolor',
      href: '#',
      imageSrc: '/client/public/',
      imageAlt: 'Descp. ',
      price: 'L.80',
    
    },
    {
      id: 12,
      name: 'Globo Personalizado',
      color: 'Multicolor',
      href: '#',
      imageSrc: '/client/public/',
      imageAlt: 'Descp. ',
      price: 'L.80',
    
    },
    {
      id: 13,
      name: 'Globo Personalizado',
      color: 'Multicolor',
      href: '#',
      imageSrc: '/client/public/',
      imageAlt: 'Descp. ',
      price: 'L.80',
    
    },
    {
      id: 14,
      name: 'Globo Personalizado',
      color: 'Multicolor',
      href: '#',
      imageSrc: '/client/public/',
      imageAlt: 'Descp. ',
      price: 'L.80',
    
    },
    {
      id: 15,
      name: 'Globo Personalizado',
      color: 'Multicolor',
      href: '#',
      imageSrc: '/client/public/',
      imageAlt: 'Descp. ',
      price: 'L.80',
    
    },
    {
      id: 16,
      name: 'Globo Personalizado',
      color: 'Multicolor',
      href: '#',
      imageSrc: '/client/public/',
      imageAlt: 'Descp. ',
      price: 'L.80',
    
    },
    {
      id: 17,
      name: 'Globo Personalizado',
      color: 'Multicolor',
      href: '#',
      imageSrc: '/client/public/',
      imageAlt: 'Descp. ',
      price: 'L.80',
    
    },
    {
      id: 18,
      name: 'Globo Personalizado',
      color: 'Multicolor',
      href: '#',
      imageSrc: '/client/public/',
      imageAlt: 'Descp. ',
      price: 'L.80',
    
    },
    {
      id: 19,
      name: 'Globo Personalizado',
      color: 'Multicolor',
      href: '#',
      imageSrc: '/client/public/',
      imageAlt: 'Descp. ',
      price: 'L.80',
    
    },
    {
      id: 20,
      name: 'Globo Personalizado',
      color: 'Multicolor',
      href: '#',
      imageSrc: '/client/public/',
      imageAlt: 'Descp. ',
      price: 'L.80',
    
    },
    
    
  ]
  
  export default function DashboardComponent() {
    return (
      <div className="bg-white">
        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8">
          <h2 className="text-xl font-bold text-gray-900">Productos</h2>
  
          <div className="mt-8 grid grid-cols-1 gap-y-12 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <div key={product.id}>
                <div className="relative">
                  <div className="relative h-72 w-full overflow-hidden rounded-lg">
                    <img
                      src={product.imageSrc}
                      alt={product.imageAlt}
                      className="h-full w-full object-cover object-center"
                    />
                  </div>
                  <div className="relative mt-4">
                    <h3 className="text-sm font-medium text-gray-900">{product.name}</h3>
                    <p className="mt-1 text-sm text-gray-500">{product.color}</p>
                  </div>
                  <div className="absolute inset-x-0 top-0 flex h-72 items-end justify-end overflow-hidden rounded-lg p-4">
                    <div
                      aria-hidden="true"
                      className="absolute inset-x-0 bottom-0 h-36 bg-gradient-to-t from-black opacity-50"
                    />
                    <p className="relative text-lg font-semibold text-white">{product.price}</p>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={product.href}
                    className="relative flex items-center justify-center rounded-md border border-transparent bg-gray-100 px-8 py-2 text-sm font-medium text-gray-900 hover:bg-gray-200"
                  >
                    Agregar al carrito<span className="sr-only">, {product.name}</span>
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    )
  }
  