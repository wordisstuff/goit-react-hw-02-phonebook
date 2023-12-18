import { Component } from "react";
import { Container } from "./FormContact.styled";

class FormContact extends Component {
    state = {
        name: '',
        number: ''
    }
    handleChenge = ({ target }) => {
        this.setState({
            [target.name]: target.value
        })
    }
    handleSubmit = (e) => {
        e.preventDefault()
        this.props.createUser({
            name: this.state.name,
            number: this.state.number
        })
        this.setState({
            name: '',
            number: ''
        })
    }
    render() {
        return <>
            <Container className="container">
                <form onSubmit={this.handleSubmit}>
                    <h1>phonebook</h1>
                    <div>
                        <label htmlFor="cname">name</label>
                        <input name="name" onChange={this.handleChenge} value={this.state.name} type="text" placeholder="Contact Name.." required />
                    </div>
                    <div>
                        <label htmlFor="cnumber">number</label>
                        <input name="number" onChange={this.handleChenge} value={this.state.number} type="tel" placeholder="Phone Number.." required />
                    </div>
                    <button type="submit">Add contact</button>
                </form>
            </Container>
        </>
    }
}

export default FormContact