import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from 'typeorm';
import Item from './Item';
import User from './User';

@Entity()
class Purchase {
  @PrimaryGeneratedColumn('uuid')
  id: string;

  @Column()
  public itemId: string;

  @Column()
  public buyerId: string;

  @ManyToOne(() => Item, (item) => item)
  @JoinColumn({ name: 'itemId' })
  item: Item;

  @ManyToOne(() => User, (user) => user)
  @JoinColumn({ name: 'buyerId' })
  buyer: User;
}

export default Purchase;