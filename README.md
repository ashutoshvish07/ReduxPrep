

redux ->  react redux

useSelector --> whenerver we want some data from store we should use useSelector

useDispatch --> upadate/modify data

<provide store={store}> ->

ReduxDevTools -> debugging redux store isseue faster

muddleware ->  dispatch(action) ->  midleware -> reducer
logger
root reducer = comibneReducer -> helps  us to combine mutiple reducer in one object

compose =>  helps use to combine/using  multiple store enhancers 

like applymiddleware , Redux_devTools

agecy_createStore (rootreducer)


-- user clickes/ trigger  an event--. we call a action creator-> it will return an action object
-- Action object to the dispatch method , dispatch(actionObjet)
-- gose to the middleware and pass action to reducer

-- actoion gose to reducerfunction
-reducer function: some state logic and updates happens 
-- reducer function returns the new state
-- The components subscribing to the state variable re-renders





 