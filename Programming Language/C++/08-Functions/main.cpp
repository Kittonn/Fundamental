#include <iostream>
#include <cmath>
using namespace std;

void name(string name, int age) {
    cout << name << endl;
    cout << age;
}

int N(int a,int b) {
    return a+b;
}

int main() {
    name("Kittipod",10);
    cout << endl;
    cout << N(18,2);
    return 0;
}
