# How Generics Work in TypeScript

Sometimes we don't know what data one variable might store. It could be a number, a string, or a boolean.

We could use a union, but the problem is that a union forgets which type we passed. Even if we pass a string, we can't use toUpperCase because TypeScript thinks it might be a number.

```ts
const sameUnion = (value: string | number): string | number => value;

sameUnion("hi").toUpperCase();
```

We can avoid this by using a generic. A generic doesn't know or even assume what type the variable is going to be. Whenever the data comes, it sets itself as that type for that call, and only allows functions relevant to this data type.

```ts
const sameGeneric = <T>(value: T): T => value;

sameGeneric("hi").toUpperCase();
```

The T in Promise<T> is a type parameter. It tells TypeScript what type of data the Promise will give us once the async task is finished. A network request has no idea about the structure of our data at runtime. That’s when generics come in handy, because we can declare the structure of our data beforehand and the compiler will check our code against it. A generic wrapper like ApiResponse<T> is very useful because the outer structure of the response (like success) stays the same, while the inner data changes based on the type we pass in.

```ts
interface User {
  name: string;
}

interface ApiResponse<T> {
  data: T;
  success: boolean;
}

const fetchUser = async (): Promise<ApiResponse<User>> => {
  const response = await fetch("/api/user");
  return response.json();
};

const result = await fetchUser();
result.data.name;
```

In short, generics let us reuse the same structure for different types of data. We write the outer structure once and just pass in the type we need, while still keeping type safety.
