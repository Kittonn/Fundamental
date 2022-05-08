#include <iostream>
using namespace std;

int main() {

    string phrase = "Kittipod Lambangchang";

    cout << phrase << endl;
    cout << phrase.length() << endl;
    phrase[2] = 'K';
    cout << phrase[2] << endl;
    cout << phrase.find("Lambangchang",0) << endl;
    cout << phrase.substr(8,5) << endl;

    return 0;
}
