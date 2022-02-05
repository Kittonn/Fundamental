/*
    Write a class having two private variables 
    and one member function which will return the area of the rectangle.
*/

#include <iostream>
using namespace std;
class Rectangle {
    private:
        double width,height;
    public:
        Rectangle(double w,double h){
            width = w;
            height = h;
        }

        double getWidth(){
            return width;
        }

        double getHeight(){
            return height;
        }

        void getArea(){
            cout << getWidth() * getHeight();
        }
};

int main(){
    double w,h;
    cout << "Enter width ";
    cin >> w;
    cout << "Enter height ";
    cin >> h;
    Rectangle r(w,h);

    r.getArea();

    return 0;
}