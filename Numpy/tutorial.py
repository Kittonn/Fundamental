from urllib.request import ProxyBasicAuthHandler
import numpy as np

arr = np.array([1,21,3,4])
arr = np.arange(2,20,2,dtype='float').reshape(3,3)
arr = np.linspace(1.,4., 6)
arr = np.eye(4,5)
arr = np.diag([1,2,3],4)
arr = np.zeros((4,5))
arr = np.ones((2,2),dtype="int")
arr = np.array([1,2,3,4,5,6])
arr = np.diag((5,5))
print(arr)