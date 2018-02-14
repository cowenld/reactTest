import React, { Component } from 'react';
import { Form, FormControl, Button } from 'react-bootstrap';

class App extends Component {
    constructor(){
        super();

        this.state = {
            newDate: '',
            birthday: '1992-06-21'
        }
    }

    checkState() {
        this.setState({ birthday: this.state.newDate })
        console.log(this.state);
    }

    render() {
        return (
            <div>
                <Form inline>
                    <FormControl 
                        type="date" 
                        onChange={event => this.setState({ newDate: event.target.value})}>
                    </FormControl>
                    {' '}
                    <Button onClick={() => this.checkState()}>
                        Submit
                    </Button>
                </Form>
            </div>
        )
    }
}

export default App;