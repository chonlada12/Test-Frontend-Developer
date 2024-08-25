export interface PersonalData {
  id: number;
  name: string;
  title: string;
  firstName: string;
  lastName: string;
  dateOfBirth: string;
  nationality: string;
  idCardNumber?: string;
  gender: string;
  phoneNumber: string;
  passport?: string;
  expectedSalary: string;
}

export interface PhoneNumber {
  area: string;
  number: string;
}
