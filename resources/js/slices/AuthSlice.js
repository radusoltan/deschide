import { createSlice,createAsyncThunk, createAction } from '@reduxjs/toolkit'
const initialState = {
    isAuthenticated: false,
    isFetching: false,
    isSuccess: false,
    isError: false,
    user: '',
    errorMessage: '',
    authErrors: {}
}

export const authUser = createAsyncThunk(
    'user/login',
    async({email,password}, thunkAPI) =>{
        try {
            const response = await axios.post('login',{email, password})

            console.log('authUser response', response)

            if (response.status === 200){
                localStorage.setItem('token', response.data.token)
            } else {
                return thunkAPI.rejectWithValue(response.data)
            }
            return {...response.data}
        } catch (e) {
            console.log('authUser e', e)
            return thunkAPI.rejectWithValue(e.response.data)
        }
    }
)

export const logoutUser = createAsyncThunk('user/logout',
    async ({},thunkAPI) =>{
        try {
            const response = await axios.post('logout',{},{
                headers: {
                    Authorization: 'Bearer '+ localStorage.getItem('token')
                }
            })
            console.log('logoutUser response',response)
            if (response.status === 200){
                localStorage.removeItem('token')
                return response.data
            }
        } catch (e) {
            console.log('logoutUser error',e.response)
            localStorage.removeItem('token')
            return thunkAPI.rejectWithValue(e.response)
        }
    }
)

export const AuthSlice = createSlice({
    name: 'AuthUser',
    initialState,
    reducers: {
        clearState: (state) => {
            state.isError = false
            state.isAuthenticated = false
            state.isFetching = false
            state.errorMessage = ''

            return state
        }
    },
    extraReducers: {
        [authUser.fulfilled]: (state,{payload})=>{
            console.log('authUser fulfilled', payload)
            state.isFetching = false
            state.isAuthenticated = true
            state.isSuccess = true
            return state
        },
        [authUser.rejected]: (state,{payload})=>{
            console.log('authUser rejected', payload)
            state.isSuccess = false
            state.isError = true
            state.isFetching = false
            state.errorMessage = payload.message
            state.authErrors = payload.errors
        },
        [authUser.pending]: (state)=>{
            state.isFetching = true
        },
        [logoutUser.fulfilled]: (state,{payload})=>{
            console.log('logoutUser fulfilled', payload)
            state.isFetching = false
            state.isError = false
            state.errorMessage = ''
            state.authErrors = {}
            state.isAuthenticated = false
            return state
        },
        [logoutUser.pending]: state=>{
            state.isFetching = true
        },
        [logoutUser.rejected]: (state,{payload})=>{
            console.log('logoutUser rejected', payload)
            state.isFetching = false
            state.isError = false
            state.errorMessage = ''
            state.authErrors = {}
            state.isAuthenticated = false
            return state
        }

    }
})
export const {clearState} = AuthSlice.actions
export const userSelector = state => state.user
