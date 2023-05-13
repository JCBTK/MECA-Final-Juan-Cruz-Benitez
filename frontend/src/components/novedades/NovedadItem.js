import React from 'react';

const NovedadItem = (props) => {
    const{imagen,title,subtitle, body} = props;
    return(
        <div className='novedades'>
            <img src={imagen}/>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <div dangerouslySetInnerHTML={{__html:body}}/>
            <hr/>
        </div>
    );
}

export default NovedadItem;