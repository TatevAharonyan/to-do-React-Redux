import { Component } from "react";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";
import { checkTodo, removeTodo } from "./../actions/index"


    class TodoList extends Component {
        
render (){
    return (
        <div className="list" >


            {
                this.props.state.map((todo) => {
                    console.log (todo)
                    return (
                        <div  key={todo.id}
                        className = { todo.check ? "item_true" : "item_false" }
                          >

                            <div 
                            className = { todo.check ? "check_true" : "check_false"}
                            onClick = { () => this.props.checkTodo(todo.id) }
                            >

                            </div>
                                <del 
                                style = {{color : `${todo.check ?  "#01a322" : "transparent" }`}}
                                >
                                    <p> {todo.text} </p>
                                </del>
                            <div 
                            className="delete_item" 
                            onClick = { () => this.props.removeTodo(todo.id)}
                            >
                                X
                            </div>

                        </div>

                    )
                })
            }

        </div>
    )
}
}

const mapStateToProps = state => {
    return {
        state,
    }
}

const mapDispatchToProps = dispatch => {
    return  bindActionCreators ({
        checkTodo,
        removeTodo,
    }, 
    dispatch
    )
}

export default connect(mapStateToProps, mapDispatchToProps)( TodoList);