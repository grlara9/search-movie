


export const initialState ={
    loading: true,
    movies:[],
    errorMsj: null
}

 const reducer = (state, action) =>{
     console.log(action)
    switch (action.type){
        case "SEARCH_MOVIE_REQUEST":
            return{
                ...state,
                loading: true,
                errorMsj: null
            };
            case "SEARCH_MOVIES_SUCCESS":
                return{
                    ...state,
                    loading: false,
                    movies: action.payload

                };
                case "SEARCH_MOVIES_FAILURE":
                    return{
                        ...state,
                        loading: false,
                        errorMsj: action.error
                    };
                    default:
                        return state;
    }
}
export default reducer