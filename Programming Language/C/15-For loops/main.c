#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>



int main() {

    int arr[] = {1,2,3,4,5,6,8,9};

    //length => sizeof(arr) / sizeof(arr[0])

    printf("%d",sizeof(arr) / sizeof(arr[0]));
    for(int i = 0; i < sizeof(arr) / sizeof(arr[0]); i++) {
        printf("%d\n",arr[i]);
    }

    return 0;
}
