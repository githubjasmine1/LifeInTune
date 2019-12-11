import React from 'react'

import Link from './Link'

const ButtonLink = ({ as: As = Link, className, icon, children, ...props }) => {
  return (
    <As
      className={`flex items-center relative py-2 px-10 font-display font-hariline text-sm leading-relaxed uppercase rounded-full hover:text-white ${className}`}
      css={{
        backgroundSize: '500% 100%',
        backgroundPosition: '100% center',
        backgroundImage:
          'linear-gradient(to right, #91742d 7%, #fffea6 24.5%, #91742d 47%, #91742d 50%, transparent 60%, transparent 120%)',
        transition: 'color 1s, background-position 1s, background-size .8s',
        transitionTimingFunction: 'cubic-bezier(0.76, 0.01, 0.19, 0.99)',
        ':hover': {
          backgroundSize: '200% 100%',
          backgroundPosition: '0% center',
          borderColor: 'transparent',
        },
      }}
      {...props}
    >
      <div
        className="w-full h-full absolute top-0 left-0 border border-solid rounded-full pointer-events-none"
        css={{
          borderColor: 'currentColor',
          transition: '.7s .4s',
          transform: 'scale(1.001)',
          '*:hover > &': {
            opacity: 0,
            transform: 'scale(1.1)',
            transition: '.5s cubic-bezier(0.76, 0.01, 0.19, 0.99)',
          },
        }}
      ></div>
      {children}
      {icon}
    </As>
  )
}

export default ButtonLink
