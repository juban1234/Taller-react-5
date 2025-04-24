import { Footer } from "./Footer/Footer";
import { Header } from "./Header/Header";
import { Home } from "./page/Home";


export const App = () => {
  return (
    <>
    <div className="min-h-screen w-screen flex flex-col items-center bg-cyan-300 ">
      <Header  />
      <Home/>
      <Footer/>
    </div>
    </>
  );
}
