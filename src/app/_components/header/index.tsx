import MenuIcon from "~/components/icons/menu-icon";
import Nav from "./nav";

export default function Header() {
  return (
    <header className="flex w-full justify-center border-b border-b-[#6E6E6E]">
      <div className="flex h-14 w-full max-w-screen-xl items-center justify-between">
        <div className="font-rubik text-4xl font-bold">IR</div>

        <Nav />
        <div className="flex h-10 w-10 items-center justify-center rounded-full bg-white/5 hover:cursor-pointer">
          <MenuIcon />
        </div>
      </div>
    </header>
  );
}
