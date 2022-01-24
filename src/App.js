import './App.css';
import {Routes, Route} from "react-router-dom";

import {Layout} from "./components";
import {CharactersPage, EpisodeDetailsPage, EpisodesPage, HomePage, LocationsPage} from "./pages";



function App() {
  return (
   <div>
       <Routes>
           <Route path={'/'} element ={<Layout/>}>
               <Route index element={<HomePage/>}/>
               <Route path={'/episodes'} element={<EpisodesPage/>}/>
               <Route path={'/episodes/:episode'} element={<EpisodeDetailsPage/>}/>
               <Route path={'/characters'} element={<CharactersPage/>}/>
               <Route path={'/locations'} element={<LocationsPage/>}/>
           </Route>
       </Routes>
   </div>
  );
}

export default App;
