#!/usr/bin/env python
from flask import Flask, render_template, send_from_directory
from flask_bootstrap import Bootstrap
from flask_cors import CORS

app = Flask(__name__)
bootstrap = Bootstrap(app)
# for all
CORS(app)
#  for dev PORT
# cors = CORS(app, resources={r"/api/*": {"origins": "http://127.0.0.1:5000"}})


@app.route('/')
def home():
    return render_template('home.html')


@app.route('/static/<path:path>')
def send_static(path):
    return send_from_directory('static', path)


if __name__ == '__main__':
    app.run(host="localhost", port=8000, debug=True)
