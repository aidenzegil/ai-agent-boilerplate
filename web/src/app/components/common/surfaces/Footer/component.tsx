// useEffect requires client-side component 
"use client"

import React, { useState, useEffect } from 'react'
import s from "./styles.module.scss"
import { FooterProps } from './types'

const Footer = ({children}: FooterProps) => {
    // initialize state variables for screen position and visibility of footer
    const [prevScrollPos, setPrevScrollPos] = useState(0);
    const [visible, setVisible] = useState(true);

    // Effect hook that is triggered by component mount and changes in visibility/user scrolling
    useEffect(() => {
        // define footer visibility depending on scroll position
        const handleScroll = () => {
            const currentScrollPos = window.scrollY;
            setVisible(prevScrollPos < currentScrollPos);
            setPrevScrollPos(currentScrollPos);
        };

        // event listener that calls handleScroll function on user scroll
        window.addEventListener('scroll', handleScroll);

        // remove event listener whenever component unmounts
        return () => window.removeEventListener('scroll', handleScroll);
    }, [prevScrollPos, visible]);


  return (
    // class logic applies the hidden class if visibility is false
    <div className={`${s.container} ${!visible && s.hidden}`}>
        { children }
    </div>
  )
}

export default Footer