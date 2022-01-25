import numpy as np

arr = np.ones((5,5),dtype="int")
arr[1:-1,1:-1] = 0
print(arr)