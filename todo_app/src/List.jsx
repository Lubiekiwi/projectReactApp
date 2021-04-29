import React from "react";
import "./List.css"
import Info from "./Info";
import PropTypes from "prop-types";

import "./../node_modules/semantic-ui-css/semantic.css";

const List = (props) => (
    <div className="list">
        <div className="list__countdown">
            <p><strong>{props.name},</strong> wykonać do: {props.timestamp}</p>
        </div>
        <div className="list__icons">
            <i className="icon edit" onClick={() => props.onEditEvent(props.id)} />
            <i className="icon times" onClick={() => props.onRemove(props.id)} />
        </div>
        <Info>
            <h1>{props.name}</h1>
            <p>{props.description}</p>
        </Info>
    </div>
)

List.propTypes = {
    name: PropTypes.string,
    timestamp: PropTypes.string,
    description: PropTypes.string,
    onEditInit: PropTypes.func,
    onRemove: PropTypes.func
  };

export default List;