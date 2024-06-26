            /* In this task, the goal is to define the type "Student" in TypeScript. Each student should have a first name, last name, age, and a property "grades" that contains a list of grades. In this first step, a grade should be an integer from 1 to 6. Choose suitable English names for the attributes. Then create a student and output it in the console.

                Please work together, one of you should create a Vite project with TypeScript.

                Step 1: Write a function that outputs a student with their grades, where a student should be output with first name, last name, age, and a list of grades.


            Highlight the output of the first and last names, age, and grades with a line of 30x "=".
            Example:

            Anton Meier (17)
            ==============================
            Grades: 1,4,3,1,3,2,1,2
            */
            type Grade = 1|2|3|4|5|6|'A'|'B'|'C'|'D'|'E'|'F'|undefined
            type  Student = {
                firstname:string, lastname:string,age:number,grade:Grade[]
            }
            const student01:Student = {firstname:"Max",lastname:"Müller",age:24,grade:[1,'B',3,'D',5,'F']

            }
            console.log(student01)
            function printStudent(student:Student){
                console.log(student.firstname + " " + student.lastname + " (" +
                    student.age + ")")
                console.log("=====================================")
                console.log("Grade: " + student.grade)
            }
        printStudent(student01)
            function printStudentUndefined(student:Student){
                console.log(student.firstname + " " + student.lastname + " (" +
                    student.age + ")")
                console.log("=====================================")
               const gradesWithoutUndefined = student.grade.map(grade =>{
                if(grade===undefined){
                    return '*'
                }else{
                    return  grade
                }
                })
                console.log("Grade: " + gradesWithoutUndefined)
            }
          const student02:Student = {firstname:"Max",lastname:"Müller",age:24,grade:[1,'B',3,'D',undefined,'F',undefined]}
          printStudentUndefined(student02)
            const student03:Student = {firstname:"Max",lastname:"Müller",age:24,grade:[1,'B',3,'D',undefined,'F',undefined]}
const students:Student[] = [student01, student02,student03]
      students.map(student => printStudentUndefined(student))

