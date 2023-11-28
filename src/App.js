
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Header from './component/Header';
import Home from './Pages/Home';
import Inquires from './Pages/Inquires';
import Policy from './Pages/Policy';
import Story from './Pages/Story';
import MainPage from './MainPage';
import Chat from './Pages/Chat';

function App() {
  return (
    <div > 
      <Header/>
      <Routes>
        <Route path='/' element={<MainPage/>}/>
        <Route path='/home' element={<Home/>}/>
        <Route path='/inquiry' element={<Inquires/>}/>
        <Route path='/policies' element={<Policy/>}/>
        <Route path='/ourStory' element={<Story/>}/>
        <Route path='/chat-with-us' element={<Chat/>}/>
      </Routes>
    </div>
  );
}

export default App;
