import React from 'react'
import "./link.scss";

const Link = ({tittle, onClick}) => {
    return (
        <div>
            <p className="link" onClick={onClick}>{tittle}</p>
        </div>
    )
}

export default Link
