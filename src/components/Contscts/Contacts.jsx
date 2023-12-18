import { Component } from "react";
import { Container } from "./Contacts.styled";


class Contacts extends Component {
    state = {
        name: '',
        filter: ''

    }
    handleFilter = ({ target }) => {
        this.props.contactFilter({ name: target.value })
        this.setState({
            name: target.value,
        })
    }
    render() {
        return <>
            <Container>
                <h2>contacts</h2>
                <div>
                    <label htmlFor="cname">find contacts by name</label>
                    <input name="name" onChange={this.handleFilter} value={this.state.name} type="text" placeholder="Contact Name.." required />
                </div>
                <>
                    {/* <ul>hoo
                        {this.props.contactsArr && this.props.contactsArr.map(({ name, number, id }) => {
                            return <li key={id}>
                                <p>name: {name}</p>
                                <p>number: {number}</p>
                            </li>
                        }
                        )}
                    </ul> */}
                </>
            </Container>
        </>
    }
}

export default Contacts;