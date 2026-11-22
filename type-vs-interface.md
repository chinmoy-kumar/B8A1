# Type VS Interface
<b>Introduction:</b><br>
Type and interface both are used to create different types of structure of data. But they have some core differences based on which we should use them.

## Differences between Type and Interface:
1. Type is more useful to use with complex and advance structures and logics. Such as Union, tuples, intersection, primitive types. This is more flexible than interface which makek it more suitable to use for complex structures.
For example:
```
type status = "success" | "loading" | "error";

```
This can not be implemented using interface because interface always have to use with object structures.
For example: 
```
interface IUser{
    id: number;
    name: string;
}
```

2. If we declare Type using same name it will show error. But in case of interface those two same named interfaces will merge automatically by typescript.
For example: 
```
type User = {
    name: string;
}

type User = {  // Error
    name: string;
    id: number;
}
```
This type of declaration will throw error because of same name.

```
interface IUser{
    name: string;
}

interface IUser{
    name: string;
    id: number;
}
```
This will run without any error because the typescript will merge them automatically.


## When to use which one: 
Type is more preferable when it comes to complex and advance structures. In those case using type is more suitable.
On the other hand, Interface is more suitable for using with class and object type structures. Interface is also useful for merge same named declaration.

## Conclusion:
Although type and interface are more likly similar but they have some core differences as we have already discussed here. If we use them based on those differences then we will get the maximum benifit of using them.