import React from 'react';

// Bu bileşen, URL'deki "page" parametresini alır ve sayfanın numarasını gösterir.
const Page = ({ params }) => {
  console.log(params);

  return (
    <div>page {params.page}</div>
  );
};

export default Page;

// Bu bileşen, belirli bir yol yapılandırmasına göre birden fazla sayfa yönlendirmesini ele alır.
// Bu örnekte, "/Catch/[...page]/page.tsx" yolunu ele alır.
// "Catch" bileşeninin içeriğine göre, gelen yol "[...page]" parametresiyle temsil edilir.
// Bu, bir dizi olarak tüm yol segmentlerini temsil eder.
// Örneğin, "/Catch/1/2/3" URL'si "[1, 2, 3]" dizi parametresini alır.
// Bu, "1" sayfasının altındaki "2" sayfasının altındaki "3" sayfasına karşılık gelir.
// "[...page]" yapılandırması, bir dizi içinde herhangi bir sayıda yol segmentini ele almanıza olanak tanır.
// Bu, dinamik ve genişletilebilir yol yapılandırmaları için kullanışlıdır.
// Bu bileşen, "[...page]" parametresini "Page" bileşenine ileterek, herhangi bir alt sayfa düzenlemesi sağlar.
