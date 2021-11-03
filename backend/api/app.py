from flask import Flask, jsonify, request, redirect, render_template, send_from_directory, abort
import os, json, urllib.parse
from flask_cors import CORS
from werkzeug.utils import secure_filename


app = Flask(__name__, template_folder='templates')

CORS(app)

path = os.path.join('static', 'files')
app.config['UPLOAD_FOLDER'] = path
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
    return "Minka Backend"



@app.route("/upload-file", methods=["GET", "POST"])
def upload_file():
    if request.method == "POST":

        if request.files:

            file = request.files["file"]

            if file.filename == "":
                print("No filename")


            if allowed_file(file.filename):
                filename = secure_filename(file.filename)
                file.save(os.path.join(app.config["UPLOAD_FOLDER"], filename))
                print("File saved")
            

            else:
                print("That file extension is not allowed")
    
  
    return "Upload Files Page"

    
    

app.config['CLIENT_FILES'] = "static/files"




@app.route("/uploads/<file_name>", methods=['GET', 'DELETE'])
def get_file(file_name):
    
    if request.method == "GET":

        try:
            return send_from_directory(app.config['CLIENT_FILES'], file_name, as_attachment=False)

        except FileNotFoundError:
            abort(404)

    if request.method == "DELETE":
        path = os.path.join('static', 'files', file_name)
        os.remove(path)

        path = os.path.join("static", "files.json")
        if os.path.exists(path):
            with open(path, "r+") as file:
                files = json.load(file)
                for f in files:
                    if f['name'] == file_name:
                        files.remove(f)
                        print(files)
                        with open(path, "w") as file:
                            file.write(json.dumps(files, indent = 4))
                return jsonify({"files": files, "status":"ok"})

        return "File deleted successfully"
        

@app.route("/uploads/files-view", methods=["GET", "POST", "DELETE"])
def post_files_list():

    path = os.path.join("static", "files.json")
    
    if request.method == 'GET':
        if os.path.exists(path):
            with open(path, "r") as file:
                files = json.load(file)
                return jsonify({"files": files, "status":"ok"})
        return jsonify({"files":[], "message":"empity data base","status":"not found"})

    if request.method == 'POST':
        body = request.json 
        
        if not os.path.exists(path):
            with open(path, "w") as file:
                list_files = []
                list_files.append(body)
                file.write(json.dumps(list_files, indent = 4))
                return jsonify({"file": body, "status":"ok"})
    
        if os.path.exists(path):
                with open(path, "r+") as file:
                    files = json.load(file)
                    files.append(body)  
                    file.seek(0)
                    json.dump(files, file, indent = 4)
                    return jsonify({"order": body, "status":"ok"})



if __name__ == '__main__':
    app.run(debug=True, port=4000)
