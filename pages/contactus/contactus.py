# Import necessary modules
from flask import Blueprint, render_template, request, session, jsonify
from DbConnector import *
# from app import logout_required


# Create a blueprint for the login routes
contactus = Blueprint(
    'contactus',
    __name__,
    static_folder='static',
    static_url_path='/contactus',
    template_folder='templates'
)


@contactus.route('/contactus.html')
def contactus_index():
    return render_template('contactus.html')

