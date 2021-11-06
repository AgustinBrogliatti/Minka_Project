from flask import Flask, jsonify, request, send_from_directory, abort
import os, json
from flask_cors import CORS
from werkzeug.utils import secure_filename


app = Flask(__name__)

CORS(app)

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
def minka_home():
    return jsonify({"message": "Welcome to Minka Server!!", "status": "200 OK"})


# [A D M I N S] [A D M I N S] [A D M I N S] [A D M I N S] [A D M I N S] [A D M I N S] 

@app.route("/api/v1/database-admins", methods=["GET", "POST"])
def database_admins():

    path = os.path.join("static", "admins.json")
    body = request.json

    if request.method == "GET":
        path = os.path.join("static", "admins.json")

        if not os.path.exists(path):
            return jsonify({"admins_list": [], "message": "Admins database empity", "status": "200 OK"})

        else:
            with open(path, "r+") as file:
                admins_list = json.load(file)
                return jsonify({"admins_list": admins_list, "message": "Admins list loaded successfully", "status": "200 OK"})


    if request.method == "POST":

        if not os.path.exists(path):

            with open(path, "w") as file:

                admins_list = []
                admins_list.append(body)
                file.write(json.dumps(admins_list, indent = 4))
                return jsonify({"admin": body, "message": "Admin successfully registered", "status": "201 CREATED"})

        else:

            with open(path, "r+") as file:
                admins_list = json.load(file)

                if any(admin['adminID'] == body['adminID'] for admin in admins_list):
                    return jsonify({"admin": body['adminID'], "message": "The adminID already exists", "status": "304 NOT MODIFED"})

                elif any(admin['email'] == body['email'] for admin in admins_list):
                    return jsonify({"email": body['email'], "message": "This email is in use", "status": "304 NOT MODIFED"}) 

                else:  
                    admins_list.append(body)  
                    file.seek(0)
                    json.dump(admins_list, file, indent = 4)
                    return jsonify({"admin": body, "message": "Admin successfully registered", "status": "201 CREATED"})

                    

# [A D M I N S - P A R A M S] [A D M I N S - P A R A M S] [A D M I N S - P A R A M S] 

@app.route("/api/v1/database-admins/<adminID>", methods=["GET", "PUT"])
def edit_database_admins(adminID):

    path = os.path.join("static", "admins.json")
    body = request.json

    if request.method == "GET":

        if not os.path.exists(path):
                return jsonify({"admins_list": [], "message": "Admins database empity", "status": "200 OK"}) 

        else:
            with open(path, "r+") as file:
                admins_list = json.load(file)

                if any(admin['adminID'] == adminID for admin in admins_list):

                    for admin in admins_list:
                        if admin['adminID'] == adminID:
                            return jsonify({"admin": admin, "message": "Admin loaded successfully", "status": "200 OK"})

                else:
                    return jsonify({"admin": adminID, "message": "The admin not exists", "status": "200 OK"})
                    

    if request.method == "PUT":
        
            if not os.path.exists(path):
                return jsonify({"admins_list": [], "message": "Admin database empity", "status": "200 OK"})
                
            else:
                with open(path, "r+") as file:
                    admins_list = json.load(file)

                    if any(admin["adminID"] == body["adminID"] and admin["adminID"] == adminID for admin in admins_list):

                        for admin in admins_list:
                            if admin["adminID"] == body["adminID"]:
                                admins_list.remove(admin)
                                admins_list.append(body)
                                
                                with open(path, "w") as file:

                                    file.write(json.dumps(admins_list, indent = 4))
                                    return jsonify({"admin": body, "message": "Admin data updated", "status": "200 OK"})

                    else:
                        return jsonify({"admin": adminID, "message": "The admin not exists", "status": "304 NOT MODIFED"})



# [C L I E N T S]  [C L I E N T S]  [C L I E N T S]  [C L I E N T S]  [C L I E N T S]  [C L I E N T S]  [C L I E N T S] 


@app.route("/api/v1/database-clients", methods=["GET", "POST"])
def database_clients():

    path = os.path.join('static', 'clients.json')
    body = request.json

    if request.method == "GET":

        if not os.path.exists(path):
            return jsonify({"clients_list": [], "message": "Clients database empity", "status": "200 OK"})

        else:
            with open(path, "r+") as file:
                clients_list = json.load(file)
                return jsonify({"clients_list": clients_list, "message": "Clients data base", "status": "200 OK"})



    if request.method == "POST":
        
        if not os.path.exists(path):

            with open(path, "w") as file:

                clients_list = []
                clients_list.append(body)
                file.write(json.dumps(clients_list, indent = 4))
                return jsonify({"client": body, "message": "Client successfully registered", "status": "201 CREATED"})

        else:

            with open(path, "r+") as file:
                clients_list = json.load(file)

                if any(client["clientID"] == body["clientID"] for client in clients_list):
                    return jsonify({"client": body["clientID"], "message": "The clientID already exists", "status": "200 OK"})

                elif any(client['email'] == body['email'] for client in clients_list):
                    return jsonify({"email": body['email'], "message": "This email is in use", "status": "200 OK"}) 

                else:  
                    clients_list.append(body)  
                    file.seek(0)
                    json.dump(clients_list, file, indent = 4)
                    return jsonify({"client": body, "message": "Client successfully registered", "status": "200 OK"})



# [C L I E N T S  P A R A M A S]  [C L I E N T S  P A R A M A S]  [C L I E N T S  P A R A M A S]   [C L I E N T S  P A R A M A S]  


