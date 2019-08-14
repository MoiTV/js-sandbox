#include <iostream>
using namespace std;

int main()
{
	int *a, *b;

	if (&a != &b)
	{
		cout << "not the same address" << endl;
	}
	else
	{
		cout << "same address" << endl;
	}

	return (0);
}
