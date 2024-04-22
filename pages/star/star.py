# Import necessary modules
from flask import Blueprint, render_template, request, session, jsonify
from DbConnector import *
# from app import logout_required


# Create a blueprint for the login routes
star = Blueprint(
    'star',
    __name__,
    static_folder='static',
    static_url_path='/star',
    template_folder='templates'
)


@star.route('/star.html')
def star_index():
    return render_template('star.html', routes=get_routes())

