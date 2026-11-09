# Type vs Interface in TypeScript

Type and Interface is used to give type safety on our data. An Interface is mostly used when we are dealing with objects. It gives a blueprint of an object.

Type is mainly used for union, i.e. when we might have to use multiple type of data in one variable, that's when it comes in handy.

```ts
type ID = string | number;
```

Interface can extend one another similar to what we see in OOP.

```ts
interface Employee {
  role: string;
}

interface Developer extends Employee {
  workHour: string;
}
```

For type we just use the "&" to extend.

```ts
type Employee = {
  role: string;
};
type Developer = Employee & {
  workHour: string;
};
```

Also, interface has a feature where if we write the name of one interface twice, it just gets mereged.

```ts
interface Employee {
  role: string;
}
interface Employee {
  workHour: string;
}
```

Type on the other hand, will throw an error if we try to use duplicate type names.

We use an interface when we are working with objects as a blueprint. For anything else, we may use type, especially when we are dealing with one variable having multiple types for type safety.
