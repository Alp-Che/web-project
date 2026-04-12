#include <stdio.h>
#include <stdlib.h>

int main()
{
//   int score;
//
//    printf("--- University Grade Checker ---\n");
//    printf("Enter your exam score (0-100): ");
//    scanf("%d", &score);
//
//    // 1. If-Else Structure
//    printf("\n[If-Else Result]: ");
//    if (score < 0 || score > 100) {
//        printf("Invalid score! Please enter between 0-100.\n");
//    }
//    else if (score >= 90) {
//        printf("Excellent! You got an A.\n");
//    }
//    else if (score >= 60) {
//        printf("Passed! You are doing good.\n");
//    }
//    else {
//        printf("Failed. You need to study more.\n");
//    }
//
//    // 2. Switch-Case Structure
//    char status = (score >= 60) ? 'P' : 'F'; // practice type of if-else
//    printf("[Switch-Case Message]: ");
//    switch (status) {
//        case 'P':
//            printf("Status: Passed. Congratulations!\n");
//            break;
//        case 'F':
//            printf("Status: Failed. See you in summer school.\n");
//            break;
//        default:
//            printf("Status: Unknown.\n");
//    }

//    //--- question 1---
//    //Write a C program to read the value of an integer m and display the value of n is 1 when m is larger than 0, 0 when m is 0 and -1 when m is less than 0.
//    int n;
//    n = 10;
//
//    if (n>0){
//        return 1;
//    }
//    else if (n==0){
//        return 0;
//    }
//    else{
//        return -1;
//    }
//
    //--- question 2---
    //Write a C program to accept a coordinate point in an XY coordinate system and determine in which quadrant the coordinate point lies.

//    int x, y;
//    printf("write a cordinate point(x,y):");
//    scanf("%d,%d", &x, &y);
//
//    if(x>0 && y>0){
//        printf("The coordinate point (%d,%d) lies in the First quadrant.", x, y);
//    }
//    else if(x<0 && y>0){
//        printf("The coordinate point (%d,%d) lies in the Second quadrant.", x, y);
//    }
//    else if(x<0 && y<0){
//        printf("The coordinate point (%d,%d) lies in the Third quadrant.", x, y);
//    }
//    else if(x>0 && y<0){
//        printf("The coordinate point (%d,%d) lies in the Third quadrant.", x, y);
//    }
//    else{
//        printf("The coordinate point (%d,%d) lies in line.", x, y);
//    }

//    //--- question 3---
//    //Write a C program to calculate the root of a quadratic equation.
//
//    int a, b, c;
//
//    printf("ax^2 + bx + c");
//    printf("\ninput a:");
//    scanf("%d", &a);
//    printf("\ninput b:");
//    scanf("%d", &b);
//    printf("\ninput c:");
//    scanf("%d", &c);
//
//    if((b*b) - (4*(a*c))>= 0){
//        printf("Root are imaginary");
//    }
//    else{
//        printf("No solution.");
//    }

//    //--- question 4 ---
//    //Write a C program to check whether a triangle is Equilateral, Isosceles or Scalene.
//
//    int angle1 = 80, angle2 = 50, angle3 = 50;
//    if(angle1 + angle2 + angle3 != 180){
//        printf("this is not tringle because of angle");
//    }
//    else if (angle1 == angle2 && angle2==angle3){
//        printf("Equilateral");
//    }
//    else if(angle1 != angle2 && angle1 != angle3 && angle2 != angle3){
//        printf("Scalene");
//    }
//    else{
//        printf("Isosceles");
//    }

//    //--- question 4 ---
//    //Write a C program to check whether a character is an alphabet, digit or special character.
//
//    char character;
//    printf("input:");
//    scanf("%c", &character);
//
//    if((character >'a' && character < 'z') || (character > 'A' && character < 'Z')){
//        printf("\nThis is an alphabet.");
//    }
//    else if (character >= '0' && character <= '9'){
//        printf("\nThis is a digit");
//    }
//    else{
//        printf("\nThis is a special character");
//    }

//    //--- question 5 ---
//    //Write a C program for reading any Month Number and displaying the Month name as a word.
//
//    int mounth;
//    printf("write a number of mounth:");
//    scanf("%d", &mounth);
//
//    switch(mounth){
//    case 1:
//	       printf("January\n");  // Print "January" for input month number 1.
//	       break;
//	case 2:
//	       printf("February\n");  // Print "February" for input month number 2.
//	       break;
//	case 3:
//	       printf("March\n");  // Print "March" for input month number 3.
//	       break;
//	case 4:
//	       printf("April\n");  // Print "April" for input month number 4.
//	       break;
//	case 5:
//	       printf("May\n");  // Print "May" for input month number 5.
//	       break;
//	case 6:
//	       printf("June\n");  // Print "June" for input month number 6.
//	       break;
//	case 7:
//	       printf("July\n");  // Print "July" for input month number 7.
//	       break;
//	case 8:
//	       printf("August\n");  // Print "August" for input month number 8.
//	       break;
//	case 9:
//	       printf("September\n");  // Print "September" for input month number 9.
//	       break;
//	case 10:
//	       printf("October\n");  // Print "October" for input month number 10.
//	       break;
//	case 11:
//	       printf("November\n");  // Print "November" for input month number 11.
//	       break;
//	case 12:
//	       printf("December\n");  // Print "December" for input month number 12.
//	       break;
//	default:
//	       printf("Invalid Month number. \nPlease try again ....\n");  // Print a message for an invalid input.
//	       break;
//    }
//
    //--- question 6 ---
    //Write a C program which computes the area of various geometrical shapes using a menu-driven approach.
    int menu;
    int r, area, edge1, edge2, base, height;
    const int pi = 3.14;
    printf("----menu----\n");
    printf("1=circle\n");
    printf("2=rectangle\n");
    printf("3=triangle\n");
    scanf("%d", &menu);

    switch(menu){
    case 1: printf("---pi*r^2---\n");
            printf("write the r=");
            scanf("%d",r);
            area = r*r * pi;
            printf("%d", &area);
            break;

    case 2: printf("---edge1*edge2---\n");
            printf("write first edge:");
            scanf("%d", &edge1);
            printf("write second edge:");
            scanf("%d", &edge2);
            area = edge1 * edge2;
            break;

    case 3: printf("---base*height---\n");
            printf("write a base:");
            scanf("%d", &base);
            printf("write a height");
            scanf("%d", &height);
            area = (base * height)/2;
            break;
    default:
            printf("it is not in menu");
    }
    printf("%d", area);








}
