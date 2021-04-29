import React from "react";
import "./AddEdit.css"
import PropTypes from "prop-types";

const AddEdit = props => {
    return(
        <div className="add">
            <h2>Dodaj wydarzenie</h2>
            <div className="add-to-list">
                <div className="add-to-list__input">
                    <label htmlFor="name">Nazwij czynność:</label>
                    <input
                        type="text"
                        id="name"
                        name="name"
                        value={props.name}
                        onChange={e =>
                            props.onInputChange({ [e.target.name]: e.target.value})
                        }
                    />
                </div>
                <div className="add-to-list__input">
                    <label htmlFor="timestamp">Podaj deadline:</label>
                    <input
                        type="time"
                        id="timestamp"
                        name="timestamp"
                        value={props.timestamp}
                        onChange={e =>
                            props.onInputChange({ [e.target.name]: e.target.value})
                        }
                    />
                </div>
                <div className="add-to-list__input">
                    <label htmlFor="name">Opisz czynność, jeśli chcesz: </label>
                    <textarea
                        type="text"
                        id="description"
                        name="description"
                        value={props.description}
                        onChange={e =>
                            props.onInputChange({ [e.target.name]: e.target.value})
                        }
                    />
                </div>
                <button onClick={() => props.onSave()}>Zatwierdź</button>
                <button onClick={() => props.onCancel()}>Wyczyść</button>
            </div>

        </div>
    )
};

AddEdit.propTypes = {
    name: PropTypes.string,
    timestamp: PropTypes.string,
    description: PropTypes.string,
    onInputChange: PropTypes.func,
    onSave: PropTypes.func,
    onCancel: PropTypes.func
};

export default AddEdit;