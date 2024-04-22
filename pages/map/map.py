# Import necessary modules
from flask import Blueprint, render_template, request, session, jsonify
from DbConnector import *
# from app import logout_required


# Create a blueprint for the login routes
map = Blueprint(
    'map',
    __name__,
    static_folder='static',
    static_url_path='/map',
    template_folder='templates'
)


@map.route('/mpa.html')
def map_index():
    return render_template('map.html')

