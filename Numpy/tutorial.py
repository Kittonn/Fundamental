import numpy as np

#.array(array, ndmin) => สร้าง array, ndmin => ขนาด array ที่สร้าง
#.ndim => มีกี่ Dimensions

# [x,y,z] => เข้าถึง
# [start:end:step] => slicing

#.copy() => not affect original array 
#.view() => affect original array 

#.shape => shape of array
#.reshape(shape) => change shape of arrray

arr = np.array([[1,2,3,4],[1,2,3,4]])
print(arr.ndim)