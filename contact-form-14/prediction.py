# ML libraries
import numpy as np
import pandas as pd
#import statsmodels.api as sm
import seaborn as sns
sns.set()
from sklearn.preprocessing import LabelEncoder
from sklearn.preprocessing import MinMaxScaler
from sklearn.model_selection import train_test_split
# Classifiers
from sklearn.ensemble import RandomForestClassifier
from sklearn.ensemble import StackingClassifier
from sklearn.linear_model import LogisticRegression
from sklearn.neighbors import KNeighborsClassifier
from sklearn.linear_model import LogisticRegression
from sklearn import svm
# Regressors
from sklearn.ensemble import StackingRegressor
from sklearn.svm import SVR
from sklearn.ensemble import RandomForestRegressor
from sklearn.ensemble import AdaBoostRegressor
from sklearn.tree import DecisionTreeRegressor
from sklearn.linear_model import LinearRegression

def pred(arr):
    dataset = pd.read_excel(r'C:\Users\Mahira\Desktop\bhos 5ci semestr\DiplomaWork\dataset_risk.xlsx', sheet_name='Sheet3')
    # The inputs are everything BUT the dependent variable, so we can simply drop it
    inputs = dataset.drop(['Risk Probability', 'Risk Impact','Project ID', 'Project Requirements', 'Risk Description', 'Fixing Cost(percentage of total Budget)', 'Fixing duration (days)'],axis=1)
    # Add new parameters to inputs df
    #arr = np.array([arr['pcategory'], arr['rcategory'], arr['risk_items'], arr['risk_cat'], int(arr['budget']), int (arr['duration'])])
    inputs = inputs.append(pd.DataFrame(arr.reshape(1,-1), columns=inputs.columns), ignore_index=True)
    #inputs = pd.concat(inputs, pd.DataFrame(arr.reshape(1,-1)), axis=0)
    # The target(s) (dependent variable) is 'risk probability'
    targets = dataset['Risk Probability']

    # one-hot encoding
    inputs = pd.get_dummies(inputs, columns = ['Project Category', 'Requirement Category', 'Risk', 'Risk Category'])
    
    inputs1 = inputs[[
       'Budget (dollar)', 'Duration (days)', 
       'Project Category_Enterprise System',
       'Project Category_Management Information System',
       'Project Category_Safety Critical System',
       'Project Category_Transaction Processing System',
       'Requirement Category_Constraints', 'Requirement Category_Functional',
       'Requirement Category_Interfaces', 'Requirement Category_Performance',
       'Requirement Category_Reliability & Availability',
       'Requirement Category_Safety', 'Requirement Category_Security',
       'Requirement Category_Standards', 'Requirement Category_Supportability',
       'Requirement Category_Usability',  'Risk Category_External',
       'Risk Category_Organizational Environment',
       'Risk Category_Planning and Control',
       'Risk Category_Project complexity', 'Risk Category_Requirement',
       'Risk Category_Team']]
    
    # Data Scaling - create a scaler object
    scaler = MinMaxScaler()
    # Fit the inputs (calculate the mean and standard deviation feature-wise)
    scaler.fit(inputs1)
    # Scale the features and store them in a new variable (the actual scaling procedure)
    inputs_scaled = scaler.transform(inputs1)
    # Take last element and remove it from inputs_scaled
    last_test = inputs_scaled[-1]
    indexArray = [i for i in range(len(inputs_scaled)-1)]
    inputs_scaled = inputs_scaled[indexArray]
    # Train-Test Splitting
    x_train, x_test, y_train, y_test = train_test_split(inputs_scaled, targets, test_size=0.2, stratify = targets, random_state= 365)
    X_train, X_val, Y_train, y_val = train_test_split(x_train, y_train, test_size=0.2, stratify = y_train, random_state= 365)
    # Model fitting
    #reg = SVR(kernel = "linear", C = 1e-1, gamma = 1e-8, epsilon = 0.3 )
    level0 = list()
    level0.append(('rf', RandomForestRegressor()))
    level0.append(('adaDT', AdaBoostRegressor(DecisionTreeRegressor(max_depth=4), n_estimators=300, random_state=365)))
    level0.append(('svm', SVR(kernel = "linear", C = 1e-1, gamma = 1e-8, epsilon = 0.3 )))
    # define meta learner model
    level1 = LinearRegression()
    # define the stacking ensemble
    stack_model = StackingRegressor(estimators=level0, final_estimator=level1, cv=8)
    stack_model.fit(x_train,y_train)
    y_pred = stack_model.predict(last_test.reshape(1,-1))
    return y_pred

