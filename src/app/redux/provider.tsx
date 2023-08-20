'use client'
import { Provider } from "react-redux/es/exports";
import { store } from './store'

const Providers = ( { children } : any) => {
    return (
        <Provider store={store}>
            {children}
        </Provider>
    )
}

export default Providers