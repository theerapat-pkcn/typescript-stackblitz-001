// Object type
export const oPerson = {
  first_name: undefined,
  last_name: undefined,
  get fullName() {
    return `${this.first_name} ${this.last_name}`;
  },
  set fullName(value) {
    const parts = value.split(" ");
    this.first_name = parts[0];
    this.last_name = parts[1];
  }
};

// Class type
export class Person {
  private first_name: string;
  private last_name: string;

  constructor(first_name: string, last_name: string) {
    this.first_name = first_name;
    this.last_name = last_name;
  }

  get fullName(): string {
    return `${this.first_name} ${this.last_name}`;
  }

  // Not recommend this for getter
  getFullName(): string {
    return `${this.first_name} ${this.last_name}`;
  }
}
