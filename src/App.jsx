import Navbar from "./components/Navbar";
import Design from "./components/Design";
import Projects from "./components/sections/Projects";
import Tech from "./components/sections/Tech";
import Resume from "./components/sections/Resume";
const App = () => {
	return (
		<>
		<div className="bg-black">
		<Navbar />
		<Design />
		</div>
		</>
	);
};

export default App;
