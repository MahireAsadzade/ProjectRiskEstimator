# Flask libraries
import json
from flask import request, redirect, url_for, jsonify
from flask import Flask, render_template
from prediction import pred, impact_pr
import numpy as np
app = Flask(__name__, template_folder='templates')

prob = {}
impacts = {}
result ={}

@app.route('/')
def index():
    return render_template('index.html')


@app.route('/test', methods=['POST'])
def test():
    global prob
    global impacts
    global result
    output = request.get_json()
    result = json.loads(output) #this converts the json output to a python dictionary
    print(result) # Printing the new dictionary
    #prob.append([result['pcategory'], result['rcategory'], result['risk_items'][i], result['risk_cat'][i], result['budget'], result['duration']])
        
    return result


@app.route('/results', methods=['POST', 'GET'])
def results():
    global prob
    global impacts
    global result
    for i in range (0, len(result['risk_items'])):
        params = np.array([result['pcategory'], result['rcategory'], result['risk_items'][i], result['risk_cat'][i], result['budget'], result['duration'] ])
        pred_prob = pred(params)
        pred_imp = impact_pr(params)
        prob[result['risk_cat'][i]]=pred_prob[0]
        impacts[result['risk_cat'][i]]=pred_imp
     
    return render_template('results.html', prob=prob, impacts = impacts)



if __name__ == '__main__':
    app.debug = True
    app.run()
