type UserType = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  address: {
    street: string;
    city: string;
    state: string;
    zipCode: string;
    geo: {
      latitude: string;
      longitude: string;
    };
  };
};

type Level = 'low' | 'medium' | 'high';

// Required -----------------------------------------------------------------------------------------------
interface Props {
  a?: number;
  b?: string;
}
const ob1: Props = { a: 5 };
const obj2: Required<Props> = { a: 0, b: 'b' }; // make all properties in object required
// Pick  -----------------------------------------------------------------------------------------------
interface TodoType {
  title: string;
  content: string;
  favorite: boolean;
  remindMe: string;
  dueDate: string;
  status: boolean;
}
type TodoPreview = Pick<TodoType, 'title' | 'status'>;

// ---------------------------------------------------------------------------------------------------
// Making all properties of UserType optional
type UserTypeWithOptionalProps = { [K in keyof UserType]?: UserType[K] };
type PersonI = {
  id: string;
  firstName: string;
  lastName: string;
  email: string;
};

const user_1: UserTypeWithOptionalProps = {
  id: '1', // id is required
  // Other properties are optional
};
// ---------------------------------------------------------------------------------------------------
// Changing the type of 'id' to string and keeping other properties unchanged
type PersonWithNumericId = {
  [K in keyof PersonI]: K extends 'id' ? number : PersonI[K];
};
const user_2: PersonWithNumericId = {
  id: 123, // id is inferred as number
  firstName: 'john',
  lastName: 'Doe',
  email: 'john@email.com',
};
// ---------------------------------------------------------------------------------------------------
// Adding a new 'isActive' property of type boolean to UserType
type PersonWithIsActiveStatus = PersonI & { isActive: boolean };
type PersonWithStatus = { [K in keyof PersonI]: PersonI[K] } & {
  isActive: boolean;
};
const john_doe_1: PersonWithStatus = {
  id: '1',
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
  isActive: true, // New 'isActive' property is added
};
// ---------------------------------------------------------------------------------------------------
type PersonWithoutId = Omit<PersonI, 'id'>;

// Test with example data
const person: PersonWithoutId = {
  firstName: 'John',
  lastName: 'Doe',
  email: 'john@example.com',
};
// ---------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------
type UserTypeWithStringId_2 = UserType extends { id: infer T }
  ? Omit<UserType, 'id'> & { id: string }
  : UserType;
// ValueOf ------------------------------------------------------------------------------------------
type ValueOf<T> = T[keyof T];
type ExampleType = {
  a: string;
  b: number;
  c: boolean;
};
type ValuesType = ValueOf<ExampleType>; // Result will be: string | number | boolean
const valuesTypeTest = 123;
// KeyOf ------------------------------------------------------------------------------------------
type Kone = { [K in keyof UserType]: K };

type KeyOf<T> = keyof T;
const email: KeyOf<UserType> = 'email';

type NestedKeyOf<T> = T extends object
  ? { [K in keyof T]: K | KeyOf<T[K]> }[keyof T]
  : never;
const geo: NestedKeyOf<UserType> = 'geo';
// ---------------------------------------------------------------------------------------------------
export type WithRequired<T, K extends keyof T> = T & Required<Pick<T, K>>;
// Original type
interface Person {
  name: string;
  age?: number;
  email?: string;
}

// Using WithRequired utility type to make the 'name' property required
type PersonWithRequiredName = WithRequired<Person, 'name'>;

// Resulting type:
// interface PersonWithRequiredName {`
//   name: string;
//   age?: number;
//   email?: string;
// }
let john: PersonWithRequiredName = { name: 'john' };
// ---------------------------------------------------------------------------------------------------

// ---------------------------------------------------------------------------------------------------
