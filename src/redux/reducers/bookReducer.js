import { ADD_BOOK_TO_USER_LIST, FETCH_BOOKS_FAILURE, FETCH_BOOKS_REQUEST, FETCH_BOOKS_SUCCESS } from "../actions/booksActions"

const initState={
    books:JSON.parse(localStorage.getItem("user"))||[],
    laoding:false,
    error:null
}
export const booksReducer=(state=initState,action)=>{
    switch(action.type){
        case FETCH_BOOKS_REQUEST:
            return{
                ...state, loading:true
            }
            case FETCH_BOOKS_SUCCESS:
                return{
                    ...state, books:action.payload, loading:false
                }
                case FETCH_BOOKS_FAILURE:
                    return{
                        ...state, error:action.paylaod
                    }
                    case ADD_BOOK_TO_USER_LIST:
                        localStorage.setItem("books", JSON.stringify(action.payload))
                     //  return{...state, books:action.paylaod}
                     return {...state, books:[...state.books,...action.paylaod]}
                        
                    default:
                        return state;
    }
}