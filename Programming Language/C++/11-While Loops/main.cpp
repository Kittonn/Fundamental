#include <iostream>
#include <cmath>
using namespace std;

int main() {
    int index = 5;
    while (index < 5) {
        cout<< index << endl;
        index++;
    }

    do {
        cout << index << endl;
        index++;
    } while (index < 5);
    
    return 0;
}
