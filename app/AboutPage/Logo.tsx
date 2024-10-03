import React from 'react';
import { Brand, techStack } from './TechStackData';

type Size = 'small' | 'medium' | 'large';

interface SizeProps {
  [key: string]: string;
}

interface LogoProps {
  brand?: Brand;
  size?: Size;
}

export let brand: Brand = 'AWS';
export let size: Size = 'small';


const width = { small: '18', medium: '30', large: '42' } as SizeProps;
const height = { small: '20', medium: '30', large: '40' } as SizeProps;

const Logo:  React.FC<LogoProps> = ({ brand = 'AWS', size = 'medium' }) => {
  const logo = techStack[brand];
  const imageUrl = logo.imageURL;
return (
    <div className="relative group bg-white">
      <img
        src={imageUrl}
        alt={brand}
        width={width[size]}
        height={height[size]}
        className="relative z-10 bg"
      />
      <div className="absolute top-0 sm:-right-20 md:-right-1 lg:-right-1 group-hover:block pt-6 pr-1 hidden z-20">
        <div className="bg-gray-200 px-1 py-0.5">
          <p className="text-sm font-medium text-black">{brand}</p>
        </div>
      </div>
    </div>
  );
}

export default Logo;