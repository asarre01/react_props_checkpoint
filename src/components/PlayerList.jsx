import { Container } from "react-bootstrap";
import players from "../players";
import Player from "./Player";

function PlayerList() {
    return (
        <Container>
            {players.map((player, index) => (
                <div key={index}>
                    <h1 className="text-center bg-primary text-light w-25 mx-auto">{index+1}</h1>
                    <Player {...player} />
                </div>
            ))}
        </Container>
    );
}

export default PlayerList;
