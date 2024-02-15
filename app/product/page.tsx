import React from 'react'; // React'i içe aktarıyoruz.
import Link from 'next/link'; // Next.js'de sayfalar arası gezinme için Link bileşenini içe aktarıyoruz.

// `page` adında bir fonksiyon bileşeni oluşturuyoruz.
const page = () => {
  return (
    <div>
      {/* Sayfanın başlık kısmı */}
      <div>Product</div>

      {/* Sayfanın içeriğini belirleyen bir `div` bileşeni */}
      <div className="flex gap-8">
        {/* Sayfalar arası gezinme bağlantıları */}
        <Link href="/">Home</Link>
        <Link href="/dashboard">Dashboard</Link>
        <Link href="/product">Product</Link>
      </div>
    </div>
  );
}

export default page; // `page` fonksiyon bileşenini dışa aktarıyoruz.
