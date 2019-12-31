import { MigrationInterface, QueryRunner } from 'typeorm';

export class Users1577810249073 implements MigrationInterface {
  name = 'Users1577810249073';

  public async up(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(
      `CREATE TABLE "user" ("id" uuid NOT NULL DEFAULT uuid_generate_v4(), 
      "first_name" character varying(50) NOT NULL, 
      "last_name" character varying(50) NOT NULL, 
      "email" character varying(60) NOT NULL, 
      "password" character varying(254) NOT NULL, 
      "created_at" TIMESTAMP NOT NULL DEFAULT now(), 
      "updated_at" TIMESTAMP NOT NULL DEFAULT now(), 
      CONSTRAINT "UQ_e12875dfb3b1d92d7d7c5377e22" UNIQUE ("email"), 
      CONSTRAINT "UQ_638bac731294171648258260ff2" UNIQUE ("password"), 
      CONSTRAINT "PK_cace4a159ff9f2512dd42373760" PRIMARY KEY ("id"))`,
      undefined,
    );
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.query(`DROP TABLE "user"`, undefined);
  }
}
