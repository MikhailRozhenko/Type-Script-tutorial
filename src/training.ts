// // Как указывать типы для переменных:

// let user: string;

// // Типизация обьектов:

// const product1: {
//   title: string;
//   price: number;
//   isFavorite: boolean;
// } = {
//   title: 'lemon',
//   price: 50,
//   isFavorite: false,
// };

// const product2: {
//   title: string;
//   price: number;
//   isFavorite: boolean;
// } = {
//   title: 'apple',
//   price: 1000,
//   isFavorite: true,
// };

// // Интерфейсы:

// interface Student {
//   name: string;
//   age: number;
//   course: string;
// }

// const student10: Student = {
//   name: 'Dave',
//   age: 20,
//   course: 'React',
// };

// const student1: Student = {
//   name: 'Misha',
//   age: 27,
//   course: 'Java Script',
// };

// // readonly

// // readonly - означає, що значення цього ключа змінювати не можна

// interface User {
//   readonly name: string;
//   age: number;
//   course: string;
// }

// const user1: User = {
//   name: 'Sasha',
//   age: 27,
//   course: 'Java Script',
// };

// // Опційні поля - це поле може бути в обьекті, або ні. Записується як (name?:)

// interface Cat {
//   readonly name: string;
//   age: number;
//   course: string;
//   cat?: string;
// }

// // Типизация массивов:

// const productsList: string[] = ['apple', 'banana', 'slivas'];

// // при типизации массивов доступные соответствующие методы массивов

// productsList.push('lemon');

// // Второй способ типизации:

// const arr: Array<string> = ['res1', 'res2'];

// interface Product {
//   name: string;
//   age: number;
//   course: string;
// }

// const products: Product[] = [
//   {
//     name: 'Misha',
//     age: 27,
//     course: 'Java Script',
//   },
//   {
//     name: 'Daniil',
//     age: 28,
//     course: 'TypeScript',
//   },
// ];

// const prices: number[] = productsList.map((product) => product.age);

// //

// // Свои типы

// // | - union type

// let variable: string | number = 'hello';

// variable = 123;

// // union type для массивов

// let array1: string | number | boolean[] = [1, 2, 3, 'Hello', false];

// array1.push(null); //error

// // литерал:

// type Status = 'pending' | 'disabled' | 'active';

// let status: 'pending' | 'disabled' | 'active' = 'active';

// status = 'pending';

// // console.log(status.toUpperCase());

// let status2: Status = 'pending';

// status2 = 'disabled';

// // ТИПИЗАЦИЯ ФУНКЦИЙ:

// function sum(a: number, b: number): number {
//   return a + b;
// }

// const summer = (a: number, b: number): number => {
//   return a + b;
// };

// // опциональные параметры в функциях(можно указывать, можно нет):

// function greeteng(name?: string) {
//   return `Hello, ${name}`;
// }
// // при дефолтном значении (tax = 0,2), при вызове функции не обязательно указывать этот параметр
// function calculateTotalPrice(sum: number, tax: number = 0.2) {
//   return sum + sum * tax;
// }

// // функция, которая ничего не возвращает (нужно указывать void):

// function log(message: string): void {
//   //   console.log(message);
// }

// // GENERICS:

// function getfirstElement<T>(arr: T[]): T {
//   return arr[0];
// }

// // У цьому прикладі функція може працювати з масивами будь-яких типів і завжди повертає елемент того ж типу, що й елементи масиву. Тобто тип T буде замінений на number або string залежно від значень, що передаються.

// // generics в интерфейсах

// interface List<T> {
//   items: T[];
//   getitem: (index: number) => T;
// }

// const numberList: List<number> = {
//   items: [1, 2, 3],
//   getitem(index) {
//     return this.items[index];
//   },
// };

// const stringList: List<string> = {
//   items: ['Alice', 'Bob'],
//   getitem(index) {
//     return this.items[index];
//   },
// };

// console.log(numberList.getitem(1));

// console.log(stringList.getitem(2));

// // generics для типізації відповідей сервера

// interface ApiResponse<T> {
//   data: T;
//   status: number;
// }
