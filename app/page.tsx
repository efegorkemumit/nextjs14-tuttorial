// Gerekli bileşenleri içe aktarıyoruz.
import Footer from "@/components/Footer"; // Footer bileşenini içe aktarıyoruz.
import Header from "@/components/Header"; // Header bileşenini içe aktarıyoruz.
import Hero from "@/components/Hero";
import Link from 'next/link'; // Next.js sayfalar arası gezinme için Link bileşenini içe aktarıyoruz.

// Ana bileşenimiz olan Home fonksiyonu. Bu fonksiyon, ana sayfamızı oluşturuyor.
export default function Home() {
  return (
   <>
   
   <Hero image="/slider/2.jpg" image2="2.png" title="Abone ol kardeşim" 
   description="Lorem ipsum, dolor sit amet consectetur adipisicing elit. Pariatur enim iusto minus aliquam molestiae ratione esse fugit. Atque, porro odio"></Hero>
   <div className="bg-red-600 text-4xl">
    Youtube Efe Görkem Ümit Abone Ol {/* Ana sayfa başlığı */}
   </div>

   </>
  );
}
