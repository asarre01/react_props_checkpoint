import 'bootstrap/dist/css/bootstrap.min.css';
import { Container } from 'react-bootstrap';

function NavBArView() {
    return(
        <Container className=" vw-100 d-flex flex-column justify-content-center text-center ">
            
            <img
                src="FIFA-Logo.png"
                width="80"
                height="80"
                className=" align-middle mx-auto"
                alt="React Bootstrap logo"
            />
            
                <h3>
                Les 5 meilleurs joueurs de la saison 2022-23 de la FIFA : Une vitrine spectaculaire d'habileté et de talent
                </h3>
        </Container>
    );
}

export default NavBArView;