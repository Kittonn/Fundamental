import numpy as np

arr = np.ones((5,5))
arr[:,[0,-1]] = 0
arr[[0,-1],:] = 0
print(arr)