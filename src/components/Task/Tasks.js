import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Tasks.css";
import Task from "./Task";

const Tasks = (props) => {

    return (
        
            <Container>
                <Row className="rows">
                    <Col className="columns">
                        <Task 
                        task={props.items[0].task}
                        done={props.items[0].done}/>
                    </Col>

                    <Col className="columns">
                        <Task 
                        task={props.items[1].task}
                        done={props.items[1].done}/>
                    </Col>

                    <Col className="columns">
                        <Task 
                        task={props.items[2].task}
                        done={props.items[2].done}/>
                    </Col>
                    
                    <Col className="columns">
                        <Task 
                        task={props.items[3].task}
                        done={props.items[3].done}/>
                    </Col>

                </Row>

                <Row className="rows">
                    <Col className="columns">
                        <Task 
                        task={props.items[4].task}
                        done={props.items[4].done}/>
                    </Col>
                </Row>

            </Container>
        
    );
}

export default Tasks;