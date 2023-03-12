import React from 'react';

function Footer()
{
    const yr= new Date().getFullYear();
    return(
        <footer>
         copyright © {yr}   
        </footer>
    )
}
export default Footer;
