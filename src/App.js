import logo from './logo.svg';
import './App.css';
import Welcome from './components/basics/Welcome';
import Greet from './components/basics/Greet';
import Hello from './components/basics/Hello';
import Message from './components/basics/Message';
import Counter from './components/basics/Counter';
import Button from './components/basics/Button';
import ParentComponent from './components/basics/ParentComponent';
import UserList from './components/basics/UserList';
import UseRefs from './components/basics/useRefs';
import ClickCounter from './components/hoc/clickCounter';
import Hovercounter from './components/hoc/hovercounter';
import Clickcounter2 from './components/renderprops/clickcounter2';
import Hovercounter2 from './components/renderprops/hovercounter2';
import Counter2 from './components/renderprops/counter';
import { ContextProvider } from './components/context/Context';
import A from './components/context/A';
import GetData from './components/http/getData';
import SendData from './components/http/SendData';
import ClickCounterHook from './components/hooks/usestate/ClickCounterHook';
import HookObject from './components/hooks/usestate/HookObject';
import HookArray from './components/hooks/usestate/HookArray';
import CounterUseEffect from './components/hooks/useEffect/CounterUseEffect';
import HookCleanup from './components/hooks/useEffect/HookCleanup';
import HookClock from './components/hooks/useEffect/HookClock';
import CallApi from './components/hooks/useEffect/CallApi';
import A1 from './components/hooks/context/A1';
import CountReducer from './components/hooks/reducer/CountReducer';
import CountReducerMultiple from './components/hooks/reducer/CountReducerMultiple';
import Callback from './components/hooks/usecallback/callback';
import UseMemo from './components/hooks/useMemo/UseMemo';
import UseDocumentTitle from './components/hooks/customhook/useDocumentTitle';
import { Route,Routes } from 'react-router-dom';
import Home from './components/router/Home';
import About from './components/router/About';
import Navbar from './components/router/Navbar';
import Order from './components/router/Order';
import NoMatch from './components/router/NoMatch';
import Product from './components/router/Product';
import New from './components/router/New';
import User from './components/router/User';
import UserDetails from './components/router/UserDetails';
import SearchParams from './components/router/SearchParams';
function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path='/' element={<Home />} />
        <Route path='about' element={<About />} />
        <Route path='order' element={<Order />} />
        <Route path='product' element={<Product />} >
          <Route index element={<New/>} />
          <Route path='new' element={<New />} />
        </Route>
        <Route path="*" element={<NoMatch/>} />
        <Route path='user' element={<User />} >
          <Route path=':userId' element={<UserDetails />} />
          <Route path='active' element={<SearchParams/>} />
        </Route>
      </Routes>

      {/* <UseDocumentTitle /> */}
      {/* <UseMemo /> */}
      {/* <Callback /> */}
      {/* <CountReducerMultiple /> */}
      {/* <CountReducer /> */}
      {/* <HookClock /> */}
      {/* <A1 value={"akash"}/> */}
      {/* <CallApi /> */}
      {/* <HookClock /> */}
      {/* <HookCleanup /> */}
      {/* <CounterUseEffect /> */}
      {/* <HookArray /> */}
      {/* <HookObject /> */}
      {/* <ClickCounterHook /> */}
      {/* <SendData /> */}
      {/* <GetData /> */}
        {/* <Counter2>{(count, handler)=>(
        <Clickcounter2 count={count} handler={handler}/>)
        }</Counter2>

        <Counter2>{(count, handler)=>(
        <Hovercounter2 count={count} handler={handler}/>)
        }</Counter2>     */}

        {/* <ContextProvider value="Akash">
          < A />
        </ContextProvider> */}
    </div>
  );
}

export default App;
