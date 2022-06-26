import React, { useState } from "react";

const useToggleState = (INITIAL_STATE = false) => {
    const [state, setState] = useState(INITIAL_STATE);
    const toggleState = () => {
        setState(state => !state)
    }; 

    return [state, toggleState]
};

export default useToggleState; 


//  MAKING PIECE OF STATE - STARTS AS TRUE / FALSE

//  MAKING A FUNCTION TO TOGGLE STATE FROM T-F / F-T

//  const [isHappy, setIsHappy] = useState(true)
//  const [isDarkMode, setIsDarkMode] = useState(false)
//  const toggleMood = () => {
//      setIsHappy(mood => !mood)
//  }

//  const toggleIsDarkMode = () => {
//      setIsDarkMode(mode => !mode)
//  }