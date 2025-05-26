const express = require('express');
const mysql = require('mysql2');
const cors = require('cors');
const bodyParser = require('body-parser');

const app = express();
app.use(cors());
app.use(bodyParser.json());

// MySQL Connection Setup
const db = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'daksh',
  database: 'smartmovers'
});

db.connect((err) => {
  if (err) throw err;
  console.log('Connected to MySQL');
});

// 🧾 Bookings API with Transaction and Logging
app.post('/api/bookings', (req, res) => {
  const { name, email, phone, pickup, dropoff, service, details } = req.body;

  db.beginTransaction(err => {
    if (err) return res.status(500).send('Transaction Error');

    const insertBooking = `
      INSERT INTO bookings (name, email, phone, pickup, dropoff, service, details)
      VALUES (?, ?, ?, ?, ?, ?, ?)
    `;

    db.query(insertBooking, [name, email, phone, pickup, dropoff, service, details], (err, result) => {
      if (err) {
        return db.rollback(() => {
          console.error('Booking insert failed:', err);
          res.status(500).send('Booking Failed');
        });
      }

      const logSql = `
        INSERT INTO booking_logs (booking_id, log_message)
        VALUES (?, ?)
      `;
      const logMessage = `New booking by ${name}`;

      db.query(logSql, [result.insertId, logMessage], (err, logResult) => {
        if (err) {
          return db.rollback(() => {
            console.error('Log insert failed:', err);
            res.status(500).send('Log Failed');
          });
        }

        db.commit(err => {
          if (err) {
            return db.rollback(() => {
              console.error('Commit failed:', err);
              res.status(500).send('Transaction Commit Failed');
            });
          }

          res.status(200).json({ message: 'Booking and log saved successfully' });
        });
      });
    });
  });
});

// 📩 Contact Form Submission
app.post('/contact', (req, res) => {
  const { name, email, message } = req.body;

  const sql = 'INSERT INTO contacts (name, email, message) VALUES (?, ?, ?)';
  db.query(sql, [name, email, message], (err, result) => {
    if (err) {
      console.error('Error saving contact message:', err);
      res.status(500).send('Something went wrong');
    } else {
      res.send('Message received. Thank you for contacting us!');
    }
  });
});

// 📧 Get All Bookings By Email (Stored Procedure)
app.get('/api/bookings/:email', (req, res) => {
  const email = req.params.email;

  db.query('CALL GetBookingsByEmail(?)', [email], (err, results) => {
    if (err) {
      console.error('Procedure error:', err);
      return res.status(500).send('Could not fetch bookings');
    }
    res.status(200).json(results[0]);
  });
});
app.post('/api/signup', (req, res) => {
  const { name, email, password } = req.body;

  const query = 'INSERT INTO users (name, email, password) VALUES (?, ?, ?)';
  db.query(query, [name, email, password], (err, result) => {
    if (err) {
      if (err.code === 'ER_DUP_ENTRY') {
        return res.status(400).send('User already exists');
      }
      console.error('Signup error:', err);
      return res.status(500).send('Signup failed');
    }
    res.send('Signup successful');
  });
});
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  const query = 'SELECT * FROM users WHERE email = ? AND password = ?';
  db.query(query, [email, password], (err, results) => {
    if (err) {
      console.error('Login error:', err);
      return res.status(500).send('Login failed');
    }

    if (results.length > 0) {
      res.json({ message: 'Login successful', user: results[0] });
    } else {
      res.status(401).send('Invalid credentials');
    }
  });
});


// Start Server
app.listen(3000, () => {
  console.log('Server running at http://localhost:3000');
});
