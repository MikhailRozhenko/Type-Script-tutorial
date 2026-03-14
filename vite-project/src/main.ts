import './style.css';
import './training';

///generics

function myFunction<T>(value: T): T {
  return value;
}

myFunction<string>('Hello');

myFunction<number>(42);

function getFirstElement<T>(arr: T[]): T {
  return arr[0];
}

getFirstElement<number>([10, 20, 30]);

getFirstElement<number>(['Alice', 'Bob']);

// GENERICS в interface

interface List<T> {
  items: T[];
  getItem: (index: number) => T;
}

const numberList: List<number> = {
  items: [1, 2, 3],
  getItem(index) {
    return this.items[index];
  },
};

const stringList: List<string> = {
  items: ['Alice', 'Bob'],
  getItem(index) {
    return this.items[index];
  },
};

// List<T> – це узагальнений інтерфейс для будь-якого типу T.
// items: T[] – масив елементів типу T.
// getItem(index: number): T – метод, який повертає значення того ж типу T.

//////////////////////////////

// Generics у відповідях API

interface ApiResponse<T> {
  data: T;
  status: number;
}

const userResponse: ApiResponse<{ id: number; name: string }> = {
  data: {
    id: 1,
    name: 'Alice',
  },
  status: 200,
};

const invoiceResponce: ApiResponse<{ email: string; amount: number }> = {
  data: {
    email: 'alice@mail.com',
    amount: 150,
  },
  status: 201,
};

// Типизация промисов:

const getData = (): Promise<string> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve('Hello, TypeScript'), 1000);
  });
};

// getData().then((user) => console.log(user.name));

interface User {
  id: number;
  name: string;
}

const getUser = (): Promise<User> => {
  return new Promise((resolve) => {
    setTimeout(() => resolve({ id: 1, name: 'Alice' }), 1000);
  });
};

// getUser().then((user) => console.log(user.name)); // "Alice"

let status: 'pending' | 'disabled' | 'active' = 'active';

status = 'disabled';

// console.log(status.toUpperCase());
