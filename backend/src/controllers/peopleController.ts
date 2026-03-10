import { Request, Response } from "express";
import { pool } from "../db/db";

export const getPeople = async (req: Request, res: Response) => {

 const role = req.query.role;
 const search = req.query.search;

 let query = `
 SELECT id,name,email,role
 FROM users
 WHERE 1=1
 `;

 if(role){
   query += ` AND role='${role}'`;
 }

 if(search){
   query += ` AND name ILIKE '%${search}%'`;
 }

 const result = await pool.query(query);

 res.json(result.rows);
};