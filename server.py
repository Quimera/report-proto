from bottle import Bottle, run, template, route, static_file

@route('/')
def index():
    output = template('index.html')
    return output

@route('/<filepath:path>')
def server_static(filepath):
    return static_file(filepath, root='')

run(host='0.0.0.0', port=9000)