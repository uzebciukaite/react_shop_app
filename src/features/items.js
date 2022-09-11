import { createSlice } from "@reduxjs/toolkit";
import data from "../assets/furniture"
import {getColorList, getFurnList, getPriceCategories, discounts} from "../assets/dataInfo"


export const itemsSlice = createSlice({
    name: "items",
    initialState: {
        value: {
            allProducts: data,
            filteredProducts: [],
            categories: getFurnList(),
            colors: getColorList(),
            priceRange: getPriceCategories(),
            randomItems: [],
            biggestDiscounts: discounts()

        }
    },
    reducers: {
        // getallItems: (state, action) => {
        //     state.value.allProducts = [...action.payload]
        //     console.log(state.value.allProducts)
        // },
        // homePageItems: (state, action) => {

        // },
        randomItems: (state, action) => {
            const currentItem = action.payload
            const newArr = [...state.value.allProducts]

            state.value.randomItems = newArr.filter(x => x.category === currentItem.category &&  x.id !== currentItem.id).sort((a, b) => 0.5 - Math.random()).splice(0, 4)
        
        },
        sortItems: (state, action) => {
            const sortType = action.payload
            const newArr = [...state.value.allProducts]
            const filteredArr = [...state.value.filteredProducts]
            if(sortType === "lowtoHigh"){
                if(filteredArr.length > 0) {
                  state.value.filteredProducts = filteredArr.sort((x, y) => y.price - x.price) 
                } else {
                     state.value.allProducts = newArr.sort((x, y) => y.price - x.price)
                }
             
            } else {
                if(filteredArr.length > 0){
                    state.value.filteredProducts = filteredArr.sort((x, y) => x.price - y.price)
                } else {
                     state.value.allProducts = newArr.sort((x, y) => x.price - y.price)
                }
           
            }
        },
        filterItems: (state, action) => {
            const filterValues = action.payload 

            const newArr = [...state.value.allProducts]
            const newfilteredArr = [...state.value.filteredProducts]

            
            if(filterValues.key === "category"){
                if(filterValues.type === "all"){
                    state.value.filteredProducts = [...state.value.allProducts]
                } else {
                    state.value.filteredProducts = newArr.filter(x => x.category === filterValues.type)
                }
                
            }
            if(filterValues.key === "colors"){
                state.value.filteredProducts = newArr.filter(x => x.color === filterValues.type)
            }
            if(filterValues.key === "price"){
                state.value.filteredProducts = newArr.filter(x => x.price > filterValues.type[0] && x.price < filterValues.type[1])
            }

            

            

            
        },

        
    }

})

export const {getallItems, randomItems, sortItems, filterItems} = itemsSlice.actions


export default itemsSlice.reducer