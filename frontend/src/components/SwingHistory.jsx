import { useState, useEffect } from 'react';

export default function SwingHistory() {
  const [swings, setSwings] = useState([]);

  // For now, mock previous uploads
  useEffect(() => {
    setSwings([
      {
        id: 1,
        filename: "swing1.mp4",
        uploadedAt: "2025-06-03",
        feedback: "Early extension detected",
      },
      {
        id: 2,
        filename: "swing2.mp4",
        uploadedAt: "2025-06-02",
        feedback: "Good spine angle, but open clubface",
      },
    ]);
  }, []);

  return (
    <div className="max-w-3xl mx-auto p-6 mt-10 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold mb-6 text-center text-green-700">Swing History</h2>
      {swings.length === 0 ? (
        <p className="text-center text-gray-500">No swings uploaded yet.</p>
      ) : (
        <ul className="space-y-4">
          {swings.map((swing) => (
            <li key={swing.id} className="p-4 border rounded shadow-sm bg-gray-50">
              <div className="font-semibold">File: {swing.filename}</div>
              <div className="text-sm text-gray-600">Uploaded: {swing.uploadedAt}</div>
              <div className="text-sm text-blue-700 mt-2">Feedback: {swing.feedback}</div>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
