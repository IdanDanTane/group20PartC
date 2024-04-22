# Import necessary modules
from flask import Blueprint, render_template, request, session, jsonify
from DbConnector import *
# from app import logout_required


# Create a blueprint for the login routes
rank = Blueprint(
    'rank',
    __name__,
    static_folder='static',
    static_url_path='/rank',
    template_folder='templates'
)


@rank.route('/rank.html')
def rank_index():
    return render_template('rank.html')

