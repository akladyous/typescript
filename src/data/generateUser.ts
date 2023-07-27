import faker from 'faker';

interface UserData {
  id: number;
  name: string;
  username: string;
  email: string;
  address: {
    street: string;
    suite: string;
    city: string;
    zipcode: string;
    geo: {
      lat: string;
      lng: string;
    };
  };
  phone: string;
  website: string;
  company: {
    name: string;
    catchPhrase: string;
    bs: string;
  };
}

function generateFakeUserData(): UserData {
  return {
    id: faker.datatype.number(),
    name: faker.name.findName(),
    username: faker.internet.userName(),
    email: faker.internet.email(),
    address: {
      street: faker.address.streetName(),
      suite: faker.address.secondaryAddress(),
      city: faker.address.city(),
      zipcode: faker.address.zipCode(),
      geo: {
        lat: faker.address.latitude(),
        lng: faker.address.longitude(),
      },
    },
    phone: faker.phone.phoneNumber(),
    website: faker.internet.url(),
    company: {
      name: faker.company.companyName(),
      catchPhrase: faker.company.catchPhrase(),
      bs: faker.company.bs(),
    },
  };
}

// Generate fake user data
const fakeUserData: UserData = generateFakeUserData();
console.log(fakeUserData);
