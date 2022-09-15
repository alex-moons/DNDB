import React from "react";
import { Card , Col, Container, Row } from "react-bootstrap";

const Dashboard = () => {
    return (
        <Container fluid>
            <h1>Dashboard</h1> 
            <Col className="col-12 my">
                <Row className="rowDash">
                <Card className="charCard" bg="secondary" style={{color: "white", width: '13rem'}}>
                <Card.Img className="cardImg" variant="top" src="https://149658804.v2.pressablecdn.com/wp-content/uploads/2021/04/image2-1.jpg" />
                <Card.Body>
                    <Card.Title>Osvald</Card.Title>
                    <Card.Text>
                        <p>Hill Dwarf - Artificer</p>
                        <p>LV 8</p>
                        <p>Items:</p>
                        <p>Bag of Holding</p>
                        <p>Brooch of Shielding</p>
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="charCard" bg="secondary" style={{color: "white", width: '13rem'}}>
                <Card.Img className="cardImg" variant="top" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSH_FCGHQja-mP15Xfc_y7ZKWfvgcGo7k1NeA&usqp=CAU" />
                <Card.Body>
                    <Card.Title>Sothe</Card.Title>
                    <Card.Text>
                        <p>Half-Elf - Rogue</p>
                        <p>LV 10</p>
                        <p>Items:</p>
                        <p>Weapon +2</p>
                        <p>Amulet of Proof</p>
                    </Card.Text>
                    </Card.Body>
                </Card>

                <Card className="charCard" bg="secondary" style={{color: "white", width: '13rem'}}>
                <Card.Img className="cardImg" variant="top" src="https://images-wixmp-ed30a86b8c4ca887773594c2.wixmp.com/f/1bebd154-3cec-433f-96a7-8442069ab770/deysg9n-ff8ad8de-3a97-449e-a9f2-890ded9648d5.jpg/v1/fill/w_1280,h_1657,q_75,strp/archon__warforged_wizard_by_olieart_deysg9n-fullview.jpg?token=eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJ1cm46YXBwOjdlMGQxODg5ODIyNjQzNzNhNWYwZDQxNWVhMGQyNmUwIiwiaXNzIjoidXJuOmFwcDo3ZTBkMTg4OTgyMjY0MzczYTVmMGQ0MTVlYTBkMjZlMCIsIm9iaiI6W1t7ImhlaWdodCI6Ijw9MTY1NyIsInBhdGgiOiJcL2ZcLzFiZWJkMTU0LTNjZWMtNDMzZi05NmE3LTg0NDIwNjlhYjc3MFwvZGV5c2c5bi1mZjhhZDhkZS0zYTk3LTQ0OWUtYTlmMi04OTBkZWQ5NjQ4ZDUuanBnIiwid2lkdGgiOiI8PTEyODAifV1dLCJhdWQiOlsidXJuOnNlcnZpY2U6aW1hZ2Uub3BlcmF0aW9ucyJdfQ.t-P0dTYPva_f1d35-FxD2CVXfYkAFtUNGWYc2usWBBY" />
                <Card.Body>
                    <Card.Title>Thane</Card.Title>
                    <Card.Text>
                        <p>Warforged - Wizard</p>
                        <p>LV 6</p>
                        <p>Items:</p>
                        <p>Immovable Rod</p>
                        <p>Necklace of Fireballs</p>
                    </Card.Text>
                    </Card.Body>
                </Card>

                </Row>
            </Col>
        </Container>
    )
};

export default Dashboard;