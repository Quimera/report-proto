from bottle import Bottle, run, template, route, static_file

app = Bottle()

@route('/')
def index():
    output = template('index.html')
    return output

@route('/<filepath:path>')
def server_static(filepath):
    return static_file(filepath, root='')

run(app, host='0.0.0.0', port=9000)