import numpy as np
A = np.array([[1,1],[5,-7]])
B = np.array([2,20])
x = np.linalg.solve(A,B)
print(x)
