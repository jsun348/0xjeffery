import React from 'react';
import GeoMark from './GeoMark';

const ProfileHeader = () => {
  return (
    <header className="flex items-start justify-between gap-4 pb-7 sm:gap-6">
      <div>
        <h1 className="text-4xl font-bold leading-none tracking-tight sm:text-6xl">
          <span className="text-faint">0x</span>Jeffery
        </h1>
        <p className="mt-4 text-sm text-faint">probably not cool.</p>
      </div>

      <GeoMark className="h-16 w-16 shrink-0 sm:h-24 sm:w-24" />
    </header>
  );
};

export default ProfileHeader;
