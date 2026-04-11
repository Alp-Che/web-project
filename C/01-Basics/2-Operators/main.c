#include <stdio.h>
#include <stdlib.h>

int main()
{
    int a = 10, b = 3;
    int result;

    // 1. Arithmetic Operators
    printf("--- Arithmetic ---\n");
    printf("Addition:       %d + %d = %d\n",  a, b, a + b);
    printf("Subtraction:    %d - %d = %d\n",  a, b, a - b);
    printf("Multiplication: %d * %d = %d\n",  a, b, a * b);
    printf("Division:       %d / %d = %d\n",  a, b, a / b);
    printf("Remainder:      %d %% %d = %d\n", a, b, a % b);

    // 2. Relational Operators
    printf("(1: True   0: False) ---\n");
    printf("(a == b): %d\n", a == b);
    printf("(a != b): %d\n", a != b);
    printf("(a > b):  %d\n", a > b);

    // 3. Logical Operators
    printf("\n--- Logical ---\n");
    printf(" a = %d    b = %d\n && = and  || = or \n", a, b);
    printf("(a>5 && b<5) If both true:       %d\n", (a > 5 && b < 5));
    printf("(a>5 && b>5) If just one true :  %d\n", (a > 5 && b > 5));
    printf("(a==b || a>b) At least one true :%d\n", (a == b || a > b));
    printf("(a==b || a<b) At both false :    %d\n", (a == b || a < b));

    // 4. Increment / Decrement
    printf("\n--- Increment/Decrement ---\n");
    int c = 5;
    printf("Original c: %d\n", c);
    c++; // c = c + 1
    printf("After c++: %d\n",  c);
    c--; // c = c - 1
    printf("After c--: %d\n",  c);

    return 0;
}
