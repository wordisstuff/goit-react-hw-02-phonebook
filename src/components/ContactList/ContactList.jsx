import { Component } from "react";
import { Container } from "./ContactList.styled";


class ContactList extends Component {
    state = {
        contacts: []
    }
    contactDel = (e) => {
        this.props.delete(e.target.id)
    }
    render() {
        return (
            <>
                <Container>
                    {this.props.contactsArr &&
                        this.props.contactsArr.filter(item => item.name.toLowerCase().includes(this.props.filter.toLowerCase()))
                            .map(({ name, number, id }) => {
                                return (<div key={id} >
                                    <p>name: {name}</p>
                                    <p>number: {number}</p>
                                    <button id={id} onClick={this.contactDel}>&#9746;</button>
                                </div >)
                            })}
                </Container>
            </>
        );
    }
}


export default ContactList;