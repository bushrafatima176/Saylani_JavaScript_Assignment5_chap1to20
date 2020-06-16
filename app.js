//CHAPTER :01 ALERTS 

//Task 1:
//alert("Welcome");

//Task 2:
// alert("Error! Please enter a valid password");

//Task 3:
// alert("Welcome to JS Land..." +"\n" +"Happy Coding!");

//Task 4:
// alert("Welcome to JS Land...");
// alert("Happy Coding!" + "\n" + "Prevent this page from creating additional dialogs.");

//Task 5:
//  var a = "Hello... I can run JS through my web browser's console";
//  console.log(a);


//CHAPTER :02 VARIABLES FOR STRINGS 

//Task 1:
// var username;

//Task 2:
// var myName = "Bushra Fatima";

//Task 3: 
// var message ="Hello World";
// alert(message);

//Task 4:
// var students_bio = "Jhone Doe";
// alert(students_bio);
// var students_bio1 = "15 years old";
// alert(students_bio1);
// var students_bio2 = "Certified Mobile Application Development";
// alert(students_bio2);

//Task 5:
// var a ="PIZZA\nPIZZ\nPIZ\nPI\nP "
// alert(a);


//Task 6: 
// var email ="bushrafatima176@gmail.com";
// alert("My email address is " + email);

//Task 7:
// var book = "A smarter way to learn JavaScript";
// alert("I am trying to learn from the Book " + book);

//Task 8:
// document.write("Yah! I can write HTML content through JavaScript");

//Task 9:
// var x = "▬▬▬▬▬▬▬▬▬ஜ۩۞۩ஜ▬▬▬▬▬▬▬▬▬";
// alert(x);


//CHAPTER :03 VARIABLES FOR NUMBERS

//Task 1:
// var age ="I am 15 years old";
// alert(age);

//Task 3:
// var birthYear ="My birth year is 1990";
// document.write(birthYear);
// document.write("<br>" + "Data type of my ddeclared varaible is  number");

//Task 4:
//  var VisitorName ="<b>John Doe</b>";
//  var ProductTitle = "<b>T-shirt </b>";
//  var Quantity ="<b>5</b>";
//  document.write(VisitorName +" " + "ordered" + " "+ Quantity +" " + ProductTitle +"(s)  on XYZ Clothing store");

//CHAPTER :04  VARIABLE NAMES: LEGAL & ILLEGAL 

//Task 1:
// var a,b,c;

//Task 2:
//legal
// var userName;var $hello;var _student;var myname1;var first_name;
//illegal
//  var 1name; var he llo; var -f; var ?a; var var;

//Task 3:
//  document.write("<h1>Rules for naming JS variables</h1> <br>");
//  document.write("Variable names can only contain, numbers, $ and _ . For example $my_1stVariable <br>");
//  document.write("Variables must begin with a letter, $ or _ .  For example $name, _name or name <br> ");
//  document.write("Variable names are case sensitive <br>");
//  document.write("Variable names should not be JS keywords");


//CHAPTER :05 MATH EXPRESSIONS

//Task 1:
// var a = 3;
// var b = 5 ;
// var c = a+b;
// document.write("Sum of 3 and 5 is " + c);

//Task 2:
// var a = 3;
// var b = 5;
// var d = a-b;
// var e = a*b;
// var f = a/b;
// var g = a % b;
// document.write("Subtaraction of 3 and 5 is " + d +"<br>");
// document.write("Multiplication of 3 and 5 is " + e + "<br>");
// document.write("Division of 3 and 5 is " + f + "<br>");
// document.write("Modulus of 3 and 5 is " + g);

//Task 3:
// var a;
// document.write("Value after variable declaration is " + a);
// a = 5;
// document.write("<br>Initial value : " + a);
// a = ++a;
// document.write("<br>Value after increment is : " + a);
// a = a+7;
// document.write("<br> Value after addition is : " + a );
// a = --a;
// document.write("<br> Value after decrement : " + a );
// a = a % 3;
// document.write("<br> The remainder is : " + a );

//Task 4:
// var ticketPrice =600;
// var cost = ticketPrice * 5;
// document.write("Total cost to buy 5 tickets to a movie is " +cost +"PKR")

//Task 5:
// var a =+prompt("Enter number of table");
// document.write("Table of "+a +"<br>");
// for(var i=1; i<=10; i++)
//  {
//      document.write(a + "x" + i + "=" + a*i + "<br>");
//  }


