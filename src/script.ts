export let planet = "Earth";

export interface BootcampStudent {
  firstName: string;
  lastName: string;
  program: string;
  age: number;
}

export function birthday(BootcampStudent: BootcampStudent): void {
  BootcampStudent.age++;
}
