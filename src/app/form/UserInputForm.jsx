"use client";
import { useState } from "react";
import { submitComplaint, getComplaintsSummary } from "../../lib/api";

export default function UserInputForm() {
    const [latitude, setLatitude] = useState("");
    const [longitude, setLongitude] = useState("");
    const [description, setDescription] = useState("");
    const [result, setResult] = useState(null);
    const [summary, setSummary] = useState(null);

    const handleSubmit = async () => {
        const complaintData = {
            latitude: parseFloat(latitude),
            longitude: parseFloat(longitude),
            description,
        };
        try {
            const data = await submitComplaint(complaintData);
            setResult(data);
        } catch (error) {
            console.error("Error submitting complaint:", error);
        }
    };

    const fetchSummary = async () => {
        try {
            const data = await getComplaintsSummary();
            setSummary(data);
        } catch (error) {
            console.error("Error fetching summary:", error);
        }
    };

    return (
        <div>
            <h1>Marine Ecosystem Complaint System</h1>

            <input
                type="number"
                value={latitude}
                onChange={(e) => setLatitude(e.target.value)}
                placeholder="Latitude"
            />
            <input
                type="number"
                value={longitude}
                onChange={(e) => setLongitude(e.target.value)}
                placeholder="Longitude"
            />
            <textarea
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                placeholder="Description"
            />
            <button onClick={handleSubmit}>Submit Complaint</button>

            {result && (
                <div>
                    <h3>Complaint ID: {result.complaint_id}</h3>
                    <p>Impact Level: {result.impact_level}</p>
                </div>
            )}

            <button onClick={fetchSummary}>Get Complaints Summary</button>

            {summary && (
                <div>
                    <h3>Total Complaints Summary</h3>
                    <pre>{JSON.stringify(summary, null, 2)}</pre>
                </div>
            )}
        </div>
    );
}
