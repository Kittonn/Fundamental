#include <stdio.h>
#include <stdlib.h>

int main() {
    /*
        %d => integer
        %f => float
        %c => character
        %s => string
    */

    int money = 500;
    float num = 1234.444;
    char txt[] = "Money";
    char chr = 'c';

    printf("Hello \"World\"\n");
    printf("%s %d %f %c",txt,money,num,chr);

    return 0;
}