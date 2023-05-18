import React from 'react';

const NovedadItem = (props) => {
    const{imagen,title,subtitle, body} = props;
    return(
        <div className='novedad'>
            <img src={imagen}/>
            <h1>{title}</h1>
            <h2>{subtitle}</h2>
            <p className="textonovedad" dangerouslySetInnerHTML={{__html:body}}/>
            <hr/>
        </div>
    );
}

export default NovedadItem;