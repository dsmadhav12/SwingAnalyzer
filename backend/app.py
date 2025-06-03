from flask import Flask, request, jsonify
from flask_cors import CORS
import os

app = Flask(__name__)
CORS(app)

UPLOAD_FOLDER = 'uploads'
os.makedirs(UPLOAD_FOLDER, exist_ok=True)

@app.route('/upload', methods=['POST'])
def upload_video():
    video = request.files.get('video')
    if not video:
        return jsonify({'error': 'No video uploaded'}), 400

    save_path = os.path.join(UPLOAD_FOLDER, video.filename)
    video.save(save_path)

    return jsonify({'message': f'✅ Uploaded: {video.filename}'}), 200

if __name__ == '__main__':
    app.run(port=5000, debug=True)
