#include <iostream>
#include <cmath>
using namespace std;

int main() {
    int age = 17;
    double gpa = 3.5;
    string name = "Kittipod";   

    int *pAge = &age;
    cout << *pAge;

    return 0;
}
