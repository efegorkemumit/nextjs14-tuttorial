import Image from "next/image"; // Next.js'de resim optimizasyonu için Image bileşenini içe aktarıyoruz.
import Link from 'next/link'; // Next.js'de sayfalar arası gezinme için Link bileşenini içe aktarıyoruz.

// Ana bileşenimiz olan Home fonksiyonu. Bu fonksiyon, ana sayfamızı oluşturuyor.
export default function Home() {
  return (
   <>
   {/* Ana sayfanın üst kısmı için bir kapsayıcı div. */}
   <div className="bg-red-600 text-4xl">
    Youtube Efe Görkem Ümit Abone Ol {/* Bir başlık veya metin */}
   </div>

   {/* Ana sayfanın içeriğini belirten bir div. */}
   <div>Home </div>

   {/* Ana sayfanın alt kısmı için bir kapsayıcı div ve içinde Link bileşenleri ile sayfalar arası gezinme bağlantıları */}
   <div className="flex gap-8">
     {/* Home sayfasına yönlendiren bir Link */}
     <Link href="/">Home</Link>
     {/* Dashboard sayfasına yönlendiren bir Link */}
     <Link href="/dashboard">Dashboard</Link>
     {/* Product sayfasına yönlendiren bir Link */}
     <Link href="/product">Product</Link>
   </div>
   </>
  );
}