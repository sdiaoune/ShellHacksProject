from flask import Flask, jsonify
from flask_restful import Resource, Api
from flask_restful import reqparse
from flaskext.mysql import MySQL

app = Flask(__name__)
api = Api(app)

#My SQL
mysql = MySQL()

#Configs
app.config['MYSQL_DATABASE_USER'] = 'root'
app.config['MYSQL_DATABASE_PASSWORD'] = 'root'
app.config['MYSQL_DATABASE_DB'] = 'jixel'
app.config['MYSQL_DATABASE_HOST'] = 'localhost'

mysql.init_app(app)

#render json from database
@app.route('/')
def get():
    cur = mysql.connect().cursor()
    cur.execute('''select * from jixel.missingtable''')
    r = [dict((cur.description[i][0], value)
              for i, value in enumerate(row)) for row in cur.fetchall()]
    return jsonify({'myCollection' : r})

if __name__ == '__main__':
    app.run()

class CreatePost(Resource):
    def post(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('name', type=str, help='Name of submitter')
            parser.add_argument('email', type=str, help='Email')
            parser.add_argument('missingperson', type=str, help='Name of missing person')
            parser.add_argument('picturename', type=str, help='picture id')
            parser.add_argument('timestamp', type=int, help='current timestamp')
            args = parser.parse_args()

            _name = args['name']
            _email = args['email']
            _missingperson = args['missingperson']
            _picturename = args['picturename']
            _timestamp = args['timestamp']

            return {'Name': args['name'], 'Email': args['email'], 'Missing Person': args['missingperson'], 'Picture File': args['picturename'], 'Timestamp': args['timestamp']}
        except Exception as e:
            return {'error': str(e)}

api.add_resource(CreatePost, '/CreatePost')

class CreatePostUnknown(Resource):
    def post(self):
        try:
            parser = reqparse.RequestParser()
            parser.add_argument('picture', type=str, help='Picture of unknown person')
            parser.add_argument('timestamp', type=str, help='current timestamp')
            args = parser.parse_args()

            _picture = args['picture']
            timestamp = args['timestamp']

            return {'Picture': args['picture'], 'Timestamp':args['timestamp']}
        except Exception as e:
            return {'error': str(e)}

@app.route("/")
def hello():
    return "API"

api.add_resource(CreatePostUnknown, '/CreatePostUnknown')

if __name__ == "__main__":
    app.run()
