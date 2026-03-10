import { Request, Response } from "express";
import { pool } from "../db/db";
import { v4 as uuid } from "uuid";

export const getEprs = async (req: Request, res: Response) => {

 const personId = req.query.personId;

 const result = await pool.query(
  "SELECT * FROM epr_records WHERE person_id=$1 ORDER BY period_start DESC",
  [personId]
 );

 res.json(result.rows);
};

export const getEpr = async (req: Request, res: Response) => {

 const id = req.params.id;

 const result = await pool.query(
  "SELECT * FROM epr_records WHERE id=$1",
  [id]
 );

 res.json(result.rows[0]);
};

export const createEpr = async (req: Request, res: Response) => {

 const {
  personId,
  evaluatorId,
  roleType,
  periodStart,
  periodEnd,
  overallRating,
  technicalSkillsRating,
  nonTechnicalSkillsRating,
  remarks,
  status
 } = req.body;

 const id = uuid();

 await pool.query(
 `INSERT INTO epr_records
 VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10,$11)`,
 [
  id,
  personId,
  evaluatorId,
  roleType,
  periodStart,
  periodEnd,
  overallRating,
  technicalSkillsRating,
  nonTechnicalSkillsRating,
  remarks,
  status
 ]
 );

 res.json({message:"EPR created"});
};

export const getEprSummary = async (req:any,res:any)=>{

 const personId = req.params.personId

 const result = await pool.query(

 `SELECT 
  AVG(overall_rating) as avg_overall,
  AVG(technical_skills_rating) as avg_technical,
  AVG(non_technical_skills_rating) as avg_nontechnical,
  COUNT(*) as total_reviews
  FROM epr_records
  WHERE person_id = $1`

 ,[personId]
 )

 res.json(result.rows[0])

}

export const updateEprStatus = async (req:any,res:any)=>{

 const id = req.params.id
 const {status} = req.body

 await pool.query(
   "UPDATE epr_records SET status=$1 WHERE id=$2",
   [status,id]
 )

 res.json({message:"Status updated"})
}