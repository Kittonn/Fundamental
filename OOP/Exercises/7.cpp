/*
    Write a probram with a mother class animal. Inside it define a name and 
    an age variables, and set_value() function.Then create two bases variables 
    Zebra and Dolphin which write a message telling the age, the name and giving 
    some extra information (e.g. place of origin).
*/

#include <iostream>
using namespace std;

class Animal {
    protected:
        string Name;
        int Age;
    public:
        Animal(string name,int age){
            Name = name;
            Age = age;
        }
};

class Zebra:public Animal {
    private:
        string Information;
    public:
        Zebra(string name, int age, string information):Animal(name,age){
            Information = information;
        }
        void message(){
            cout << Name << " " << Age << " " << Information << endl;
        }
};

class Dolphin:public Animal {
    private:
        string Information;
    public:
        Dolphin(string name, int age, string information):Animal(name,age){
            Information = information;
        }
        void message(){
            cout << Name << " " << Age << " " << Information << endl;
        }
};


int main(){
    Dolphin d("Dora", 18,"From Greenland");
    Zebra z("Zero",23,"From Africa");

    d.message();
    z.message();

    return 0;
}