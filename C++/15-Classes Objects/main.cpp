#include <iostream>
#include <cmath>
using namespace std;

class Book {
    private:
        int pages;
    public:
        string title;
        string author;
        
        Book(string atitle, string aauthor, int apages){
           title = atitle;
           author = aauthor;
           setPage(apages);
        }

        void setPage(int apages) {
            if (apages <= 100 || apages >= 100) {
                pages = apages;
            } else {
                pages = -1;
            }
        }

        int getPage(){
            return pages;
        }

        bool hasPage(){
            if (pages >= 100) {
                return true;
            } 
            return false;
        }

        
};

int main() {
    
    Book book1("Harry","JK",0);

    return 0;
}
