'use client'

import { Button } from '@/components/ui/button'
import { Menu, X } from 'lucide-react'
import Image from 'next/image'
import Link from 'next/link'
import { useState, useEffect } from 'react'
import { cn } from '@/lib/utils'

const menuItems = [
    { name: 'Experiências', href: '/#experiencias' },
    { name: 'Como Trabalhamos', href: '/#pilares' },
    { name: 'Passeios', href: '/#servicos' },
    { name: 'Grupos & Caravanas', href: '/grupos-e-caravanas' },
    { name: 'FAQ', href: '/#faq' },
]

export function AquinoNavbar() {
    const [menuState, setMenuState] = useState(false)
    const [isScrolled, setIsScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setIsScrolled(window.scrollY > 20)
        window.addEventListener('scroll', handleScroll)
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    return (
        <header className="fixed inset-x-0 top-0 z-50">
            <nav
                data-state={menuState && 'active'}
                className={cn(
                    "aquino-navbar group relative w-full transition-[background-color,box-shadow,backdrop-filter,padding] duration-[220ms] ease-out",
                    isScrolled
                        ? "bg-ocean-navy/94 py-2.5 shadow-[0_8px_20px_rgba(17,32,46,0.10)] backdrop-blur-md backdrop-saturate-150"
                        : "bg-ocean-navy/88 py-3 backdrop-blur-[6px] backdrop-saturate-125 lg:py-3.5"
                )}>
                <div className="m-auto max-w-7xl px-5 sm:px-6">
                    <div className="flex flex-wrap items-center justify-between gap-5 lg:gap-8">
                        <div className="flex w-full justify-between lg:w-auto">
                            <Link
                                href="/"
                                aria-label="AquinoTour - Voltar para a Home"
                                className="aquino-nav-control flex items-center space-x-2 rounded-[8px] text-shell-white outline-none focus-visible:ring-2 focus-visible:ring-turquoise-sea focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-navy">
                                <Image
                                    src="/images/brand/logo-navbar.webp"
                                    alt="AquinoTour Paraty"
                                    width={1086}
                                    height={362}
                                    priority
                                    sizes="(max-width: 768px) 118px, 132px"
                                    className="h-11 w-auto object-contain md:h-12"
                                />
                            </Link>

                            <button
                                onClick={() => setMenuState(!menuState)}
                                aria-label={menuState ? 'Fechar Menu' : 'Abrir Menu'}
                                className="aquino-nav-control relative z-20 -m-2.5 -mr-2 block flex size-11 cursor-pointer items-center justify-center rounded-[10px] text-shell-white outline-none transition-colors duration-150 hover:bg-shell-white/8 focus-visible:ring-2 focus-visible:ring-turquoise-sea focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-navy lg:hidden">
                                <Menu className="group-data-[state=active]:rotate-180 group-data-[state=active]:scale-0 group-data-[state=active]:opacity-0 m-auto size-6 duration-200" />
                                <X className="group-data-[state=active]:rotate-0 group-data-[state=active]:scale-100 group-data-[state=active]:opacity-100 absolute inset-0 m-auto size-6 -rotate-180 scale-0 opacity-0 duration-200" />
                            </button>
                        </div>

                        <div className="aquino-mobile-menu group-data-[state=active]:block mb-5 hidden w-full flex-wrap items-center justify-end space-y-7 md:flex-nowrap max-lg:rounded-[14px] max-lg:border max-lg:border-shell-white/10 max-lg:bg-ocean-navy/96 max-lg:p-5 max-lg:shadow-[0_16px_40px_rgba(17,32,46,0.22)] max-lg:backdrop-blur-md max-lg:backdrop-saturate-125 lg:m-0 lg:flex lg:w-fit lg:gap-7 lg:space-y-0 lg:p-0 lg:group-data-[state=active]:flex">
                            <div className="lg:pr-4">
                                <ul className="space-y-5 text-sm font-medium tracking-[0.01em] lg:flex lg:gap-7 lg:space-y-0">
                                    {menuItems.map((item, index) => (
                                        <li key={index}>
                                            <Link
                                                href={item.href}
                                                className="aquino-nav-link aquino-nav-control relative block rounded-[6px] py-1 text-shell-white/78 outline-none transition-colors duration-150 hover:text-shell-white focus-visible:ring-2 focus-visible:ring-turquoise-sea focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-navy">
                                                <span>{item.name}</span>
                                            </Link>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            <div className="flex w-full flex-col space-y-3 sm:flex-row sm:gap-3 sm:space-y-0 md:w-fit lg:pl-5">
                                <Button
                                    asChild
                                    className="aquino-nav-control h-10 rounded-[10px] border-none bg-turquoise-sea px-6 text-sm font-medium tracking-normal text-white shadow-none transition-[background-color,transform] duration-150 hover:bg-tropical-lagoon focus-visible:ring-2 focus-visible:ring-turquoise-sea focus-visible:ring-offset-2 focus-visible:ring-offset-ocean-navy">
                                    <a
                                        href={`https://wa.me/5524999096384?text=${encodeURIComponent("Olá! Vim pelo site da AquinoTour e gostaria de informações sobre passeios e experiências em Paraty.")}`}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                    >
                                        <span>Falar pelo WhatsApp</span>
                                    </a>
                                </Button>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </header>
    )
}
