import NavItem from "./nav-item";

export default function Nav() {
  return (
    <nav className="h-full">
      <ul className="flex h-full">
        <NavItem title="Home" active />
        <NavItem title="Product" />
        <NavItem title="Portfolio" />
        <NavItem title="Service" />
        <NavItem title="Team" />
        <NavItem title="About IR" />
      </ul>
    </nav>
  );
}
