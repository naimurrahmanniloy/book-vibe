import React from "react";

const ErrorPage = () => {
  return (
    <div>
      <div className="min-h-screen bg-[#0f172a] flex items-center justify-center p-5 font-sans">
        {/* Background Decorative Blobs */}
        <div className="absolute top-20 left-20 w-64 h-64 bg-purple-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
        <div className="absolute bottom-20 right-20 w-64 h-64 bg-blue-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>

        <div className="relative backdrop-blur-lg bg-white/10 border border-white/20 p-12 rounded-3xl shadow-2xl max-w-lg w-full text-center">
          {/* 404 Glow Text */}
          <h1 className="text-9xl font-black text-transparent bg-clip-text bg-linear-to-br from-white to-gray-500 opacity-50 select-none">
            404
          </h1>

          <div className="-mt-10">
            <h2 className="text-3xl font-bold text-white mb-4">
              Lost in Space?
            </h2>
            <p className="text-gray-400 mb-8 leading-relaxed">
              The page you're looking for has drifted out of orbit. Let's get
              you back to mission control.
            </p>

            {/* Action Buttons */}
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href="/"
                className="px-8 py-3 bg-white text-black font-semibold rounded-xl hover:bg-opacity-90 transition-all duration-300 shadow-lg shadow-white/10"
              >
                Back Home
              </a>
              <button
                onClick={() => window.location.reload()}
                className="px-8 py-3 bg-transparent border border-white/20 text-white font-semibold rounded-xl hover:bg-white/5 transition-all duration-300"
              >
                Retry Load
              </button>
            </div>
          </div>

          {/* Subtle Footer Link */}
          <p className="mt-12 text-xs text-gray-500 uppercase tracking-widest">
            Error Code: ERR_PAGE_NOT_FOUND
          </p>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
