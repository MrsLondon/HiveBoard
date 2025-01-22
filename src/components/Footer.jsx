import React from "react";

const Footer = () => {
  return (
    <div className="bg-purple-700 w-full h-12 flex justify-center items-center">
      <div className="flex items-center space-x-2 text-slate-50">
        <p className="text-sm">Made with ❤️ by</p>
        <a
          href="https://github.com/MrsLondon/HiveBoard"
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center"
        >
          <img
            className="w-8 h-8 rounded-full border border-slate-300"
            src="https://avatars.githubusercontent.com/u/9919?v=4"
            alt="GitHub Avatar"
          />
        </a>
      </div>
    </div>
  );
};
export default Footer;
