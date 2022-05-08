/*
    Write a program that defines a shape class with a constructor that 
    gives value to width and height. The define two sub-classes triangle 
    and rectangle, that calculate the area of the shape area (). In the main, 
    define two variables a triangle and a rectangle and then call the area() function 
    in this two varibles.
*/

#include <iostream>
using namespace std;

class Shape {
    protected:
        double width,height;
    public:
        Shape(int w,int h){
            width = w;
            height = h;
        }
};

class Tri: public Shape{
    public:
        Tri(double w,double h):Shape(w,h){};

        double getAreaTri(){
            return 0.5 * width * height;
        }
};

class Rec:public Shape {
    public:
        Rec(double w,double h):Shape(w,h){};
        double getAreaRec(){
            return width * height;
        }
};

int main(){
    double w,h;
    cin >> w >> h;
    Tri t(w,h);
    Rec r(w,h);
    
    cout << "Area of Triangle : " << t.getAreaTri() << endl << "Area of Rectangle : " << r.getAreaRec();
    
    return 0;
}