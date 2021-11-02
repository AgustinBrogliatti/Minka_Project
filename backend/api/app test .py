from flask import Flask, jsonify, request, redirect, render_template, send_from_directory, abort
import os, json
from flask_cors import CORS, cross_origin
from werkzeug.utils import secure_filename

app = Flask(__name__, template_folder='templates')

CORS(app)




app.config['UPLOAD_FOLDER'] = 'static/files'
app.config['ALLOWED_FILE_EXTENSIONS'] = ['JPEG', 'JPG', 'PNG', 'GIF', 'MP4', 'MP3', 'WMV', 'DWG', 'DXF', 'XSLX', 'CSV', 'PDF']
app.config['MAX_CONTENT_LENGTH'] = 50 * 1024 * 1024

def allowed_file(filename):

    if not "." in filename:
        return False

    ext = filename.rsplit(".", 1)[1]

    if ext.upper() in app.config["ALLOWED_FILE_EXTENSIONS"]:
        return True
    else:
        return False



@app.route('/')
def hello_world():
    return "Hello World!"


@app.route("/upload-file", methods=["GET", "POST"])
def upload_image():
    
    if request.method == "POST":

        if request.files:

            file = request.files["file"]

            if file.filename == "":
                print("No filename")
                return redirect(request.url)

            if allowed_file(file.filename):
                filename = secure_filename(file.filename)

                file.save(os.path.join(app.config["UPLOAD_FOLDER"], filename))

                print("File saved")

                return redirect(request.url)

            else:
                print("That file extension is not allowed")
                return redirect(request.url)

    return render_template("upload_file.html")




app.config['CLIENT_FILES'] = "static/files"

@app.route("/uploads/<file_name>")
def get_file(file_name):

    try:
        return send_from_directory(app.config['CLIENT_FILES'], file_name, as_attachment=True)
            
        
    except FileNotFoundError:
        abort(404)


if __name__ == '__main__':
    app.run(debug=True, port=4000)
