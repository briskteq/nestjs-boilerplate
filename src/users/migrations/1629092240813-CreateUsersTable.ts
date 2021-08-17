import { MigrationInterface, QueryRunner, Table } from 'typeorm';
import { TABLES } from '../utilities/constants';

export class CreateUsersTable1629092240813 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.createTable(
      new Table({
        columns: [
          {
            isNullable: false,
            isPrimary: true,
            name: 'id',
            type: 'uuid',
          },
          {
            isNullable: false,
            length: '255',
            name: 'email',
            type: 'varchar',
          },
          {
            isNullable: false,
            isUnique: true,
            length: '100',
            name: 'userName',
            type: 'varchar',
          },
          {
            isNullable: true,
            name: 'userData',
            type: 'json',
          },
          {
            isNullable: false,
            name: 'userStatus',
            type: 'int',
          },
          {
            default: 'now()',
            isNullable: false,
            name: 'createdAt',
            type: 'timestamp',
          },
          {
            default: 'now()',
            isNullable: false,
            name: 'updatedAt',
            type: 'timestamp',
          },
        ],
        name: TABLES.USERS_TABLE,
      }),
      false,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(TABLES.USERS_TABLE);
  }
}
