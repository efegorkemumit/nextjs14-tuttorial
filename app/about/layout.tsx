import Header from '@/components/Header'; // Header bileşenini içe aktarıyoruz
import Image from 'next/image'; // Next.js'in Image bileşenini içe aktarıyoruz
import Link from 'next/link'; // Next.js'in sayfa bağlantılarını sağlayan Link bileşenini içe aktarıyoruz
import React from 'react'; // React'i içe aktarıyoruz

// Layout bileşeni için props tiplemesi
interface LayoutProps {
    children: React.ReactNode; // children prop'unun tipi React'ın ReactNode tipi olarak belirleniyor
}

// Layout bileşeni
const Layout = ({ children }: LayoutProps) => {
    return (
        <div>
            {/* Slider için arkaplan görüntüsü */}
            <Image
                alt='' // Alternatif metin
                className='w-full h-52 object-cover opacity-40' // Görüntünün stil sınıfları
                src="/slider/1.jpg" // Görüntünün yolu
                width={500} // Görüntünün genişliği
                height={500} // Görüntünün yüksekliği
            />

            {/* Sayfa bağlantıları için menü */}
            <div className='gap-6 flex'>
                {/* Misyon sayfasına yönlendiren bağlantı */}
                <Link href="/about/misyon">Misyon</Link>
                {/* Vizyon sayfasına yönlendiren bağlantı */}
                <Link href="/about/vizyon">Vizyon</Link>
                {/* Ekip sayfasına yönlendiren bağlantı */}
                <Link href="/about/ekip">Ekip</Link>
            </div>

            {/* Ana içerik alanı */}
            {children}
        </div>
    );
}

export default Layout; // Layout bileşenini dışa aktarıyoruz
