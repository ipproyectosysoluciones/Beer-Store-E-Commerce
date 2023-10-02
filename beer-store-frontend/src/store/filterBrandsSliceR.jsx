// import {createAsyncThunk, createSlice} from "@reduxjs/toolkit";
// import axios from '../tools/axiosInstance';

// export const brandsFilter = createAsyncThunk(
//     '/brands/brandsFilter',                     //nombre de la accion
//     async() => {
//       try {
//         const response = await axios.get('/api/brands?filters[name][$eqi]=${name}',{
//           headers:{
//             Accept: 'application/json',
//           },
//         });
  
//         return response.data;
        
//       } catch (error) {
//         throw new Error (error.response.data.message);      
//       }
//     }
//   );

//   const brandsSlice = createSlice({
//     name: 'brands',
//     initialState: {
//       brands: [],
//     },
//     extraReducers: (builder) => {
//       builder
//         .addCase(brandsFilter.fulfilled, (state, action) => {
//           state.brands = action.payload;
//         });
//     },
//   });
  
//   export default brandsSlice.reducer;
//88888888888888888888888888888888888888888888888
// import { createSlice } from "@reduxjs/toolkit";
// import axios from '../tools/axiosInstance';

// export const priceSlice = createSlice({
//   name:"price",
//   initialState:{
//     list: [],
//   },
//   reducers: {
//     setPriceList: (state, action)=>{               //es la accion q recibe el state de 42, es la q coneceta fetchAllPrice con  list:[]
//       state.list = action.payload;                 //y luego exporto ese state con su nueva info q me llega x payload al .then de fetchAllPrice
//     }
//   },
// });

// export const { setPriceList} = priceSlice.actions;    //ahora ya me queda visible para importarla dentro del .then del fetchAllPrice

// export default priceSlice.reducer;

// export const fetchAllPrice = () => (dispatch) =>{
//   axios
//   .get("http")
//   .then((response)=>{
//    dispatch(setPriceList(response.data.data));   // aqui le paso la ccion q quiero despachar:ejecuta esa accion con los datos q recibe de la consulta de as api y se los pasa en la accion de 46 y entra x payload y queda asignado al state de list y quedan guardados asi en la list:[]
//   })
//   .catch((error)=> console.log(error));
// };

