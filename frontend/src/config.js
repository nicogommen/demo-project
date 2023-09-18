/** The .environment file exports the relevant environment variable for you. */
// const BASE_PATH = process.env.REACT_APP_BACKEND_URL || 'http://localhost:8000';
// const BASE_PATH = "http://api.internal"
// const BASE_PATH = "http://127.0.0.1:30000"
const BASE_PATH = "http://127.0.0.1:8000"
export const API_BASE_PATH = `/api/v1`
export const API_BASE_URL = `${BASE_PATH}${API_BASE_PATH}`;
