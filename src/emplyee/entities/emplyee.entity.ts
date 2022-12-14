import { Entity, PrimaryGeneratedColumn, Column } from 'typeorm';

@Entity()
export class Emplyee {
  @PrimaryGeneratedColumn()
  public id: number;

  @Column()
  public name: string;

  @Column()
  public salaryDollars: number;
}
