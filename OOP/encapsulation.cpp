#include <iostream>
using namespace std;

class Employee {

    private:
        // encapsulate
        string Name;
        string Company;
        int Age;

    public:

        // setter
        void setName(string name){
            Name = name;
        }

        // getter
        string getName(){
            return Name;
        }

        void setCompany(string company){
            Company = company;
        }

        string getCompany(){
            return Company;
        }

        void setAge(int age){
            if(age >= 18){
                Age = age;
            }
            else {
                Age = 0;
            }
            
        }

        int getAge(){
            return Age;
        }

        Employee(string aName, string aCompany,int aAge) {
            Age = aAge;
            Name = aName;
            Company = aCompany;
        } 
        
};

int main(){

    Employee employee1("Kittipod","LA",35);

    employee1.setName("Lambangchang");
    employee1.setAge(5);

    cout << employee1.getName() << endl;
    cout << employee1.getCompany() << endl;
    cout << employee1.getAge() << endl;

    return 0;
}