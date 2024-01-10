from flask import Flask,request,jsonify
from dotenv import load_dotenv
from flask_cors import CORS,cross_origin
import os
load_dotenv()
username = os.getenv('USERNAME')
print(username)

app = Flask(__name__)


#CORS(app, resources={r'*': {'origins': '*'}})
CORS(app)
'''staticdata = [{"Employes":[
    {"name":"John",
     "country":"USA",
     "city":"NewYork",
     "contact":"1999-2222-222"},
     {"name":"John",
      "country":"UK",
      "city":"London",
      "contact":"2233-5555-3333"}
]},{"company":[
    {'companyname':'Capgemini',
     'role':'Senior Consultant','salary':'13LPA'},
     {
         'companyname':'Accenture',
         'role':'Manager',
         'salary':'15LPA'
     }
]}]'''

createdata = []

@app.route('/createempdetails',methods=['POST'])
def create_employe_details():
    if request.method=='POST':
        data = request.json
        print(data)
        createdata.append(data)
        return jsonify({"success":"Employe Details Successfully created"})
    else:
        return jsonify({"error":"Error in HTTP request"})



@app.route('/empdetails',methods=['GET'])
def fetch_employee_details():
    
    return jsonify(createdata)



if __name__=='__main__':

    app.run(debug=False)