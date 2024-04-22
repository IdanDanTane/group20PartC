from flask import Flask, session, flash, render_template,request,jsonify
from functools import wraps
from DbConnector import *


# App setup
app = Flask(__name__)
app.config.from_pyfile('settings.py')

@app.route('/login.html')
@app.route('/')
def home():
    return render_template('login.html')

@app.route('/star', methods=['GET'])
def searchRes():
    # Get query parameters from the request
    typeofcycling = request.args.get('TypeOfCycling')
    location = request.args.get('Location')

    # Fetch all routes from MongoDB
    cursor = routes.find({'type of cycling': typeofcycling, 'location': location})

    myroutes = []
    for i in cursor:
        myroutes.append(i)


    # Filter routes based on query parameters
    filtered_routes = myroutes

    # Pass filtered route data to Jinja template
    return render_template('star.html', routes=filtered_routes)
    if _name == '__main':
        app.run(debug=True)


@app.route('/star.html')
def star():
    return render_template('star.html', routes=get_routes())

@app.route('/submit-contact-form', methods=['POST'])
def submit_contact_form():
    # Get form data from the request
    form_data = request.json

    # Insert form data into MongoDB collection
    result = contact.insert_one(form_data)

    if result.inserted_id:
        return jsonify({'message': 'Form submitted successfully'}), 200
    else:
        return jsonify({'error': 'Failed to submit form'}), 500

@app.route('/map.html')
def map():
    return render_template('map.html')

@app.route('/contactus.html')
def contactus():
    return render_template('contactus.html')

@app.route('/submit-feedback', methods=['POST'])
def submit_feedback():
    data = request.json  # Extract JSON data from the request
    reviews.insert_one(data)  # Insert data into MongoDB collection
    return jsonify({'message': 'Feedback submitted successfully'}), 200


@app.route('/search.html')
def search():
    return render_template('search.html')




# Log In
from pages.login.login import login

app.register_blueprint(login)

from pages.rank.rank import rank

app.register_blueprint(rank)

from pages.map.map import map

app.register_blueprint(map)

from pages.search.search import search

app.register_blueprint(search)

from pages.star.star import star

app.register_blueprint(star)

from pages.contactus.contactus import contactus

app.register_blueprint(contactus)


# Components
# header
from Components.header.header import header

app.register_blueprint(header)

from Components.footer.footer import footer

app.register_blueprint(footer)

from Components.sidebar.sidebar import sidebar

app.register_blueprint(sidebar)


if __name__ == '__main__':
    app.run(debug=True)
