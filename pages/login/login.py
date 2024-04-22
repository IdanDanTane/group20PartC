# Import necessary modules
from flask import Blueprint, render_template, request, session, jsonify
from DbConnector import *
# from app import logout_required


# Create a blueprint for the login routes
login = Blueprint(
    'login',
    __name__,
    static_folder='static',
    static_url_path='/login',
    template_folder='templates'
)
