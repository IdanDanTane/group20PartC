# Import necessary modules
from flask import Blueprint, render_template, request, session, jsonify
from DbConnector import *
# from app import logout_required


# Create a blueprint for the login routes
search = Blueprint(
    'search',
    __name__,
    static_folder='static',
    static_url_path='/search',
    template_folder='templates'
)



@search.route('/search.html')
def search_index():
    return render_template('search.html')