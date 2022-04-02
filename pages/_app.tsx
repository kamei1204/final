import "tailwindcss/tailwind.css";
import type { AppProps } from "next/app";
// import { ThemeProvider } from 'next-themes'
import { ThemeProvider } from "styled-components"
import { lightTheme } from "components/Theme";
import SoundBar from "components/SoundBar";
import PowerButton from "components/PowerButton";


function MyApp({ Component, pageProps }: AppProps) {
  return (
    // ライトモードをデフォルトに設定
    <ThemeProvider theme={lightTheme}>
      
        <Component {...pageProps} />
        <SoundBar />
        
    </ThemeProvider>
  );
}

export default MyApp;

