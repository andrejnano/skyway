import Image from 'next/image'
import logo from '../../public/img/skyway-logo-low.png'
import Link from 'next/link'

export const Navigation = () => {
  const navigation = {
    pages: [
      { name: 'Domov', href: '/' },
      { name: 'O nás', href: '/onas/' },
      { name: 'Kontakt', href: '/kontakt/' },
      { name: 'China Airlines', href: '/china-airlines/' },
    ],
  }

  return (
    <header className="bg-white">
      <nav aria-label="top" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          <div className="">
            <Link href="/" passHref>
              <Image
                className="h-8 w-auto cursor-pointer"
                height={32}
                width={120}
                src={logo}
                alt="Logo"
              />
            </Link>
          </div>
          <div className="">
            <div className="ml-10 flex items-baseline flex-col sm:flex-row ">
              {navigation.pages.map((page) => (
                <Link href={page.href} key={page.name} passHref>
                  <a className="px-3 py-2 rounded-md text-sm font-medium text-gray-900 focus:outline-none focus:text-gray-900 focus:bg-gray-50 transition duration-150 ease-in-out">
                    {page.name}
                  </a>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}
