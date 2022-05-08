#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>



int main() {

    int age = 30;

    int *p_age = &age;

    printf("%d\n", *p_age);
    *p_age = 80;
    printf("%d\n", *p_age);


    return 0;
}

