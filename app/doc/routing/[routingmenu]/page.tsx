import React from 'react'

// Doc/routing/[????] Sayfa bileşeni, kullanıcı panelinin belirli bir rota menüsü öğesinin içeriğini oluşturur.
// Örneğin, http://localhost:3000/doc/routing/??????, dinamik bir sayfadır ve rota menüsü öğesini temsil eder.

const page = ({params}) => {
  return (
    <div>Raouting Menü öğesi: {params.routingmenu}</div>
  )
}

export default page
