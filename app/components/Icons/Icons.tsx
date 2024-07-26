
  import React from 'react'
  type IconProps = {
    src: string;
    alt: string;
  };
  const Icons = (props: IconProps) => {
    return (
        <img
        className="h-12 w-12 mr-2 hover:translate-y-1"
        src={props.src}
        alt={props.alt}
        loading="lazy"
      />
    )
  }
  
  export default Icons