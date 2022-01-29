#include <stdio.h>
#include <stdlib.h>
#include <math.h>
#include <string.h>

struct Person {
    char name[20];
    int age;
} student,student2;


int main() {

    // struct Person student, student2;
    strcpy(student.name, "Kittipod");
    student.age = 20;

    strcpy(student2.name, "Lambangchang");
    student2.age = 30;

    printf("%s %d\n",student.name,student.age);
    printf("%s %d",student2.name,student2.age);
    return 0;
}


