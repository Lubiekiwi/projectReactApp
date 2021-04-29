import React, { Component } from "react";
import uniqid from "uniqid";

import List from "./List";
import AddEdit from "./AddEdit";
import "./Todo.css"


class Todo extends Component {
    constructor() {
        super();

        this.state = {
            events: [],
            editedEvent: { id: uniqid(), name: "", timestamp: "", description: ""}
        };

        this.handleAddEdit = this.handleAddEdit.bind(this);
        this.handleSaveEvent = this.handleSaveEvent.bind(this);
        this.handleEditEvent = this.handleEditEvent.bind(this);
        this.handleRemoveEvent = this.handleRemoveEvent.bind(this);
    }

    // funkcja dodająca nowe wydarzenie do tablicy
    handleAddEdit(val) {
        this.setState(prevState => {
            return {
                editedEvent: Object.assign(prevState.editedEvent, val)
            }
        })
    }

    //funkcja zatwierdzająca nowe dane i podmiana elementów juz istniejących w wydarzeniach
    handleSaveEvent() {
        this.setState(
            prevState => {
                const editedEventExists = prevState.events.find(
                    el =>el.id === prevState.editedEvent.id
                );

                //podmiana elementów
                let updatedEvents;
                if (editedEventExists) {
                    updatedEvents = prevState.events.map(el => {
                        if (el.id === prevState.editedEvent.id) return prevState.editedEvent;
                        else return el;
                    });
                } else {
                    updatedEvents = [...prevState.events, prevState.editedEvent]
                }
                return {
                    events: updatedEvents,
                    editedEvent: {
                        id: uniqid(),
                        name: "",
                        timestamp: "",
                        description: ""
                        }
                };
            },
            () => localStorage.setItem("events", JSON.stringify(this.state.events))
        );
    }

    //funkcja czyszczca pola
    handleEditCancel() {
        this.setState({
            editedEvent: {
                id: uniqid(),
                name: "",
                timestamp: "",
                description: ""
            }
        })
    }

    //edycja już istniejących wydarzeń
    handleEditEvent(id) {
        this.setState(prevState => ({
            editedEvent: {...prevState.events.find(el => el.id === id)}
        }));
    }

    //kasowanie istniejących wydarzeń
    handleRemoveEvent(id) {
        this.setState(
            prevState => ({
                events: prevState.events.filter(el => el.id !==id) 
        }),
            () => localStorage.setItem("events", JSON.stringify(this.state.events))
        );
    }

    render() {
        const events = this.state.events.map(el =>{
            return<List 
            key={el.id}
            id={el.id}
            name={el.name}
            timestamp={el.timestamp}
            description={el.description}
            onEditEvent={id => this.handleEditEvent(id)}
            onRemove={id => this.handleRemoveEvent(id)}
            />
        });
    return (
        <div className="todo">
            <div className="list__header">
                <h1>Moja ToDo lista</h1>
            </div>
            {events}
            <AddEdit
                name={this.state.editedEvent.name}
                timestamp={this.state.editedEvent.timestamp}
                description={this.state.editedEvent.description}
                onInputChange={val => this.handleAddEdit(val)}
                onSave={() => this.handleSaveEvent()}
                onCancel={() => this.handleEditCancel()}
            />
        </div>
        )
    }
}

export default Todo;