//Task 6:
// var celsius = 25;
// var celsiusInF = (celsius*9)/5 + 32;
// document.write(celsius + 'C is ' + celsiusInF + 'F'+ "<br>");
// var fahrenheit = 70;
// var fahrenheitInC = ((fahrenheit - 32)*5)/9;
// document.write(fahrenheit + 'F is ' + fahrenheitInC + 'C');

//Task 7:
// document.write("<h1>Shopping Cart</h1>" + "<br>");
// var price1 = 650;
// document.write("Price of item 1 is " + price1 +"<br>");
// var quatity1 = 3;
// document.write("Quantity of item 1 is " + quatity1 + "<br>");
// var price2 = 100;
// document.write("Price of item 2 is " + price2 + "<br>");
// var quatity2 = 7;
// document.write("Quantity of item 2 is " + quatity2 + "<br>");
// var shipCharges = 100;
// document.write("Shipping charges"  + shipCharges + "<br>");
// var r1 = price1*quatity1;
// var r2 = price2*quatity2;
// var totalcost = r1 +r2 + shipCharges;
// document.write("Total cost of your order is " + totalcost)

//Task 8:
// document.write("<h1>Marks Sheet</h1>" + "<br>");
// var totalmarks =980;
// var obtainedmarks = 804;
// var per = (obtainedmarks/totalmarks)*100;
// document.write("Total Marks : " + totalmarks +"<br>");
// document.write("Marks obtained : " + obtainedmarks + "<br>");
// document.write("Percentage : " +per + "%");

//Task 9:
// document.write("<h1>Currency in PKR</h1>" + "<br>");
// var total =(10*104.80)+(25*28);
// document.write("Total Currency in PKR : " + total);

//Task 10:
// var a = ((6 + 5) * 10 ) / 2;
// document.write("Total : " + a);

//Task 11:
// document.write("<h1>Age Calculator</h1>" + "<br>");
// var currentyear = 2020;
// var birthyear = 1999;
// var age = (2020 -1999) ;
// document.write("Current Year :" + currentyear + "<br>");
// document.write("Birth Year :" + birthyear +"<br>");
// document.write("Your Age :" + age);

//Task 12:
// document.write("<h1>The Geometrizer</h1>" + "<br>");
// var radius=20;
// var circum = 2 *3.142 *radius;
// var area = 3.142 *(radius*radius);
// document.write("Radius of a circle : " + radius +"<br>");
// document.write("Circumference of a circle : " + circum +"<br>");
// document.write("Area of a circle : " + area);

// //Task 13:
// document.write("<h1>The Lifetime Supply Calculator</h1>" + "<br>");
// var fav ="Chocolate chip";
// var currentAge = 15;
// var estimateage = 65;
// var estimateday = 3;
// var a = estimateage - currentAge;
// var b = a * estimateday*365;
// document.write("Fav snack: " + fav +"<br>");
// document.write("Current Age: " + currentAge +"<br>");
// document.write("Estimated Maximum age: " + estimateage +"<br>");
// document.write("Amount of snacks per day : " + estimateday +"<br>");
// document.write("You will need  : " + b + " " + fav + "to last you until the ripe old age of "+ estimateage);



//CHAPTER :06-09

//Task :1
// document.write("Result : "+"<br>");
// var a =10;
// document.write("The value of a is : " + a+ "<br>");
// document.write("........................." + "</br>");
// document.write("<br>");
// a = ++a;
// document.write("The value of ++a is : " + a + "<br>");
// document.write("Now the value of a is : " + a + "<br>");
// document.write("<br>");
// a = a++;
// document.write("The value of a++ is : " + a++ + "<br>");
// document.write("Now the value of a is : " + a + "<br>");
// document.write("<br>");
// a = --a;
// document.write("The value of --a is : " + a + "<br>");
// document.write("Now the value of a is : " + a + "<br>");
// document.write("<br>");
// a = a--;
// document.write("The value of --a is : " + a-- + "<br>");
// document.write("Now the value of a is : " + a + "<br>");

//Task 2:
// var a =2,b=1;
// var result = --a - --b + ++b + b--;
// document.write("Result is : " + result);
// document.write("<br>--a<br> 1");
// document.write("<br>--a - --b <br> 1 - 0");
// document.write("<br>--a - --b + ++b<br> 1 - 0 + 1");
// document.write("<br>--a - --b + ++b + b--<br> 1 - 0 + 1 + 1");

