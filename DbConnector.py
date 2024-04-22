
from pymongo.mongo_client import MongoClient
from pymongo.server_api import ServerApi

uri = "mongodb+srv://everyone:nopass123@bikingdb.cvxqfww.mongodb.net/?retryWrites=true&w=majority&appName=BikingDb"

# Create a new client and connect to the server
client = MongoClient(uri, server_api=ServerApi('1'))
db = client.biking
routes = db.routes
cur = routes.find()

reviews = db.reviews
contact = db.contact



def get_routes():
    getroutes = routes.find()
    return getroutes
# Send a ping to confirm a successful connection
try:
    client.admin.command('ping')
    print("Pinged your deployment. You successfully connected to MongoDB!")
except Exception as e:
    print(e)