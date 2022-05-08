/*
    Write a program and input two integers in main and pass them 
    to default constructor of the class. Show the result of the additon of two numbers.
*/

#include <iostream>
using namespace std;

class Addition{
    private:
        double A,B;
    public:
        Addition(int a,int b){
            A=a;
            B=b;
        }

        double getA(){
            return A;
        }
        
        double getB(){
            return B;
        }   

        void getAns(){
            cout << getA() + getB();
        }

};

int main(){

    double a,b;
    cin >> a >> b;
    Addition Add(a,b);
    
    Add.getAns();

    return 0;
}