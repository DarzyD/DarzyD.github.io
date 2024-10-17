import React from 'react'
  type IconProps = {
    src: string;
    alt: string;
    size?: string;
  };
  const Icons = (props: IconProps) => {
    return (
        <img
        className={`mr-2 hover:translate-y-1 ${props.size ? props.size : "h-12 w-12"}`}
        src={props.src}
        alt={props.alt}
        loading="lazy"
      />
    )
  }
  
  export default Icons