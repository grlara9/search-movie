export const initialState ={
    loading: true,
    movies:[],
    errorMsj: null,
    like:[]
}

 export const reducer = (state, action) =>{
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

                case "ADD_TO_FAVORITES":
                    return{
                        ...state,
                        like: action.value
                    };    
                    default:
                        return state;
    }
}
