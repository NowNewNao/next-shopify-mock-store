import { AppProps } from 'next/app';
import { RecoilRoot } from 'recoil';
import 'tailwindcss/tailwind.css';
import '../../output.css';

const App: React.FC<AppProps> = ({ Component, pageProps }) => {
  return (
    <>
      <RecoilRoot>
        <Component {...pageProps} />
      </RecoilRoot>
    </>
  );
};

export default App;
