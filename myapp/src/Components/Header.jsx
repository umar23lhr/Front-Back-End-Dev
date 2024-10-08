import React from 'react'
import Gallery from './gallery'
export const Header = () => {
    let image = 5
    return (
        <>
            <div>
            <h1>This is Header</h1>
            <p>This is Header Componant</p>

            <Gallery/>
            </div>
        </>

    )
}
export default Header