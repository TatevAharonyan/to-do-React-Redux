import { ADD_TODO, CHECK_TODO, REMOVE_TODO } from "./../const/index";

const  initialState = 
     [
        {id: Math.random(),
        text:"Prepare for Session",
        check: false,
    },{ 
        id:  Math.random(),
        text: "Assign Tascks",
        check: false,
    }, {
        id:  Math.random(),
        text: "Bee there on time",
        check: false,
    } , {
        id:  Math.random(),
        text: "Start Session",
        check: false,
    }];

 
export const reducer = (state  = initialState, action) =>  {
    switch( action.type ){
        case ADD_TODO:
            return [
                 {
                    id:  Math.random(),
                    text: action.payload,
                    check: false,
                  } ,
                ...state,                  
            ];
        case CHECK_TODO:
            return state.map(item => item.id === action.payload ? {...item, check: !item.check} : item );
            
        case REMOVE_TODO:
            return state.filter(item => item.id !== action.payload );
         
        default:
            return state;
    }
}