//Task 3:
// var name =prompt("Enter your name");
// alert("Welcome " + name);

//Task 5:
// var a = +prompt("Enter number")
//  for(var i=1; i<=10; i++)
//  {
// if(a<5)
//  {
//      document.write(a + "x" + i + "=" + a*i + "<br>");
//  }
 
// else{
//     document.write("5" + "x" + i + "=" + 5*i + "<br>");
// }
// }


//Task 6:
// var subject1=prompt("Enter subject 1");
// var subject2=prompt("Enter subject 2");
// var subject3=prompt("Enter subject 3");
// var total=100;
// var subObtained1 = prompt("Enter" +subject1 + "Marks");
// var subObtained2 = prompt("Enter" +subject2 + "Marks");
// var subObtained3 = prompt("Enter" +subject3 + "Marks");
// var per1=(subObtained1/total)*100;
// var per2=(subObtained2/total)*100;
// var per3=(subObtained3/total)*100;
// var totalGrand = total *3;
// var obtained = subObtained1 + subObtained2 + subObtained3;
// var per = per1 + per2 + per3;
// document.write("<h4>Subject Total Marks Obtained Marks Percentage</h4>");
//  document.write("<br>"+ subject1 +"  " + total + "    "+ subObtained1 + "     " + per1 + "%")
//  document.write("<br>"+ subject2 +"  " + total + "    "+ subObtained2 + "     " + per2 + "%")
//  document.write("<br>"+ subject3 +"  " + total + "     "+ subObtained3 + "     " + per3 + "%")
// document.write("<br>"+"   "+totalGrand+"             "+obtained +"            " + per+"%");



//CHAPTER :09-11

//Task 1:
// var cityName = prompt("Enter city name");
// if (cityName === "Karachi" || cityName ==="karachi"){
//     alert("Welcome to city of lights!");
// }

//Task 2:
// var gender = prompt("Enter gender");
// if(gender === "female"){
//     alert("Good morning ma'am");
// }
// else{
//     alert("Good morning Sir");
// }

//Task 3:
// var color = prompt("Enter any traffic signal color");
// if(color === "Red"){
//     alert("Must stop");
// }
// else if(color ==="Yellow"){
//     alert("Ready to move");
// }
// else{
//     alert("MOVE NOW!");
// }

//Task 4:
// var fuel = +prompt("Enter remaining fuel");
// if ( fuel < 0.25){
//     alert("Please refill the fuel in your car");
// }
// else{
//     alert("No need to refill")
// }

//Task 5:
// a: alert will display
// b: not display
// c: alert will display
// d: alert will display
// e: alert will display
// f: alert will display

//Task 6:
// alert("Now enter subjects and total marks for mark sheet")
// var num1 = +prompt("Enter your 1st subject marks");
// var num2 = +prompt("Enter your 2nd subject marks");
// var num3 = +prompt("Enter your 3rd subject marks");
// var total = +prompt("Enter total marks");
// var r = num1+num2+num3 ;
// var per = r*100/total;
// document.write('<br>'+'Total Marks:'+total);
// document.write('<br>'+'Marks Obtained'+r);
// document.write('<br>'+'Percentage'+per+"%");
// if (per>=80){
// document.write("<br>"+"A-One")
// document.write("<br>"+"Excellent")

// }
// else if (per>=70){
// document.write("<br>"+"A")
// document.write("<br>"+"Remark:Good")
// }
// else if (per>=60){
// document.write("<br>"+"B")
// document.write("<br>"+"Remark:You need Improvement")
// }
// else{
//    document.write("<br>"+"Fail")
//    document.write("<br>"+"Remark: Sorry")
// }

//Task 7:
// var mynum =7;
// var num = +prompt("Enter your number between 1 to 10");
// if (num === mynum){
//     document.write("<br> Bingo! Correct")
// }
// else if (num === ++mynum){
//     document.write("<br> Close enough to correct answer")

// }
// else{
//    document.write("<br> Try again")

// }

//Task 8:
// var a= +prompt("Enter your number for divisible by 3");
// if (a % 3==0){
// document.write("<br> It is divisible by 3")
// }
// else{
//  document.write("<br> It is not divisible by 3")
// } 

//Task 9:
// var num = +prompt("Enter Your Number to check odd and even");
 
