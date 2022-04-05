import { createSlice } from '@reduxjs/toolkit';
import { toast } from 'react-toastify';

export const compareSlice = createSlice({
    name: 'compare',
    initialState: {
        compareList: typeof window !== 'undefined' && localStorage.getItem("compareListItems") ? JSON.parse(localStorage.getItem('compareListItems') || '{}') : [],
        compareListTotal: 0,
        compareListTotalQuantity: 0
    },
    reducers: {
        addToCompareList: (state, { payload }) => {
            const itemIndex = state.compareList?.findIndex(item => item._id === payload._id);

            if (itemIndex >= 0) {
                toast.error(`Already In compareList`, {
                    position: 'bottom-left'
                });
            } else {
                const newCart = { ...payload }
                state.compareList.push(newCart)
                toast.success(`Product added to compareList`, {
                    position: 'bottom-left'
                })
            }

            localStorage.setItem("compareListItems", JSON.stringify(state.compareList));
        },
        removeCompareItem: (state, { payload }) => {
            const newItems = state.compareList.filter(item => item._id !== payload)
            state.compareList = newItems
            localStorage.setItem("compareListItems", JSON.stringify(state.compareList));
            toast.error(`Product removed from compareList`, {
                position: 'bottom-left'
            })
        },
        clearCompareList(state) {
            state.compareList = []
            state.compareListTotal = 0
            localStorage.setItem("compareListItems", JSON.stringify(state.compareList));
        }
    },
})

// Action creators are generated for each case reducer function
export const { addToCompareList, removeCompareItem, clearCompareList } = compareSlice.actions;

export default compareSlice.reducer;