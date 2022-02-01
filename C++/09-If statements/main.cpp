#include <iostream>
#include <cmath>
using namespace std;


int main() {
    bool t = true;
    bool f = false;
    if (t && f) {
        cout << "True";
    } else if (t) {
        cout << "False";
    } else {
        cout << "Else";
    }
    return 0;
}
