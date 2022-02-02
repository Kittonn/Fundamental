#include <iostream>
#include <cmath>
using namespace std;

string Dayname(int day) {
    string dayname;
    switch(day) {
        case 0:
            dayname = "Sunday";
            break;
        case 1:
            dayname = "Monday";
            break;
        case 2:
            dayname = "Tuesday";
            break;
        case 3:
            dayname = "Wednesday";
            break;
        case 4:
            dayname = "Thursday";
            break;
        case 5:
            dayname = "Friday";
            break;
        case 6:
            dayname = "Saturday";
            break;
        default:
            dayname = "No days";
            break;
    }
    return dayname;
}

int main() {
    int day;
    cin >> day;
    cout << Dayname(day);
    return 0;
}