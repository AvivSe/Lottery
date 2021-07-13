import { purchase, validateTicket } from "./api/http-client";
import { useState } from "react";
import { Button, Card, CardActionArea, CardContent, Chip } from "@material-ui/core";
import styled from "styled-components";
import _ from 'lodash';

const CardsContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
`;

const StyledCard = styled(Card)`
  width: 300px;
  margin: 20px;
`;

const Header = styled.header`
  min-height: 300px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  background-color: #282c34;
`;
const PurchaseButton = styled(Button)`
  height: 240px;
  width: 240px;
  border-radius: 400px !important;
  font-size: 2.1em !important;
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
`
function App() {
  const [purchases, setPurchases] = useState([]);
  const [validatedTickets, setValidatedTickets] = useState({});

  function handlePurchaseClick() {
    purchase().then(ticketId => {
      setPurchases([{ id: ticketId, date: new Date().toLocaleString() }, ...purchases]);
    });
  }

  function handleValidateTicket(id) {
    validateTicket(id).then(data => {
      setValidatedTickets({ ...validatedTickets, [id]: data });
    });
  }

  return (
    <div>
      <Header>
        <PurchaseButton variant="contained" color={"secondary"} onClick={handlePurchaseClick}>Purchase</PurchaseButton>
      </Header>
      <CardsContainer>
        {purchases.map(({ id, date }) => {
          const isValidated = !!validatedTickets[id];
          const onValidateClick = () => handleValidateTicket(id);

          return <StyledCard key={id}>
            <CardActionArea disabled={isValidated} onClick={onValidateClick}>
              <CardContent>
                <CardHeader>
                  <div>{date}</div>
                  <Chip size={"small"} variant={"outlined"} color={isValidated ? '' : "secondary"}
                        label={isValidated ? "Validated" : "Not Validated"} />
                </CardHeader>
                <div>
                  {!isValidated && <ValidateButton variant="outlined" color={"secondary"} onClick={onValidateClick}>Validate</ValidateButton>}
                  {isValidated && Object.entries(validatedTickets[id]).map(([key, value]) => <div key={key}>
                    {_.startCase(key)}: <b>{value}</b>
                  </div>)}
                </div>
              </CardContent>
            </CardActionArea>
          </StyledCard>;
        })}
      </CardsContainer>
    </div>
  );
}

export default App;
