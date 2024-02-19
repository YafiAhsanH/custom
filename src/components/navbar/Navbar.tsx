import NavLinks from "./NavLinks";
import CartIcon from "./CartIcon";

const Navbar = () => {
  return (
    <div className="py-5 px-10 flex justify-between items-center text-my-black-100">
      <p className=" text-3xl font-thin hover:cursor-pointer border-y-2 border-my-blue-200 px-2">CUSTOM</p>
      <div className="flex flex-1 px-10 justify-start gap-8 font-medium text-gray-500">
        <NavLinks>Categories</NavLinks>
        <NavLinks>About</NavLinks>
        <NavLinks>Help</NavLinks>
      </div>
      <CartIcon />
    </div>
  );
};

export default Navbar;
