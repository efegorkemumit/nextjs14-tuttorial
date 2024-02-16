import Image from 'next/image';
import React from 'react';

// Hero bileşeni için props tanımı
interface HeroProps {
    title: string; // Başlık
    description?: string; // Açıklama (isteğe bağlı)
    image: string; // Arka plan resmi URL'si
    image2: string; // İkincil resim URL'si
}

// Hero bileşeni
const Hero = ({ image, image2, title, description }: HeroProps) => {
    return (
        <section className='relative h-full overflow-hidden'>
            {/* Arka plan resmi */}
            <div className='absolute top-0 left-0 w-full h-full bg-cover' style={{ backgroundImage: `url('${image}')` }}></div>
            {/* Arka plan resminin üzerine siyah bir opaklık */}
            <div className='absolute top-0 left-0 w-full h-full bg-black bg-opacity-40'></div>

            {/* İçerik */}
            <div className='flex flex-col lg:flex-row justify-between items-center relative z-10'>
                {/* Metin içeriği */}
                <div className='lg:w-1/2 ml-4'>
                    <h2 className='text-3xl text-white'>{title}</h2>
                    <p className='text-white mt-2'>{description}</p>
                </div>
                {/* İkincil resim */}
                <div className='lg:w-1/2'>
                    <Image src={`/slider/${image2}`} alt='' width={500} height={500}></Image>
                </div>
            </div>
        </section>
    );
}

export default Hero;
