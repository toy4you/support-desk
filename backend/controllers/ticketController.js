const asyncHandler = require("express-async-handler");

const User = require("../models/userModel");
const Ticket = require("../models/ticketModel");

// @desc Get user tickets
// @route GET /api/tickets
// @access Private
const getTickets = asyncHander(async (req, res) => {
	res.status(200).json({ message: "getTickets" });
});

// @desc Create new tickets
// @route POST /api/tickets
// @access Private
const createTicket = asyncHander(async (req, res) => {
	res.status(200).json({ message: "createTicket" });
});

module.exports = {
	getTickets,
	createTicket,
};