@app.route("/api/v1/database-clients/<clientID>", methods=["GET", "PUT", "DELETE"])
def update_database_clients(clientID):

    path = os.path.join('static', 'clients.json')
    body = request.json

    if request.method == "GET":

        if not os.path.exists(path):
                return jsonify({"clients_list": [], "message": "Clients database empity", "status": "200 OK"}) 

        else:
            with open(path, "r") as file:
                clients_list = json.load(file)

                if any(client['clientID'] == clientID for client in clients_list):

                    for client in clients_list:
                        if client['clientID'] == clientID:
                            return jsonify({"client": client, "message": "Client loaded successfully", "status": "200 OK"})

                else:
                    return jsonify({"client": clientID, "message": "The client not exists", "status": "200 OK"})



    if request.method == "PUT":
  
        if not os.path.exists(path):
            return jsonify({"clients_list": [], "message": "Clients database empity", "status": "200 OK"})

        else:
            with open(path, "r+") as file:
                clients_list = json.load(file)

                if any(client['clientID'] == body['clientID'] and client['clientID'] == clientID for client in clients_list):

                    for client in clients_list:
                        if client['clientID'] == body['clientID']:
                            clients_list.remove(client)
                            clients_list.append(body)

                            with open(path, "w") as file:
                                file.write(json.dumps(clients_list, indent = 4))
                                return jsonify({"client": body, "message": "Client data updated", "status": "200 OK"})

                return jsonify({"list": [], "message": "Client not exist", "status": "200 OK"})




    if request.method == "DELETE":

        if os.path.exists(path):
            with open(path, "r+") as file:

                clients_list = json.load(file)
                for client in clients_list:
                    if client['clientID'] == clientID:

                        clients_list.remove(client)
                        with open(path, "w") as file:

                            file.write(json.dumps(clients_list, indent = 4))
                            return jsonify({"client": clientID, "message": "Client deleted successfully", "status": "200 OK"})

                    return jsonify({"client": clientID, "message": "The client not exists", "status": "200 OK"})

        return jsonify({"clients_list": [], "message": "Clients data base empity", "status": "200 OK"})




#  [F I L E S   U P L O A D]  [F I L E S   U P L O A D]  [F I L E S   U P L O A D]  [F I L E S   U P L O A D]



@app.route("/api/v1/upload-file", methods=["GET", "POST"])
def upload_file():

    path = os.path.join('static', 'files')

    if request.method == "POST":
    
        if request.files:
            file = request.files["file"]

            if file.filename == "":
                return jsonify({'message': 'Unnamed file', 'status': 'BAD REQUEST 400'})

            if not os.path.exists(path):
                os.mkdir(path)    
                
                if allowed_file(file.filename):
                    filename = secure_filename(file.filename)
                    file.save(os.path.join(path, filename))
                    return jsonify({'file': filename, 'path': path, 'message': 'File saved successfully', 'status': '201 CREATED"'})
                
                else:
                    return jsonify({'message': 'That file extension is not allowed', 'status': 'BAD REQUEST	400'})

            else:
                if allowed_file(file.filename):
                    filename = secure_filename(file.filename)
                    file.save(os.path.join(path, filename))
                    return jsonify({'file': filename, 'path': path, 'message': 'File saved successfully', 'status': '201 CREATED"'})
                
                else:
                    return jsonify({'message': 'That file extension is not allowed', 'status': 'BAD REQUEST	400'})


    return jsonify({'message': 'Upload Files Page', 'status': '200 ok'})
        
    

 #   [F I L E S   PARAMS]   [F I L E S   PARAMS]   [F I L E S   PARAMS]


@app.route("/api/v1/uploads/<file_name>", methods=['GET', 'DELETE'])
def get_file(file_name):
    
    

    if request.method == "GET":
        path = os.path.join('static', 'files')

        try:
            return send_from_directory(path, file_name, as_attachment=False)
           
        except:
            return jsonify({"path": path, "message": "The file not exists", "status": "200 OK"})



    if request.method == "DELETE":
 
        path = os.path.join('static', 'files', file_name)

        if os.path.exists(path):

            os.remove(path)
            path = os.path.join("static", "files.json")
      
            with open(path, "r+") as file:

                files = json.load(file)
                for file in files:
                    if file['name'] == file_name:

                        files.remove(file)
                        with open(path, "w") as file:
                            file.write(json.dumps(files, indent = 4))
                            return jsonify({"path": path, "message": "File deleted successfully", "status": "200 OK"})            

        return jsonify({"path": path, "message": "The file not exists", "status": "200 OK"})



 #   [F I L E S   L I S T]   [F I L E S   L I S T]   [F I L E S   L I S T]   [F I L E S   L I S T]

@app.route("/api/v1/uploads/files-view", methods=["GET", "POST"])
def files_list():

    path = os.path.join("static", "files.json")
    
    if request.method == 'GET':
        if os.path.exists(path):

            with open(path, "r") as file:

                files = json.load(file)
                return jsonify({"files_list": files, "message": "Files list loaded", "status": "200 OK"})

        return jsonify({"files_list": [], "message": "Empty database files", "status":"200 ok"})


    if request.method == 'POST':
        body = request.json 
        
        if not os.path.exists(path):
            with open(path, "w") as file:
                files_list = []
                files_list.append(body)
                file.write(json.dumps(files_list, indent = 4))
                return jsonify({"file": body, "message": "Files list updated", "status": "200 OK"})
        else:
            with open(path, "r+") as file:
                files = json.load(file)
                files.append(body)  
                file.seek(0)
                json.dump(files, file, indent = 4)
                return jsonify({"order": body,"message":"Files list updated", "status": "200 OK"})



if __name__ == '__main__':
    app.run(debug=True, port=4000)
