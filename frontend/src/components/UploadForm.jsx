import { useState } from 'react';
import axios from 'axios';

export default function UploadForm() {
  const [video, setVideo] = useState(null);
  const [message, setMessage] = useState('');

  const handleUpload = async () => {
    if (!video) {
      setMessage('Please select a video to upload.');
      return;
    }

    const formData = new FormData();
    formData.append('video', video);

    try {
      const res = await axios.post('http://localhost:5000/upload', formData, {
        headers: { 'Content-Type': 'multipart/form-data' }
      });
      setMessage(res.data.message);
    } catch (err) {
      console.error(err);
      setMessage('Upload failed. Please try again.');
    }
  };

  return (
    <div className="max-w-md mx-auto p-6 mt-10 bg-white rounded-lg shadow-md border border-gray-200">
      <h2 className="text-2xl font-bold mb-4 text-center text-green-700">Upload Your Swing</h2>
      <input
  type="file"
  accept="video/*"
  onChange={(e) => setVideo(e.target.files[0])}
  className="block w-full text-sm text-gray-700 bg-gray-100 rounded border border-gray-300 cursor-pointer p-2 mb-4"
/>
      
      <button
        onClick={handleUpload}
        className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 px-4 rounded"
      >
        Upload
      </button>
      {message && (
        <p className="mt-4 text-center text-gray-700">{message}</p>
      )}
    </div>
  );
}
