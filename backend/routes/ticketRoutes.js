const express = require('express');
const router = express.Router();
const { protect } = require('../middleware/authMiddleware');
const {
  getTickets,
  createTicket,
  getTicket,
  updateTicket,
  deleteTicket,
} = require('../controllers/ticketController');

router.get('/', protect, getTickets);
router.get('/:id', protect, getTicket);
router.put('/:id', protect, updateTicket);
router.delete('/:id', protect, deleteTicket);
router.post('/', protect, createTicket);

module.exports = router;
