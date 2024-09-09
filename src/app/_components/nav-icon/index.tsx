export default function NavIcon() {
  return (
    <div className="relative h-4 w-4 transition duration-300 hover:cursor-pointer group-hover:rotate-45">
      <div className="absolute left-0.5 top-0.5 h-1 w-1 rounded-full bg-white transition duration-500 group-hover:left-0 group-hover:top-0"></div>
      <div className="absolute right-0.5 top-0.5 h-1 w-1 rounded-full bg-white transition duration-500 group-hover:right-0 group-hover:top-0"></div>
      <div className="absolute bottom-0.5 left-0.5 h-1 w-1 rounded-full bg-white transition duration-500 group-hover:bottom-0 group-hover:left-0"></div>
      <div className="absolute bottom-0.5 right-0.5 h-1 w-1 rounded-full bg-white transition duration-500 group-hover:bottom-0 group-hover:right-0"></div>
    </div>
  );
}
