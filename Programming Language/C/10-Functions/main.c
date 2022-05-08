#include <stdio.h>
#include <stdlib.h>
#include <math.h>

void Name(char name[], int num) {
    printf("Kittipod %s %d\n",name,num);
}

float Cube(float a,float b) {
    return pow(a,b);
}

int main() {
    
    Name("Lambangchang", 10);
    printf("%f",Cube(5,2));
    return 0;
}
