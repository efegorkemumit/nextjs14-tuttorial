import Link from 'next/link';
import React from 'react';

// BlogComponents bileşeni için props tanımı
interface BlogComponentsProps {
    id?: string; // Blog gönderisinin kimliği (isteğe bağlı olarak kullanılabilir)
    title: string; // Blog gönderisinin başlığı
    description: string; // Blog gönderisinin açıklaması
}

// BlogComponents bileşeni, her bir blog gönderisinin listelendiği bileşen
const BlogComponents = ({ description, id, title }: BlogComponentsProps) => {
    return (
        <Link href={`/blog/${id}`}>
        <div className='gap-y-4 p-4 gap-x-4 '>
            {/* Blog gönderisinin başlığı */}
            <h2 className='text-3xl'>{title}</h2>
            
            {/* Blog gönderisinin açıklaması */}
            <p>{description}</p>
        </div>
        </Link>
    );
}

export default BlogComponents;
