import Card from 'react-bootstrap/Card';
import Flag from 'react-flagkit';
import ListGroup from 'react-bootstrap/ListGroup';
import { AiOutlineNumber } from "react-icons/ai";
import 'bootstrap/dist/css/bootstrap.min.css';

function Player({urlImage,name,age,nationality,team,jerseyNumber,poste}) {
    //const cheminLogo = "logoClub/" + team[0]
    return (
        <Card className='w-25 mx-auto my-4 shadow'>
            <Card.Header className='p-0'>
                <Card.Img variant="top" src={urlImage} />
            </Card.Header>
            <Card.Body>
                <Card.Title className='d-flex justify-content-between align-items-center'>
                    <div>
                        {name}
                    </div>
                    <div className=' float-end'>
                    {age} ans
                    </div>
                </Card.Title>

                <ListGroup>
                    <ListGroup.Item><h6><AiOutlineNumber />{jerseyNumber}</h6></ListGroup.Item>
                    <ListGroup.Item className='d-flex align-items-center'>
                        <Flag country={nationality[0]} size={30} /> <h6 className=' m-0 p-0 ms-2'>{nationality[1]}</h6>
                    </ListGroup.Item>
                    <ListGroup.Item className='d-flex align-items-center'>
                        <img src={team[0]} alt="Logo Club" width={35} height={35} /> <h6 className='m-0 p-0 ms-2'>{team[1]}</h6>
                    </ListGroup.Item>
                    <ListGroup.Item><h6>{poste}</h6></ListGroup.Item>
                </ListGroup>

            </Card.Body>
        </Card>
    );
}

export default Player;