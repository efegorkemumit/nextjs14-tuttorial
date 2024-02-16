import React from 'react';
import BlogComponents from '@/components/BlogComponents'; // Blog bileşenlerini içe aktarıyoruz

// Blog gönderileri dizisi
const blogPosts = [
  { id: 1, title: 'İlk Blog Gönderisi', content: 'Bu blog gönderisinin içeriği buraya yazılacak.' },
  { id: 2, title: 'İkinci Blog Gönderisi', content: 'Bu blog gönderisinin içeriği buraya yazılacak.' },
  { id: 3, title: 'Üçüncü Blog Gönderisi', content: 'Bu blog gönderisinin içeriği buraya yazılacak.' },
  { id: 4, title: 'Dördüncü Blog Gönderisi', content: 'Bu blog gönderisinin içeriği buraya yazılacak.' },
  // Daha fazla blog gönderisi eklemek isterseniz buraya ekleyebilirsiniz
];

// Blog sayfası bileşeni
const BlogPage = () => {
  return (
    <div>
      {/* Başlık */}
      <div> 
        <h1>Blog Yazıları</h1>
      </div>

      {/* Blog gönderilerinin listelendiği bölüm */}
      <div>
        {/* Her bir blog gönderisini BlogComponents bileşeniyle oluşturarak listeliyoruz */}
        {blogPosts.map(post => (
          <BlogComponents 
            key={post.id} // Her bir gönderinin benzersiz bir anahtarı olmalı
            description={post.content} // Gönderi içeriği
            title={post.title} // Gönderi başlığı
            id={post.id}
          />
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
