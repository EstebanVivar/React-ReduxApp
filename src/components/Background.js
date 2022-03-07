import React from 'react';

const Background = ( { children } ) =>
{
    return (
       
        <body className="bg-slate-300 dark:bg-slate-900 transition-colors ">
            {children}
        </body>
    )
}

export default Background;