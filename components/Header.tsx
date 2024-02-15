'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

// Header bileşeni
const Header = () => {
    // Mevcut sayfanın yolunu almak için usePathname hook'unu kullanıyoruz
    const pathname = usePathname()

    return (
        <div className='flex justify-between items-center'>
            <div className='ml-5'>
                logo {/* Buraya logo bileşeninizin eklenmesi gerekiyor */}
            </div>
            <div className='flex items-center gap-9 m-5'>
                <p>
                    {/* Ana sayfaya yönlendiren bağlantı */}
                    <Link className={`p-3 ${pathname === "/" ? "underline" : ""}`} href="/"> Home</Link>
                    {/* Mevcut sayfa yolu '/' ise, bağlantı altı çizili olacak */}
                </p>
                <p>
                    {/* Hakkında sayfasına yönlendiren bağlantı */}
                    <Link className={`p-3 ${pathname === "/about" ? "underline" : ""}`} href="/about"> About</Link>
                    {/* Mevcut sayfa yolu '/about' ise, bağlantı altı çizili olacak */}
                </p>
                <p>
                    {/* Blog sayfasına yönlendiren bağlantı */}
                    <Link className={`p-3 ${pathname === "/blog" ? "underline" : ""}`} href="/blog"> Blog</Link>
                    {/* Mevcut sayfa yolu '/blog' ise, bağlantı altı çizili olacak */}
                </p>
                <p>
                    {/* İletişim sayfasına yönlendiren bağlantı */}
                    <Link className={`p-3 ${pathname === "/contact" ? "underline" : ""}`} href="/contact"> Contact</Link>
                    {/* Mevcut sayfa yolu '/contact' ise, bağlantı altı çizili olacak */}
                </p>
            </div>
        </div>
    )
}

export default Header
