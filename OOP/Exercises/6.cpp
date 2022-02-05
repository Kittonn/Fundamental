/*
    Write a program with a mother class and an inherited daugther class.
    Both of them should have a method void display ()that prints a message 
    (different for mother and daugther).In the main define a daughter 
    and call the display() method on it.
*/

#include <iostream>
using namespace std;

class Mother {
    public:
        virtual void display(){
            cout << "Mother Class." << endl;
        }
};

class Daughter : public Mother {
    public:
        void display(){
            cout << "Daughter Class.";
        }
};

int main(){
    Daughter d;
    Mother m;
    Mother *m1 = &m;
    Mother *m2 = &d;

    m1 ->display();
    m2 ->display();

    return 0;
}