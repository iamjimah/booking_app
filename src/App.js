import AddStudent from "./components/AddStudent";
import Students from "./components/Students";
import Nav from './components/Nav'

function App() {
  return (
    <div className='text-center text-white'>
      <Nav />
      <AddStudent />
      <Students />
    </div>
  );
}

export default App;
