import React from 'react'; 

class TodoForm extends React.Component {
    //WHENEVER USER TYPES INTO FIELD IT SHOWS UP ON TODO LIST! we need constructor
    constructor(){
        super();
        this.state = {
            input: ''
        }
    }
    handleSubmit = (e) => {
        e.preventDefault();
        this.props.handleAdd(this.state.input);
        console.log('click adding')
    }
    //part of setting state to whatever user inputs. STEP 1: constructor!^ Step 2: below: handlechange in input.
    handleChange = (e) => {
        this.setState({
            ...this.state,
            input: e.target.value
        });
    }
    render() {
        return(
            <form>
                <input onChange={this.handleChange} />
                <button onClick={this.handleSubmit}>Add!</button>
            </form>
        )
    }
}

export default TodoForm;