export default function ({dispatch}){
    return next => action => {
        if(!action.payload || !action.payload.then){
            return next(action);
        }

        action.payload
            .then(response => {
                //substituindo a promisse pelos dados do respomse
                const newAction = {...action, payload: response.data};
                //disparando a action com os dados
                dispatch(newAction);
            })
    }
}