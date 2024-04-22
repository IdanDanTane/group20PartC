from flask import Blueprint, render_template

# home blueprint definition
footer = Blueprint(
    'footer',
    __name__,
    static_folder='static',
    static_url_path='/footer',
    template_folder='templates'
)


# Routes
@footer.route('/footer')
def footer_index():
    return render_template('footer.html')