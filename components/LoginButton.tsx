import React from 'react';

// LoginButton bileşeni için props tanımı
interface LoginButtonProps {
    type?: "button" | "submit" | "reset" | undefined; // Buton tipi
    fullWidth?: boolean; // Tam genişlik özelliği (isteğe bağlı)
    children?: React.ReactNode; // İçerik
    onClick?: () => void; // Tıklama işlevi (isteğe bağlı)
}

// LoginButton bileşeni
const LoginButton = ({ children, fullWidth, onClick, type }: LoginButtonProps) => {
    return (
        <button 
            // Temel stiller ve tam genişlik özelliği (varsa) ile birlikte buton sınıfını oluştur
            className={`p-3 bg-cyan-800 hover:bg-cyan-950 shadow-lg rounded-lg transition text-white ${fullWidth && "w-full"}`}
            type={type ?? "button"} // Buton tipi (eğer belirtilmemişse varsayılan değer "button" olacak)
            onClick={onClick} // Tıklama işlevi
        >
            {children} {/* Buton içeriği */}
        </button>
    );
}

export default LoginButton;
