#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main() {
    
    int num = 36;

    printf("%d\n", num + 2);
    printf("%d\n", num - 2);
    printf("%d\n", num * 2);
    printf("%d\n", num / 2);
    printf("%.0f\n", pow(num,2));
    printf("%.0f\n", sqrt(num));
    printf("%.0f\n", ceil(36.99)); // round number up
    printf("%.0f", floor(36.99)); // round number down

    return 0;
}