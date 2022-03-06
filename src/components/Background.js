import React from 'react';

const Background = ( { children } ) =>
{
    return (
       
        <body className="bg-white dark:bg-black transition-colors">
            {children}
        </body>
    )
}

export default Background;