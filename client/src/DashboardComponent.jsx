
const products = [
    {
      id: 1,
      name: 'Arreglo de Techo',
      color: 'Multicolor',
      href: '#',
      imageSrc: './public/pexels-anastasia-shuraeva-6234120.jpg',
      imageAlt: 'Ceiling Decoration Gold and Silver',
      price: 'L.90',
    
    },
    {
      id: 2,
      name: 'Fiesta de Antifaz Unisex',
      color: 'Multicolor',
      href: '#',
      imageSrc: './public/pexels-davide-rotondi-15630475.jpg',
      imageAlt: 'Descp. Mascara de Fiesta',
      price: 'L.170',
    
    },
    {
      id: 3,
      name: 'Mascara Antifaz Dama',
      color: 'Multicolor',
      href: '#',
      imageSrc: './public/pexels-ibolya-toldi-3836671.jpg',
      imageAlt: 'Descp. Mascara tonos obscuros Dama',
      price: 'L.210',
    
    },
    {
      id: 4,
      name: 'Cupcake Mini Pastel',
      color: 'Multicolor',
      href: '#',
      imageSrc: './public/pexels-jess-bailey-designs-913136.jpg',
      imageAlt: 'Descp. Cupcake Basico',
      price: 'L.65',
    
    },
    {
      id: 5,
      name: 'Regalo Sorpresa',
      color: 'Multicolor',
      href: '#',
      imageSrc: './public/pexels-karolina-grabowska-4397903.jpg',
      imageAlt: 'Descp. Gift boom',
      price: 'L.130',
    
    },
    {
      id: 6,
      name: 'Arreglo Mesa para 2',
      color: 'Multicolor',
      href: '#',
      imageSrc: './public/pexels-karolina-grabowska-5713660.jpg',
      imageAlt: 'Descp. Mesa de parera',
      price: 'L.230',
    
    },
    {
      id: 7,
      name: 'Arreglo de Graduado',
      color: 'Multicolor',
      href: '#',
      imageSrc: './public/pexels-karolina-grabowska-5725977.jpg',
      imageAlt: 'Descp. Arreglo con Botella de Vino',
      price: 'L.428',
    
    },
    {
      id: 8,
      name: 'Globo Personalizado',
      color: 'Multicolor',
      href: '#',
      imageSrc: './public/globo_4.png',
      imageAlt: 'Descp. ',
      price: 'L.80',
    
    },
    {
      id: 9,
      name: 'Arreglo Pre-Navidad',
      color: 'Multicolor',
      href: '#',
      imageSrc: './public/pexels-laura-james-6101962.jpg',
      imageAlt: 'Descp. Detalles preparando Navidad',
      price: 'L.145',
    
    },
    {
      id: 10,
      name: 'Regalo Sorpresa Mini',
      color: '2 Colores',
      href: '#',
      imageSrc: './public/pexels-liza-summer-6348104.jpg',
      imageAlt: 'Descp. Regalo Mini con chongo',
      price: 'L.96',
    
    },
    {
      id: 11,
      name: 'Pila de Regalos Sorpresa',
      color: 'Multicolor',
      href: '#',
      imageSrc: './public/pexels-michelle-leman-6765533.jpg',
      imageAlt: 'Descp. Media docena de regalos',
      price: 'L.970',
    
    },
    {
      id: 12,
      name: 'Torre de Regalos 3 Pisos',
      color: 'Multicolor',
      href: '#',
      imageSrc: './public/pexels-pixabay-264985.jpg',
      imageAlt: 'Descp. Tres regalos diversos',
      price: 'L.467',
    
    },
    {
      id: 13,
      name: 'Pastel de Amistad',
      color: 'Multicolor',
      href: '#',
      imageSrc: './public/pexels-polina-tankilevitch-4110012.jpg',
      imageAlt: 'Descp. Pastel Base blanco',
      price: 'L.245',
    
    },
    {
      id: 14,
      name: 'Ramo de Rosas',
      color: 'Rosadas',
      href: '#',
      imageSrc: './public/pexels-secret-garden-931176.jpg',
      imageAlt: 'Descp. Rosas de colores suave',
      price: 'L.315',
    
    },
    {
      id: 15,
      name: 'Pastel HB',
      color: 'Tonos purpuras',
      href: '#',
      imageSrc: './public/pexels-shuvalova-natalia-15419197.jpg',
      imageAlt: 'Descp. Pastel de Cumple tonos obscuros',
      price: 'L.245',
    
    },
    {
      id: 16,
      name: 'Globo Personalizado',
      color: 'Multicolor',
      href: '#',
      imageSrc: '/client/public/globo_1.png',
      imageAlt: 'Descp. ',
      price: 'L.80',
    
    },
    {
      id: 17,
      name: 'Regalo Sorpresa Mediano',
      color: 'Tonos Rosados varios',
      href: '#',
      imageSrc: './public/pexels-skylar-kang-6045704.jpg',
      imageAlt: 'Descp. Regalo de Media caja',
      price: 'L.330',
    
    },
    {
      id: 18,
      name: 'Arreglo y Regalo Tematico',
      color: 'Multicolor',
      href: '#',
      imageSrc: './public/pexels-tanya-gorelova-3933957.jpg',
      imageAlt: 'Descp. Para mesa tema Mafia',
      price: 'L.610',
    
    },
    
    {
      id: 20,
      name: 'Arreglo de Mesa Boda Exterior Large',
      color: 'Multicolor',
      href: '#',
      imageSrc: './public/pexels-tara-winstead-6479601.jpg',
      imageAlt: 'Descp. Para exteriores Large Table',
      price: 'L.620',
    
    },
    {
      id: 21,
      name: 'Arreglo de Mesa Boda Interior Large',
      color: 'Tonos Marrones',
      href: '#',
      imageSrc: './public/pexels-tara-winstead-6479604.jpg',
      imageAlt: 'Descp. Para exteriores Large Table',
      price: 'L.620',
    
    },
    {
      id: 22,
      name: 'Cupcake con Cereza',
      color: 'Temporadas',
      href: '#',
      imageSrc: './public/pexels-tim-douglas-6210756.jpg',
      imageAlt: 'Descp. Cupcake con fruta',
      price: 'L.75',
    
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
  