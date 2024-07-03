import { lazy } from "react";
import { Route, Routes } from "react-router-dom";




const Home = lazy(()=> import ("../pages/Home/Home"))




export const App = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home/>} />
</Routes>
    </div>
  );
};
