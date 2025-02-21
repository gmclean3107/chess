import React from "react";
import "./Tile.css";

const Tile = (props) => {
    return (
        <div className={props.class}>
            {props.imgLoc && <img className="piece-img" src={props.imgLoc} />}
        </div>
    );
};

export default Tile;
