#include <iostream>
using namespace std;

// abstraction
class AbstractEmployee {
    virtual void AskPromotion(){};
};

class Employee:AbstractEmployee {

    private:
        // encapsulate
        
        string Company;
        int Age;
    protected: 
        string Name;

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
        virtual void Work(){
            cout << Name << " is checking email, task backlog, performing tasks.." << endl;
        }

};

class Developer:public Employee {
    public:
        string favProLan;
        Developer(string aName, string aCompany,int aAge, string afavProLan)
        : Employee(aName,aCompany,aAge){
            favProLan = afavProLan;
        }
        void FixBug(){
            cout << Name << " fixed bug using " << favProLan << endl;
        }
        void Work(){
            cout << Name << " is writing "<< favProLan << endl;
        }

};

class Teacher: public Employee {
    public:
        string Subject;
        Teacher(string aName, string aCompany,int aAge, string aSubject)
        : Employee (aName,aCompany,aAge){
            Subject = aSubject;
        }

        void PrepareLesson(){
            cout << Name << " " << getAge() << " is preparing " << Subject << endl; 
        }

        void Work(){
            cout << Name << " is teaching "<< Subject << endl;
        }
};

int main(){

    Employee employee1("Kittipod","LA",40);

    Developer dev1("Kitipod","MVK",17,"Python");
    
    Teacher t("Lambangchang","mary",18,"Computer");
    
    Employee *e1 = &dev1;
    Employee *e2 = &t;

    e1->Work();
    e2->Work();

    return 0;
}