#include <iostream>
using namespace std;

// class
class Employee {
    
    public:
        // attributes
        string Name;
        string Company;
        int Age;

        // method => function
        void sayHello(){
            cout << "Hello World";
        }

        // Constructors => Same name class
        Employee(string aName, string aCompany,int aAge) {
            Age = aAge;
            Name = aName;
            Company = aCompany;
        } 
        
};

int main(){
    
    // pass parameter to constructor
    // object
    Employee employee1("Kittipod","LA",18);

    employee1.sayHello();
    
    cout << endl << employee1.Name;
    
    return 0;
}