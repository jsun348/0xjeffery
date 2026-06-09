import '../App.css';
import React from 'react';

// Warm, minimalist page: a centered "sheet" column framed with hairlines on a dotted-paper backdrop.
const Layout = ({ children }) => {
  return (
    <div className="min-h-screen overflow-x-hidden animate-fade-up">
      <div className="mx-auto max-w-4xl px-4 py-10 sm:px-6 sm:py-14">
        <div className="frame relative bg-paper px-2 sm:border-x sm:border-line sm:px-12">
          <main className="py-2">{children}</main>

          <footer className="mt-16 flex items-center justify-between border-t border-line pt-5 text-xs text-faint">
            <span>© {new Date().getFullYear()} Jeffery Sun</span>
            <span className="tracking-[0.15em]">0x · jeffery</span>
          </footer>
        </div>
      </div>
    </div>
  );
};

export default Layout;