// if (num % 2==0){
// document.write("<br> Even Number")
// }
// else{ document.write("<br> Odd Number")
// }

//Task 10:
// var temp =+prompt("Enter your City Temperature");

// if( temp >40){
// alert("Its hot outside" );
// }
// else if ( temo >30){

// alert("The Weather today is Normal")
// }
// else if(temp >20){
//     alert("Today’s Weather is cool")
// }
// else{
//     alert("OMG! Today’s weather is so Cool")
// }

//Task 11:
// var num1 = +prompt("Enter 1st number");
//var sign = prompt("Enter your sign");
//var num2 = +prompt("Enter 2nd number");
//if(sign === '+'){
//  r = num1+num2;
//document.write("<br>"+r);
// }
// else if (sign === '*') {
// r2=num1*num2;
// document.write("<br>"+r2);
//  }
// else if(sign === '-') {
// r3=num1-num2;
//document.write("<br>"+ r3)
// }
// else if (sign === '/'){
//r4=num1/num2;
//document.write("<br>"+r4);       
//  }


// CHAPTER :12-13

// Task 1:
// var a = prompt("Enter Letter or Alphabet");
// var b = sd.charCodeAt()
//    alert(b)
// if ( b<=90){
//     alert("Uppercase Letter ")
// }
// else {
//     alert("Lowercase Letter")
// } 

// Task 2:
// var int1 = +prompt("Enter 1st Int");
// var int2 = +prompt("Enter 2nd Int");

// if (int1 > int2 ){
// alert("Integer 1 is greater");
// }
// else if(int1<int2){
//     alert("Integer 2 is greater");

// }
// else {
//     alert("Both are equal");
// }

// Task 3:
// var int = +prompt("Enter number");

// if (int>0 ){
//     alert("POSITIVE")
// }
// else if (int<0){
//     alert("NEGATIVE")
// }
// else if (int ==='0'){
//     alert("ZERO")
// }

// Task 4:
// var char = prompt("Enter Alphabet");

// if (char === "A" || char === "E" ||char === "I"|| char ==="O" || char ==="U" || char ==="a" ||char === "e" || char ==="i" ||char === "o" || char ==="u" ){
//     alert(" It's a Vowel")

// }
// else{
//     alert("It's a Consonent")
// }

// Task 5:
// var my_pass = 'bushra123';
// var pass = prompt("Enter your Passward");
// var c_pass = prompt("Enter your Confirm Passward");
//  if (pass===my_pass && pass === c_pass){
//     alert("Correct password!");
// }
// else if (pass!==my_pass && pass !== c_pass){
//     alert("Incorrect password");
// }
// else{
//     alert("Please Enter passward first");
// }

// Task 6:
// var greeting;
// var hour = 13;
// if (hour < 18) {
// greeting = "Good day";
// alert(greeting);
// }
// else{
// greeting = "Good evening";
// alert(greeting);
// }

// Task 7:
// var time = +prompt("Please enter current time");
// if ( time>=0000 && time<1200){
//     alert("Good Morning!")
// }
// else if(time>=1200 && time<1700){
//     alert("Good Afternoon!")
// }
// else if (time>=1700 && time<2100){
//     alert("Good Evening!")
// }
// else if(time>=2100  && time<=2359){

//     alert("Good Night!")
// }
// else{
//     alert("Enter correct time again");
// }

// CHAPTER :14-16

//Task 1:
//  var array=[];

//Task 2:
// var array = new Array();
// array =["Bushra","Hazqa"];
// console.log(array);

//Task 3:
// var array = ["Bushra","Maria","Maryam"];

//Task 4:
// var num = [1,2,3,4];

//Task 5:
// var booleanarray = [true,false];

//Task 6:
// var mixarray = [1,"Ali",78,"Ahmed",true,123];

//Task 7:
//  var edu = ["SSC","HSC","BCS","BS","BCOM","MS","M. Phil.","PhD"];
//  document.write("<h1>Qualifications :</h1>" +"<br>");
//  var num=1;
//  for(var i=0; i<edu.length; i++)
//  {  
//     document.write(num +") ");
//     document.write(edu[i]+"<br>");
//     ++num;
//  }


//Task 8:
// var stu = ["Maria","Neha","Ushna"];
// var score = [320,230,480];
// var total =500;
// for(var i=0; i<stu.length; i++)
//  {  
//     document.write("Score of " +stu[i]+ " is "+score[i]+". Percentage: "+score[i]/total*100 +" %"+"<br>"); 
//  }

