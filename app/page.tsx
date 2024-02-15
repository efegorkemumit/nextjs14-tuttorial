// Gerekli bileşenleri içe aktarıyoruz.
import Footer from "@/components/Footer"; // Footer bileşenini içe aktarıyoruz.
import Header from "@/components/Header"; // Header bileşenini içe aktarıyoruz.
import Link from 'next/link'; // Next.js sayfalar arası gezinme için Link bileşenini içe aktarıyoruz.

// Ana bileşenimiz olan Home fonksiyonu. Bu fonksiyon, ana sayfamızı oluşturuyor.
export default function Home() {
  return (
   <>
   
   <div className="bg-red-600 text-4xl">
    Youtube Efe Görkem Ümit Abone Ol {/* Ana sayfa başlığı */}
   </div>

   </>
  );
}
