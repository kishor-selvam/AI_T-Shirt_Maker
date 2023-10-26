import CanvasModel from "./canvas"
import Customizer from "./pages/Customizer"
import Home from "./pages/Home"

function App() {

  return (
    <>
    <main className="app transition-all eash-in">
      <Home />
      <CanvasModel />
      <Customizer />
    </main>
    <footer className="flex items-center justify-center">
    Copyright &copy; 2023.Developed By <a className="pl-1 text-yellow-700" href="https://github.com/kishor-selvam/AI_T-Shirt_Maker/tree/master" target="_black" > Kishor</a>
    </footer>
    </>
  )
}

export default App
