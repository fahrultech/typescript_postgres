import { Pool, PoolClient } from 'pg';
import pool from '../../database/dbConfig'


type Category = {
    name: String
}

export class CategoryRepository {
    public save = async (category: Category) => {
        const { name } = category
        const text = 'INSERT INTO category(name) VALUES($1) RETURNING *'
        const values = [name]

        const client = await pool.connect()
        const res = await client.query(text, values)
        return res.rows[0]

    }

    public findById = async (id: String) => {
        const text: string = 'SELECT * FROM category WHERE id = $1'
        const values: String[] = [id]
        const client: PoolClient = await pool.connect()
        const res = await client.query(text, values)
        return res.rows[0]
    }

    public find = async (limit: number, skip: number) => {
        const text = 'SELECT * FROM category ORDER BY id';
        const client = await pool.connect()
        const res = await client.query(text)
        return res.rows
    }

    public delete = async (id:String) => {
        const text = 'DELETE FROM category WHERE id = $1';
        const values = [id];
        const client = await pool.connect();
        const res = await client.query(text, values);
        return res.rows[0];
    }

    public update = async (id: String, category: Category) => {
        const { name } = category;
        const text = 'UPDATE category SET name = $2 WHERE id = $1 RETURNING *';
        const values = [id, name];
        const client = await pool.connect();
        const res = await client.query(text, values);
        return res.rows[0];
    }
}