/* Em uma entidade é aonde declaramos a criação de uma nova tabela, o typeORM vai identificar a class 'Sac' como uma tabela */
import {
  Entity,
  PrimaryGeneratedColumn,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  BaseEntity,
} from "typeorm";

@Entity()
export class Sac extends BaseEntity {
  /* Dentro da classe é aonde criamos cada coluna de nossa tabela */

  @PrimaryGeneratedColumn()
  id: number;

  @Column({ nullable: true })
  url: string;

  @Column()
  category: string;

  @Column("text")
  description: string;

  @CreateDateColumn()
  created_at: Date;

  @UpdateDateColumn()
  updated_at: Date;
}
