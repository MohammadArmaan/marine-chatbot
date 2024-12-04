import axios from 'axios';

const API_URL = "http://localhost:8000"; // Change this to your FastAPI URL if deployed

// Submit complaint to the FastAPI backend
export const submitComplaint = async (complaintData) => {
  try {
    const response = await axios.post(`${API_URL}/submit-complaint`, complaintData);
    return response.data;
  } catch (error) {
    console.error("Error submitting complaint:", error);
    throw error;
  }
};

// Get complaints summary from the FastAPI backend
export const getComplaintsSummary = async () => {
  try {
    const response = await axios.get(`${API_URL}/complaints/summary`);
    return response.data;
  } catch (error) {
    console.error("Error fetching complaints summary:", error);
    throw error;
  }
};
