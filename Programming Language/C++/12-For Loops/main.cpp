#include <iostream>
#include <cmath>
using namespace std;

int main() {

    int num[100];
    for(int i = 1;i <= 5;i++){
        num[i] = i*(i+1);
    }
    for (int index = 1; index <= 5; index++) {
        cout << num[index] << endl;
    }
    return 0;
}
