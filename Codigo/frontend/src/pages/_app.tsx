import theme from "../styles/theme";
import type { AppProps } from "next/app";
import { GlobalStyles } from "@/styles/global";
import { ThemeProvider } from "styled-components";
import { Toaster } from "react-hot-toast";
import { QueryClient, QueryClientProvider } from "react-query";


export default function App({ Component, pageProps }: AppProps) {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        refetchOnWindowFocus: false,
      },
    },
  });

  return (
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <GlobalStyles />

            <Component {...pageProps} />
        
        <Toaster position={"top-right"} />
      </ThemeProvider>
    </QueryClientProvider>
  );
}
