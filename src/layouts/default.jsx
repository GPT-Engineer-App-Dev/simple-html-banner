import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-grow overflow-auto">
        <Outlet />
      </main>
    </div>
  );
};

const Header = () => {
  return (
    <header className="sticky top-0 flex items-center justify-between bg-gray-800 text-white p-4">
      <div className="text-xl font-bold">Logo</div>
      <nav className="space-x-4">
        <a href="/" className="hover:text-gray-400">Home</a>
        <a href="/about" className="hover:text-gray-400">About</a>
        <a href="/contact" className="hover:text-gray-400">Contact</a>
      </nav>
    </header>
  );
};

export default Layout;