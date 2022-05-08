#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>



int main() {

    /*  Writting
    FILE * fpointer = fopen("name.txt", "w");

    fprintf(fpointer,"Kittipod Lambangchang\nKitton");

    fclose(fpointer);
    */


    /* add file
    FILE * fpointer = fopen("name.txt", "a");

    fprintf(fpointer,"\nlnwtxn");

    fclose(fpointer); 
    */

    // read
    char line[255];
    FILE * fpointer = fopen("name.txt", "r");

    fgets(line, 255, fpointer);
    printf("%s",line);

    fclose(fpointer); 

    return 0;
}



