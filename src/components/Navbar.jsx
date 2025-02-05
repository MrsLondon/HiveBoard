import { Link, useLocation } from "react-router-dom"; // 𝐻𝒾𝓋𝑒 𝐵𝑜𝒶𝓇𝒹

function Navbar() {
  const location = useLocation(); // Get current location to determine if we are on the home page

  return (
    <nav className="bg-purple-700 text-white px-6 py-4 flex justify-between items-center">
      {/* Logo Section */}
      <div className="flex items-center space-x-3">
        <Link to="/">
          <img
            src="/logo2.png"
            alt="App Logo"
            className="w-35 h-20 cursor-pointer" // Added cursor-pointer for better UX
          />
        </Link>
      </div>

      {/* Navigation Links */}
      <ul className="flex items-center space-x-6">
        {/* Conditionally render Home link */}
        {location.pathname !== "/home" && (
          <>
            <li>
              <Link
                to="/about"
                className="text-xl font-semibold tracking-wide hover:underline text-yellow-400"
              >
                𝐴𝒷𝑜𝓊𝓉
              </Link>
            </li>
            <li>
              <Link
                to="/home"
                className="text-xl font-semibold tracking-wide hover:underline text-yellow-400"
              >
                𝑀𝓎 𝐻𝒾𝓋𝑒
              </Link>
            </li>
          </>
        )}

        {/* Always show User Icon on Home page */}
        {location.pathname === "/home" && (
          <div className="flex items-center space-x-4">
            <span className="font-medium text-yellow-500 font-bold">𝓐𝔂𝓪𝓽</span>
            <img
              className="w-10 h-10 rounded-full border border-gray-400 object-cover"
              src="/biene_Maja.png"
            />
          </div>
        )}
      </ul>
    </nav>
  );
}

export default Navbar;
