import { Suspense } from "react";
import Banner from "./Components/Banner"
import Nav from "./Components/Nav"
import type { IdevStack } from "./DevType";
import DevStack from '../src/Components/Card/DevStack'
import Footer from "./Components/Footer";


const devStackPromise = async():Promise<IdevStack[]> =>{
  const res = await fetch('/data.json');
  const data = await res.json();
  return data;
  
}

function App() {
  

  return (
    <>
     <Nav></Nav>
     <Banner></Banner>
     <Suspense fallback={<p>Loading...</p>}>
        <DevStack PromiseDevStack = {devStackPromise()}></DevStack>
     </Suspense>
     <Footer></Footer>

    </>
  )
}

export default App
