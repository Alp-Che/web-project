#include <stdio.h>
#include <stdlib.h>

int main()
{
    int age;
    float weight;
    char first_letter;
    char university[50]; // 50 = max character

    printf("--- University Registration System ---\n");

    // 1. String
    printf("Enter your university name: ");
    scanf("%s", university);

    // 2. Character
    printf("Enter your grade's: ");
    scanf(" %c", &first_letter);

    // 3. Integer
    printf("Enter your age: ");
    scanf("%d", &age);

    // 4. Float
    printf("Enter your weight (kg): ");
    scanf("%f", &weight);

    // --- Resault ---
    printf("\n--- Profile Summary ---\n");
    printf("University: %s\n", university);
    printf("Initial: %c\n", first_letter);
    printf("Age: %d years old\n", age);
    printf("Weight: %.1f kg\n", weight);

    return 0;
}

