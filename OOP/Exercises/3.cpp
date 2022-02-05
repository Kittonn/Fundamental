/*
    Write a c++ class called 'student' with

    Data members: name(char type), marks1,marks2 (integer type)

    The program asks the user to enter name and marks. Then calc_media() calculates 
    the media note and disp() display name and total media mark on screen in different lines.
*/

#include <iostream>
using namespace std;

class Student{
    private:
        string name;
        int masks1,masks2;
    public:
        Student(string aName,int aMasks1, int aMasks2){
            name = aName;
            masks1 = aMasks1;
            masks2 = aMasks2;
        }

        string getName(){
            return name;
        }

        int getMasks1(){
            return masks1;
        }

        int getMasks2(){
            return masks2;
        }

        int calc_media(){
            return getMasks1() + getMasks2();
        }

        void disp(){
            cout << "Name : " << getName() << endl << "Masks : " << calc_media();
        }
};

int main(){

    string name;
    int m1,m2;
    getline(cin,name);
    cin >> m1 >> m2;

    Student s(name,m1,m2);

    s.disp();


    return 0;
}
