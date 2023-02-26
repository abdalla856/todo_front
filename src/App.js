
import { BrowserRouter, Routes, Route } from "react-router-dom";
import SignUpForm from "./views/signup/signup";
import LoginForm from "./views/login/login";
import TODO from "./views/todos/todos";
function App() {
  return (
<main>

<BrowserRouter>
      <Routes>
        <Route path="/signup" element={<SignUpForm />}/>
        <Route path="/login" element={<LoginForm />}/>
        <Route path="/" element={<TODO />}/>
  
      
      </Routes>
    </BrowserRouter>

</main>
  );
}

export default App;
