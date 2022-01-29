#include <stdio.h>
#include <stdlib.h>
#include <math.h>

int main() {
    char chr;
    printf("Enter one character: ");
    scanf("%c",&chr);
    printf("%c\n",chr);

    char name[20];
    printf("Enter your name: ");
    fgets(name, 20, stdin);
    printf("%s",name);

    float gpa;
    printf("Enter your gpa: ");
    scanf("%f",&gpa);
    printf("%f\n", gpa);
    
    int age;
    printf("Enter your age: ");
    scanf("%d", &age);
    printf("%d\n",age);

    return 0;
}