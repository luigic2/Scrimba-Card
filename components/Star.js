import React from "react"


export default function Star(prop) {

    /**
     * Challenge: Move the star image into its own component (Star)
     * - It should receive a prop called `isFilled` that it
     *   uses to determine which icon it will display
     * - Import and render that component, passing the value of
     *   `isFavorite` to the new `isFilled` prop.
     * - Don't worry about the abiliity to flip this value quite yet.
     *   Instead, you can test if it's working by manually changing
     *   `isFavorite` in state above.
     */
  
  
 
    
    return (
                    <img 
                        src={`../images/${prop.isFilled}`} 
                        className="card--favorite"
                        onClick={prop.click}
                         />
                   
    )
 }
