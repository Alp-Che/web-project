#include <stdio.h>
#include <stdlib.h>

int isPrime(int num) {
    if (num < 2) {
        return 0;
    }
    for (int i = 2; i * i <= num; i++) {
        if (num % i == 0) {
            return 0;
        }
    }
    return 1;
}

int main()
{

    // 1. FOR LOOP
    // Printing numbers from 1 to 5
    printf("--- For Loop (Counting 1 to 5) ---\n");
    for (int i=1; i<=5; i++) {
        printf("Number: %d\n", i);
    }

    // 2. WHILE LOOP
    //Subtract a number from 10 backwards.
    printf("\n--- While Loop (Countdown) ---\n");
    int countdown = 10;
    while (countdown > 0) {
        printf("Number: %d\n", countdown);
        countdown--;
    }
    printf("end\n");

    // 3. DO-WHILE LOOP

    printf("\n--- Do-While Loop (Input Validation) ---\n");
    int choice;
    do {
        printf("Enter 0 to exit the loop: ");
        scanf("%d", &choice);
    } while (choice != 0);

    // 4. BREAK & CONTINUE
    printf("\n--- Break & Continue (Search Example) ---\n");
    for (int j = 1; j <= 10; j++) {
        if (j == 3) {
            continue;
        }
        if (j == 7) {
            break;
        }

        printf("Current value: %d\n", j);
    }
    printf("Skipping number 3 (continue)\n");
    printf("Stop at 7 (break)\n");

    //--- question 1 ---
    printf("\n--- question 1 ---\n");
    //Write a C program to compute the sum of the first 10 natural numbers.

    float sum=0;
    for(int i=0; i<=10; i++){
        sum = sum + i;
    }
    printf("sum =   %d\n",sum);



    //--- question 2 ---
    printf("\n--- question 2 ---\n");
    //Write a program in C to read 10 numbers from the keyboard and find their sum and average.

    int avarage;
    sum=0;
    for(int i=0; i<=10; i++){
        sum=sum+i;
    }
    sum=sum/10;
    printf("avarage = %.2f\n",sum);



    //--- question 3 ---
     printf("\n--- question 3 ---\n");
    //Write a program in C to display the multiplication table for a given integer.

    int table;
    sum=0;
    for(int i=1; i<=10; i++){
        for(int j=1; j<=10; j++){
            printf("%d x %d = %d \n",i,j,(i*j));

        }
        printf("\n");
    }



    //--- question 4 ---
     printf("\n--- question 4 ---\n");
    //Write a program in C to display a pattern like a right angle triangle using an asterisk

    for(int i=0; i<=5; i++){
        for(int j=0; j<i; j++){
                printf("*");
        }
        printf("\n");
    }



    //--- question 5 ---
     printf("\n--- question 5 ---\n");
    //Write a C program to find and print the first 10 Fibonacci numbers using a while loop.

    int caunt=10;
    int fibFirst=0, fibSecond=1;

    while(caunt > 0){
            int fibNext;
            printf("%d ", fibFirst);
            fibNext = fibFirst + fibSecond;
            fibFirst = fibSecond;
            fibSecond = fibNext;

            caunt--;
    }



    //--- question 6 ---
     printf("\n--- question 6 ---\n");
    //Write a C program that calculates and prints the sum of prime numbers up to a specified limit (e.g., 50) using a do-while loop.

    int num1=2;
    int sum1=0;
    int limit;

    printf("write a limit:");
    scanf("%d", &limit);

    do{
        if(isPrime(num1)){
            sum1 = sum1 + num1;
        }
        num1++;
    }while(sum1 <= limit);

    printf("Sum of prime numbers up to %d: %d\n", limit, sum1);

}


