#include <stdio.h>
#include <stdlib.h>

int main() {
    // 1. Integer
    int age = 20;

    // 2.1 Floating Point
    float gpa = 3.60;

    // 2.2 Double (more sensitive)
    double pi = 3.1415926535;

    // 3.1 Character
    char grade = 'A';

    // 3.2 String
    char name[] = "Alperen";
    char surname[] = "Celik";

    // --- Printing ---
    printf("Name: %s %s\n", name, surname);
    printf("Age: %d\n", age);
    printf("GPA: %.2f\n", gpa);
    printf("Letter Grade: %c\n", grade);

    // --- Size of types ---
    printf("\n--- Memory Sizes (in bytes) ---\n");
    printf("Size of int:   %zu bytes\n", sizeof(int));
    printf("Size of float: %zu bytes\n", sizeof(float));
    printf("Size of char:  %zu bytes\n", sizeof(char));

    return 0;
}
