const API_URL = 'http://localhost:8080/api'

export function purchase() {
  return fetch(`${API_URL}/purchase`).then((response) => {
    return response.json();
  });
}

export function validateTicket(id) {
  return fetch(`${API_URL}/validate-ticket/${id}`).then((response) => {
    return response.json();
  });
}

export function getTickets() {
  return fetch(`${API_URL}/get-tickets`).then((response) => {
    return response.json();
  });
}
