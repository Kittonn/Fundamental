#include <iostream>
using namespace std;

class Employee {
    
    public:
        // attributes
        string Name;
        string Company;
        int Age;

        void sayHello(){
            cout << "Hello World";
        }

        Employee(string aName, string aCompany,int aAge) {
            Age = aAge;
            Name = aName;
            Company = aCompany;
        } 
        
};

int main(){
    
    
    Employee employee1("Kittipod","LA",18);

    employee1.sayHello();
    
    cout << endl << employee1.Name;
    
    return 0;
}