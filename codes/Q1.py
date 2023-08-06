import numpy as np

#Defining the vectors A and B
A = np.array([[1,1],[5,-7]])
B = np.array([2,20])

#solving Ax=B to find x
x = np.linalg.solve(A,B)

print(x)
