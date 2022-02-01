#include <iostream>
#include <cmath>

using namespace std;

int main() {
    int age;
    string name;
    getline(cin,name);
    cout << "Your name is " << name << endl;

    cout << "Enter your age : ";
    cin >> age;
    cout << "Age : " << age;
    return 0;
}
