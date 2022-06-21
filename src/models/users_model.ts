import { Pool, ResultSetHeader } from 'mysql2/promise';
import Users from '../interfaces/users_interface';

export default class UsersModel {
  public connection: Pool;

  constructor(connection: Pool) {
    this.connection = connection;
  }

  public async create(users: Users): Promise<Users> {
    const { username, classe, level, password } = users;
    const result = await this.connection.execute<ResultSetHeader>(
      'INSERT INTO Trybesmith.Users ( username, classe, level, password) VALUES (?, ?, ?, ?)',
      [username, classe, level, password],
    );
    const [dataInserted] = result;
    const { insertId } = dataInserted;
    return { id: insertId, ...users };
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