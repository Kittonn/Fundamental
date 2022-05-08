/* 
    Perform addition operation on complex data using class and object. 
    The program should ask for real and imaginary part of two complex numbers, 
    and display the real and imaginary parts of their sum.
*/

#include <iostream>
using namespace std;

class Number {
    private:
        double X,Y;
    public:
        Number(double x,double y){
            X = x;
            Y = y;
        }

        double getX(){
            return X;
        }

        double getY(){
            return Y;
        }


    

};

int main(){

    double a,b,c,d;
    cout << "Enter real and imaginary part of Number : ";
    cin >> a >> b;
    cout << "Enter real and imaginary part of Number : ";
    cin >> c >> d;
    Number n1(a,b);
    Number n2(c,d);
    cout << "Sum : " << n1.getX() + n2.getX() << " " << n1.getY() + n2.getY();

    return 0;
}