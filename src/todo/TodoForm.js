import { useState } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { addTodo } from "./../actions/index"


function TodoForm({ addTodo }) {
    const [text, setText] = useState("");

    const changeInputText = e => {
        setText(e.target.value);
    }

    const formSubmit = e => {
        e.preventDefault();
        if (text !== "") {
            e.preventDefault();
            // collbackFunction, store.dispatch
            (addTodo(text));

            setText("")
        }
    }

    return (

        <form onSubmit={formSubmit} className="form" >
            {  console.log(text)}
            <input
                type="text" value={text}
                onChange={changeInputText}
            />
            <button type="submit"> Add </button>
        </form>
    )
}

const mapDispatchToProps = dispatch => {
    return bindActionCreators({
        addTodo
    },
        dispatch
    )

}

export default connect(null, mapDispatchToProps)(TodoForm);