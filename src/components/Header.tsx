import Image from "next/image";

import cart from "../../public/cart.png";
import logo from "../../public/Logo.svg";

export default function Header() {
  return (
    <header className="flex w-full h-[152px]">
      <div className="flex w-full container m-auto">
        <div className="flex w-full justify-between items-center">
          <Image src={logo} alt="ignite shop" />

          <div className="w-[48px] h-[48px] bg-gray-200 rounded-lg flex justify-center items-center">
            <Image src={cart} alt="carrinho" />
          </div>
        </div>
      </div>
    </header>
  );
}
