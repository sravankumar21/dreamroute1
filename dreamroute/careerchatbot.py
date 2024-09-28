import json
import numpy as np
import pandas as pd
import pickle
from tensorflow.keras.models import load_model
from flask import Blueprint, request, jsonify
from keras.preprocessing.sequence import pad_sequences
from fuzzywuzzy import fuzz

# Create a Blueprint for the career chatbot routes
careerchatbot_bp = Blueprint('careerchatbot', __name__)

# Global variables
model = None
words = None
classes = None
career_intents_data = None

# Load resources
def load_career_resources():
    global model, words, classes, career_intents_data

    try:
        df = pd.read_csv('datafile1.csv')
        career_intents_data = df.to_dict('records')
        print("Career intents data loaded successfully from datafile1.csv.")
    except Exception as e:
        print(f"Error loading career intents data from CSV: {e}")
        raise

    try:
        model = load_model('career_chatbot_model.h5')
        print("Career chatbot model loaded successfully.")
    except Exception as e:
        print(f"Error loading career chatbot model: {e}")
        raise

    try:
        with open('words.pkl', 'rb') as file:
            words = pickle.load(file)
        print("Career words loaded successfully.")
    except Exception as e:
        print(f"Error loading career words: {e}")
        raise

    try:
        with open('classes.pkl', 'rb') as file:
            classes = pickle.load(file)
        print("Career classes loaded successfully.")
    except Exception as e:
        print(f"Error loading career classes: {e}")
        raise

# Convert message to a vector based on words.pkl
def message_to_vector(message):
    message_words = message.lower().split()
    vector = [0] * len(words)
    for word in message_words:
        if word in words:
            vector[words.index(word)] = 1
    padded_vector = pad_sequences([vector], maxlen=48)  # Adjust maxlen as necessary
    return padded_vector

# Predict intent
def predict_intent(message):
    try:
        message_vector = message_to_vector(message)
        prediction = model.predict(message_vector)
        max_index = np.argmax(prediction[0])
        intent = classes[max_index]
        print(f"Career chatbot prediction result: {prediction}")
        print(f"Predicted career intent: {intent}")
        return intent  # Return the intent directly
    except Exception as e:
        print(f"Error during career chatbot prediction: {e}")
        return None

def get_response(question):
    responses = []
    try:
        best_score = 0
        best_entry = None
        # Loop through your intents data to find the best matching question
        for entry in career_intents_data:
            score = fuzz.partial_ratio(entry['question'].strip().lower(), question.strip().lower())
            if score > best_score:  # Look for the highest score
                best_score = score
                best_entry = entry
        if best_score >= 70:  # Threshold for a good match, you can adjust this
            responses = [
                best_entry['response_1'],
                best_entry['response_2'],
                best_entry['response_3']
            ]
        else:  # If no good match found, provide a default message
            responses = ["I'm sorry, I don't have an answer for that."]
    except Exception as e:
        print(f"Error in get_response function: {e}")

    return responses

# Define the /careercoach endpoint
@careerchatbot_bp.route('/careercoach', methods=['POST'])
def career_coach():
    try:
        data = request.get_json()
        if not data or 'message' not in data:
            print("Error: Invalid request data for career coach.")
            return jsonify({'error': 'Invalid request data.'}), 400

        message = data['message']
        print(f"Career chatbot received message: {message}")

        # Predict the intent
        intent = predict_intent(message)
        print(f"Career chatbot predicted intent: {intent}")

        # Get the response
        responses = get_response(message)  # Pass the original message to get_response
        print(f"Career chatbot responses: {responses}")

        return jsonify(responses), 200

    except Exception as e:
        print(f"Error in /careercoach route: {e}")
        return jsonify({'error': 'Internal Server Error'}), 500

# Initialize resources for career chatbot
load_career_resources()
