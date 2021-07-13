import { getTickets, purchase, validateTicket } from "./api/http-client";
import { useEffect, useState } from "react";
import { Button, Card, CardActionArea, CardContent, Chip } from "@material-ui/core";
import styled from "styled-components";
import _ from "lodash";

const CardsContainer = styled.div`
  overflow-y: scroll;
  flex-wrap: wrap;
  display: flex;
  height: 75vh;
  position: fixed;
  bottom: 0;
`;

const StyledCard = styled(Card)`
  width: 300px;
  height: 200px;
  margin: 20px;
  font-size: 12px;
`

const Header = styled.header`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: #282c34;
  height: 14vh;
  padding: 30px 0;
  position: absolute;
  width: 100%;
  z-index: 1;
`;
const PurchaseButton = styled(Button)`
  height: 240px;
  width: 240px;
  border-radius: 100px !important;
  transform: rotate(-10deg);
  font-size: 2.1em !important;
  margin-bottom: -100px !important;
`;

const CardHeader = styled.div`
  display: flex;
  justify-content: space-between;
  height: 100%;
`;

const ValidateButton = styled(Button)`
  height: 100px;
  width: 100px;
  border-radius: 100px !important;
  font-size: 1.2em !important;
`;

function App() {
  const [tickets, setTickets] = useState({});

  useEffect(function() {
    getTickets().then(data => {
      setTickets(data);
    });
  }, []);

  function handlePurchaseClick() {
    purchase().then(({ id, date }) => {
      setTickets({ ...tickets, [id]: { id, date } });
    });
  }

  function handleValidateTicket(id) {
    validateTicket(id).then(data => {
      console.log(data);
      setTickets({ ...tickets, [data.id]: data });
    });
  }

  const sortedTickets = Object.values(tickets)
    .sort((ticket, anotherTicket) =>
      new Date(anotherTicket.date) - new Date(ticket.date));

  return (
    <div>
      <Header>
        <PurchaseButton variant="contained" color="secondary" onClick={handlePurchaseClick}>Purchase</PurchaseButton>
      </Header>
      <CardsContainer>
        {sortedTickets.map(({ id, date, isValidate, ...rest }) => {
          console.log(isValidate)
          const onValidateClick = () => handleValidateTicket(id);

          return <StyledCard key={id}>
              <CardContent>
                <CardHeader>
                  <div>{new Date(date).toLocaleString()}</div>
                  <Chip size={"small"} variant={"outlined"} color={isValidate ? "" : "secondary"}
                        label={isValidate ? "Validated" : "Not Validated"} />
                </CardHeader>
                <div>
                  {!isValidate && <ValidateButton variant="outlined" color={"secondary"}
                                                   onClick={onValidateClick}>Validate</ValidateButton>}
                  {isValidate && Object.entries(rest).map(([key, value]) => <div key={key}>
                    {_.startCase(key)}: <b>{value}</b>
                  </div>)}
                </div>
              </CardContent>
          </StyledCard>;
        })}
      </CardsContainer>
    </div>
  );
}

export default App;
