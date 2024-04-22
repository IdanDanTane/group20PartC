from flask import Blueprint, render_template

# home blueprint definition
sidebar = Blueprint(
    'sidebar',
    __name__,
    static_folder='static',
    static_url_path='/sidebar',
    template_folder='templates'
)


# Routes
@sidebar.route('/sidebar')
def sidebar_index():
    return render_template('sidebar.html')