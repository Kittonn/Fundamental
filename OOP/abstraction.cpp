#include <iostream>
using namespace std;

// abstraction
class AbstractEmployee {
    virtual void AskPromotion() = 0;
};

class Employee:AbstractEmployee {

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
            Age = age;
        }

        int getAge(){
            return Age;
        }

        Employee(string aName, string aCompany,int aAge) {
            Age = aAge;
            Name = aName;
            Company = aCompany;
        } 
        
        void AskPromotion(){
            if(Age > 30){
                cout << Name << " got promoted" << endl;
            } else {
                cout << Name << " sorry NO promotion for you!" << endl;
            }
        }
};

int main(){

    Employee employee1("Kittipod","LA",40);

    employee1.AskPromotion();


    return 0;
}