##arr = np.array(['Transaction Processing System', 'Functional', 'Budget', 'Organizational Environment', 330000, 40])
#arr = {'pcategory': 'Transaction Processing System', 'rcategory': 'Functional', 'budget_r': 'Budget', 'org_env_cat': 'Organizational Environment', 'budget': '330000', 'duration': '40'}
#test = pred(arr)
#print(test)

def impact_pr(arr):
    dataset = pd.read_excel(r'C:\Users\Mahira\Desktop\bhos 5ci semestr\DiplomaWork\dataset_risk.xlsx', sheet_name='Sheet3')
    # The inputs are everything BUT the dependent variable, so we can simply drop it
    inputs = dataset.drop(['Risk Probability', 'Risk Impact','Project ID', 'Project Requirements', 'Risk Description', 'Fixing Cost(percentage of total Budget)', 'Fixing duration (days)'],axis=1)
    # Add new parameters to inputs df
    #arr = np.array([arr['pcategory'], arr['rcategory'], arr['risk_items'], arr['risk_cat'], int(arr['budget']), int (arr['duration'])])
    inputs = inputs.append(pd.DataFrame(arr.reshape(1,-1), columns=inputs.columns), ignore_index=True)
    #inputs = pd.concat(inputs, pd.DataFrame(arr.reshape(1,-1)), axis=0)
    # The target(s) (dependent variable) is 'risk probability'
    le=LabelEncoder()
    dataset['Risk Impact']=le.fit_transform(dataset['Risk Impact'])
    targets = dataset['Risk Impact']
    # one-hot encoding
    inputs = pd.get_dummies(inputs, columns = ['Project Category', 'Requirement Category', 'Risk', 'Risk Category'])
    
    inputs1 = inputs[[
       'Budget (dollar)', 'Duration (days)', 
       'Project Category_Enterprise System',
       'Project Category_Management Information System',
       'Project Category_Safety Critical System',
       'Project Category_Transaction Processing System',
       'Requirement Category_Constraints', 'Requirement Category_Functional',
       'Requirement Category_Interfaces', 'Requirement Category_Performance',
       'Requirement Category_Reliability & Availability',
       'Requirement Category_Safety', 'Requirement Category_Security',
       'Requirement Category_Standards', 'Requirement Category_Supportability',
       'Requirement Category_Usability', 'Risk Category_External',
       'Risk Category_Organizational Environment',
       'Risk Category_Planning and Control',
       'Risk Category_Project complexity', 'Risk Category_Requirement',
       'Risk Category_Team']]
    
    # Data Scaling - create a scaler object
    scaler = MinMaxScaler()
    # Fit the inputs (calculate the mean and standard deviation feature-wise)
    scaler.fit(inputs1)
    # Scale the features and store them in a new variable (the actual scaling procedure)
    inputs_scaled = scaler.transform(inputs1)
    # Take last element and remove it from inputs_scaled
    last_test = inputs_scaled[-1]
    indexArray = [i for i in range(len(inputs_scaled)-1)]
    inputs_scaled = inputs_scaled[indexArray]
    # Train-Test Splitting
    x_train, x_test, y_train, y_test = train_test_split(inputs_scaled, targets, test_size=0.2, stratify = targets, random_state= 365)
    X_train, X_val, Y_train, y_val = train_test_split(x_train, y_train, test_size=0.2, stratify = y_train, random_state= 365)
    # Model fitting
    #clf=RandomForestClassifier()
    knn_model = KNeighborsClassifier(n_neighbors=8, weights='uniform', algorithm='ball_tree')
    clf2 = svm.SVC(kernel='linear',C=1, gamma='scale') # Linear Kernel
    rfc = RandomForestClassifier(n_estimators= 300, min_samples_split=10, max_features= 'sqrt', max_depth=6, criterion='gini')
    model2 = LogisticRegression(multi_class='multinomial', solver='lbfgs', C=1.0, max_iter=100, penalty='l2')

    level0 = list()
    level0.append(('rf', rfc))
    level0.append(('knn', knn_model))
    level0.append(('svc', clf2))
    # define meta learner model
    level1 = model2
    # define the stacking ensemble
    stack_model = StackingClassifier(estimators=level0, final_estimator=level1, cv=8)
    #Train the model using the training sets y_pred=clf.predict(X_test)
    stack_model.fit(x_train,y_train)
    y_pred = stack_model.predict(last_test.reshape(1,-1))
    if y_pred == 0:
        result = "High"
    elif y_pred == 1:
        result = "Low"
    elif y_pred == 2:
        result = "Very Low"
    elif y_pred == 3:
        result = "Moderate"
    return result