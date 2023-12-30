import Container from 'react-bootstrap/Container';
import NavBArView from "./components/NavBarView";
import PlayerList from './components/PlayerList';

function App() {
	return (
    	<>
			<Container>
				<NavBArView></NavBArView>
				<PlayerList></PlayerList>
			</Container>
		</>
	);
}

export default App;
