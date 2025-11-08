import React, { useState } from "react";
 export function useTheme(){
    const[theme,settheme]=useState("light")
    function themehandler(){
        settheme(theme==="light"?"dark":"light")
    }
    return {theme,themehandler}
}