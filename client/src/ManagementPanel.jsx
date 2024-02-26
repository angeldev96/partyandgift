import {

    Bars3Icon,
  } from '@heroicons/react/24/outline'



  
  const items = [
    {
      title: 'Registrar Producto',
      description: 'Another to-do system you’ll try but eventually give up on.',
      icon: Bars3Icon,
      background: 'bg-pink-500',
    },
    {
      title: 'Ver Productos',
      description: 'Stay on top of your deadlines, or don’t — it’s up to you.',
      icon: Bars3Icon,
      background: 'bg-yellow-500',
    },
    {
      title: 'Crear una lista de tareas',
      description: 'Great for mood boards and inspiration.',
      icon: Bars3Icon,
      background: 'bg-green-500',
    },
    {
      title: 'Ver Resumen de Ventas',
      description: 'Track tasks in different stages of your project.',
      icon: Bars3Icon,
      background: 'bg-blue-500',
    },
    {
      title: 'Registrar Empleado',
      description: 'Lots of numbers and things — good for nerds.',
      icon: Bars3Icon,
      background: 'bg-indigo-500',
    },
    
  ]
  
  function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
  }
  
  export default function ManagementPanel() {
    return (
      <div className='p-12'>
        <h2 className="text-base font-semibold leading-6 text-gray-900">Panel de Administración</h2>
        <p className="mt-1 text-sm text-gray-500">

        </p>
        <ul role="list" className="mt-6 grid grid-cols-1 gap-6 border-b border-t border-gray-200 py-6 sm:grid-cols-2">
          {items.map((item, itemIdx) => (
            <li key={itemIdx} className="flow-root">
              <div className="relative -m-2 flex items-center space-x-4 rounded-xl p-2 focus-within:ring-2 focus-within:ring-indigo-500 hover:bg-gray-50">
                <div
                  className={classNames(
                    item.background,
                    'flex h-16 w-16 flex-shrink-0 items-center justify-center rounded-lg'
                  )}
                >
                  <item.icon className="h-6 w-6 text-white" aria-hidden="true" />
                </div>
                <div>
                  <h3 className="text-sm font-medium text-gray-900">
                    <a href="#" className="focus:outline-none">
                      <span className="absolute inset-0" aria-hidden="true" />
                      <span>{item.title}</span>
                      <span aria-hidden="true"> &rarr;</span>
                    </a>
                  </h3>
                  <p className="mt-1 text-sm text-gray-500">{item.description}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
       
      </div>
    )
  }
  