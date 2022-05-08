#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>



int main() {

    int arr[2][3] = {{12,2,6},{3,4,5}};
    for(int i = 0; i < sizeof(arr) / sizeof (arr[0]); i++) {
        for (int j = 0; j < sizeof(arr[0]) / sizeof(arr[0][0]); j++) {
            printf("%d\n",arr[i][j]);
        }
        printf("\n");
    }

    return 0;
}

