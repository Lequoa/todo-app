import React from 'react';


const ErroHandler = (props) => {
    return (
        <p className="alert alert-danger alerterror"> { props.error }</p>
    );
    
}

export default ErroHandler;