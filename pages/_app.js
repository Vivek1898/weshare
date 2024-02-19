import "@/styles/globals.css";
import StoreContextProvider from "../Context/StoreContextProvider"

export default function App({Component, pageProps}) {
    return (
        <StoreContextProvider>
            <Component {...pageProps} />
        </StoreContextProvider>
    );
}
