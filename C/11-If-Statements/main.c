#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int Max(int a, int b,int c) {
    int result;
    if (a >= b && a>=c) {
        result = a;
    } else if (b >= a && b >= c) {
        result = b;
    } else {
        result = c;
    }
    return result;
}


int main() {
    
    // printf("%d",Max(1,2,3));

    if (!(1 > 2 || 2 > 5)) {
        printf("True");
    } else {
        printf("False");
    }

    return 0;
}



