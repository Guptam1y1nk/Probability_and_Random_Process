import numpy as np                       #Importing numpy
A = np.array([[1,1],[5,-7]])             #Defining the vector A
B = np.array([2,20])                     #Defining the vector B
x = np.linalg.solve(A,B)                 #applying linalg.solve to find x such that Ax=B
print(x)                                 #printing the solution of equation Ax=B 
