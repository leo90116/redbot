# Redbot Remote Controller Webapp

This project provides a web-based remote controller for your Discord Redbot instance, featuring a Django REST API backend and a React frontend, all orchestrated with Docker.

---

## Project Structure

```
redbot/
  backend/      # Django REST API backend
  frontend/     # React frontend
  redenv/       # (Your existing Redbot virtualenv, not used by Docker)
  docker-compose.yml
```

---

## Quick Start

### Prerequisites

- [Docker](https://www.docker.com/products/docker-desktop)
- [Docker Compose](https://docs.docker.com/compose/)

### 1. Build and Run All Services

From the `redbot` directory, run:

```sh
docker-compose up --build
```

- The **backend** (Django) will be available at: [http://localhost:8000](http://localhost:8000)
- The **frontend** (React) will be available at: [http://localhost:3000](http://localhost:3000)

### 2. Access the Webapp

Open your browser and go to [http://localhost:3000](http://localhost:3000) to use the Redbot remote controller dashboard.

---

## Development

### Backend (Django)

- Source: `backend/`
- Main API endpoint: `/api/bot/status/`
- To run backend locally (without Docker):

  ```sh
  cd backend
  pip install -r requirements.txt
  python manage.py migrate
  python manage.py runserver
  ```

### Frontend (React)

- Source: `frontend/`
- To run frontend locally (without Docker):

  ```sh
  cd frontend
  npm install
  npm start
  ```

---

## Customizing

- **API Endpoints:** Extend `backend/botstatus/views.py` to add more Redbot controls.
- **Frontend UI:** Edit `frontend/src/App.js` to add more dashboard features.

---

## Notes

- The backend currently returns dummy Redbot status data. Integrate with your actual Redbot instance as needed.
- For production, update secrets and security settings in `backend/redbot_api/settings.py`.

---

## License

MIT License. See `LICENSE` file for details.