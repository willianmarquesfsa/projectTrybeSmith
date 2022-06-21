import { Pool } from 'mysql2/promise';
import Orders from '../interfaces/orders_interface';

export default class OrdersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async getAll(): Promise<Orders[]> {
    const result = await this.connection
      .execute('SELECT * FROM Trybesmith.Orders');
    const [rows] = result;
    return rows as Orders[];
  }

  /*
      public async getById(id: number): Promise<pessoas> {
        const result = await this.connection
          .execute('SELECT * FROM Users WHERE id=?', [id]);
        const [rows] = result;
        const [book] = rows as pessoas[];
        return book;
      }
    
      public async update(id: number, pessoas: pessoas) {
        const { name, email, password } = pessoas;
        await this.connection.execute(
          'UPDATE Users SET name=?, email=?, password=? WHERE id=?',
          [name, email, password, id]
        );
      }
    
      public async remove(id: number) {
        await this.connection.execute(
          'DELETE FROM Users WHERE id=?',
          [id],
        );
      }
      */
}