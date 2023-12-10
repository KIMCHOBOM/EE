import '@/styles/globals.css';
import { RecoilRoot } from 'recoil';
import { QueryClient, QueryClientProvider } from 'react-query';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

export default function App({ Component, pageProps }) {
    const client = new QueryClient();

    return (
        <RecoilRoot>
            <QueryClientProvider client={client}>
                <Component {...pageProps} />
                <ToastContainer
                    position='top-center'
                    autoClose={3000}
                    hideProgressBar={false}
                    newestOnTop={false}
                    closeOnClick
                    rtl={false}
                    pauseOnFocusLoss
                    draggable={false}
                    pauseOnHover
                    theme='light'
                />
            </QueryClientProvider>
        </RecoilRoot>
    );
}
