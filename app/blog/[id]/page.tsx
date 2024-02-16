'use client'

import { useParams } from 'next/navigation'; // next/navigation'dan useParams hook'unu içe aktarıyoruz
import React from 'react'; // React'i içe aktarıyoruz

// Statik olarak oluşturulmuş blog gönderisi listesi
const blogPosts = [
    { id: 1, title: 'İlk Blog Gönderisi', content: 'Bu blog gönderisinin içeriği buraya yazılacak.' },
    { id: 2, title: 'İkinci Blog Gönderisi', content: 'Bu blog gönderisinin içeriği buraya yazılacak.' },
    { id: 3, title: 'Üçüncü Blog Gönderisi', content: 'Bu blog gönderisinin içeriği buraya yazılacak.' },
    { id: 4, title: 'Dördüncü Blog Gönderisi', content: 'Bu blog gönderisinin içeriği buraya yazılacak.' },
    // Daha fazla blog gönderisi eklemek isterseniz buraya ekleyebilirsiniz
];

const BlogDetail = () => {
    const queryParams = useParams(); // URL'deki parametreleri almak için useParams hook'unu kullanıyoruz
    const { id } = queryParams; // id parametresini alıyoruz
    console.log(id); // id'yi konsola yazdırıyoruz

    // id parametresine göre blog gönderisinin detaylarını buluyoruz
    const post = blogPosts.find(blog => blog.id.toString() === id);

    // Eğer belirtilen id'ye sahip bir gönderi bulunamazsa, kullanıcıya bir mesaj gösteriyoruz
    if (!post) {
        return <div>Post yok kardesım</div>;
    }

    // Bulunan blog gönderisinin başlık ve içeriğini ekrana yazdırıyoruz
    return (
        <div>
            {post.title}
            {post.content}
        </div>
    );
}

export default BlogDetail; // BlogDetail bileşenini dışa aktarıyoruz