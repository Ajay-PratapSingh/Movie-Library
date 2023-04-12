import { configureStore, createSlice } from "@reduxjs/toolkit";

const initialState={favourites:[]};
const initialModalState={modalTitle:"",modalDescription:"",modalPoster:"",modalReleasedate:"",modalRating:""};

const favouriteSlice=createSlice({
    name:'favourites',
    initialState: initialState,
    reducers:{
        addFavorite(state, action){
            if(!state.favourites.includes(action.payload.name)){
            state.favourites=[...state.favourites, action.payload.name];
            }
        },
        removeFavorite(state, action) {
            state.favorites = state.favourites.filter(movie => movie.id !== action.payload.id);
        },
    }
})

const modalSlice=createSlice({
    name:'modal',
    initialState: initialModalState,
    reducers:{
        setModal(state, action){
            state.modalId=action.payload.id;
            state.modalTitle=action.payload.title;
            state.modalDescription=action.payload.description;
            state.modalPoster=action.payload.poster;
            state.modalReleasedate=action.payload.releasedate;
            state.modalRating=action.payload.rating;
        } 
    }
})

const store=configureStore({
    reducer:{favourites:favouriteSlice.reducer,modal:modalSlice.reducer}
});

export const favouriteActions=favouriteSlice.actions;
export const modalActions=modalSlice.actions;
export default store;