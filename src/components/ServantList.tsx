import * as React from 'react';
import { ListGroup, Image, Row, Col } from 'react-bootstrap';

interface ServantListItem {
    imgUrl      : string
    name        : string
    description : string
}

interface Props {
    list : ServantListItem[]
}

export class ServantList extends React.Component<Props, any>{
    render(){
        const servantList = this.props.list.map((servant:any) => (
            <ListGroup.Item><Row>
                <Col md="auto">
                    <Image
                        src={servant.imgUrl}
                        width="256" 
                        height="362"
                    />
                </Col>
                <Col>
                    <h1>{servant.name}</h1>
                    <p>{servant.description}</p>
                </Col>
            </Row></ListGroup.Item>
        ))
        return (<ListGroup>{servantList}</ListGroup>);
    }
}