//Task 9:
// var color =["Red","Yellow","Pink"];  
// document.write("Color names: "+color+"<br>");
// var color1 = prompt("Enter your color");
// color.unshift(color1);
// document.write("Add color in beginging through user input: "+color +"<br>");
// var color2 = prompt("Enter your color");
// color.push(color2);
// document.write("Add color in end through user input: "+color+"<br>");
// color.unshift("Blue","Black");
// document.write("Add two colors: " +color +"<br>");
// color.shift();
// document.write("Delete first color: " +color+"<br>");
// color.pop();
// document.write("Delete last color: "+color+"<br>");


//Task 10:
// var score =[320,230,480,120];
// document.write("Score of Students :" + score +"<br>");
// score.sort();
// document.write("Ordered Scores of Students :" +score);

//Task 11:
// var cities = ["Karachi","Lahore","Islamabad","Quetta","Peshawar"];
// document.write("Cities list: " +"<br>"+cities+"<br>");
// var select_cities = cities.slice(2,5);
// document.write("Selected cities list :"+"<br>"+select_cities);

//Task 12:
// var arr = [" This ", "is ", "my ", "cat "] ;
// document.write("Arrays :"+"<br>"+arr+"<br>");
// var arr1 = arr.join('');
// document.write("String :"+"<br>"+arr1);

//Task 13:
// var device = ["keyboard","mouse","printer","monitor"];
// document.write("Devices :"+"<br>"+device+"<br>");
// device.shift();
// for(var i=0; i<device.length;i++)
// {
//     document.write("Out :"+"<br>"+device[i]+"<br>");
// }

//Task 14:
// var device = ["keyboard","mouse","printer","monitor"];
// document.write("Devices :"+"<br>"+device+"<br>");
// var device1=device.pop();
// for(var i=0; i<device.length; i--)
// {
//     document.write("Out: "+"<br>"+device1[i]);
// }




// CHAPTER :17-20

//Task 1:
// var arr =[[,],[,]];




       
//Task 3:
//  var a;
//  for (a=1; a<=10; a++)
//  {
//      document.write(a + "<br>");
//  }

//Task 4:
// var mul_table =+prompt("Enter a number to show its multiplication table");
// document.write("Multiplication table of "+mul_table+"<br>");
// var mul_length = +prompt("Enter length multiplication table");
// document.write("Length "+mul_length+"<br>");
// for(var i=1; i<=mul_length; i++)
// {
//     document.write(mul_table + "x" + i + "=" + mul_table*i + "<br>");
// }




//Task 6:
// document.write("<h1>Counting :</h1>"+"<br>");
// var a;
//  for (a=1; a<=15; a++)
//  {
//      document.write(a+",");
//  }

//  document.write("<h1>Reverse Counting :</h1>"+"<br>");
// var b;
// for (b=10; b>=1; b--)
// {
//     document.write(b+",");
// }
// document.write("<h1>Even :</h1>"+"<br>");
// var c;
// for (c=0; c<=20; c++)
// if(c %2 ==0)
//  {
//      document.write(c+",");
//  }
//  document.write("<h1>Odd :</h1>"+"<br>");
// var d;
// for (d=0; d<=20; d++)
// if(d %2 )
//  {
//      document.write(d+",");
//  }
//  document.write("<h1>Series :</h1>"+"<br>");
// var e;
// for (e=1; e<=20; e++)
// if(e %2==0 )
//  {
//      document.write(e+"k,");
//  }




//Task 8:
// var arr = [24,53,78,91,12];
// document.write("Array items: "+arr+"<br>");
// var largest =arr[0];
// for (var i = 0; i < arr.length; i++)
// {
//     if(largest < arr[i] ){
//         largest = arr[i];
//     }
// }
// document.write("The largest number is "+ largest);


//Task 9:
// var arr1 = [24,53,78,91,12];
// document.write("Array items: "+arr1+"<br>");
// var smallest =arr1[0];
// for (var i = 0; i < arr1.length; i++)
// {
//     if(smallest > arr1[i] ){
//         smallest = arr1[i];
//     }
// }
// document.write("The smallest number is "+ smallest);

//Task 10:
// var mul;
// for (mul=1; mul<=100; mul++)
// if(mul %5==0)
//  {
//      document.write(mul+",");
//  }

