import { Request, Response } from 'express';
import { pool } from '../db';
import { QueryResult } from 'pg';

\
export const getProducts = async (req: Request, res: Response) => {
    const { offset, limit } = req.body;
    const response = await pool.query('INSERT INTO users (name, email) VALUES ($1, $2)', [offset, limit]);
    res.json({
        message: 'User Added successfully',
        body: {
            products: { offset, limit }
        }
    })
};
