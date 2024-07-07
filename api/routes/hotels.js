import express from "express";
import Hotel from "../models/Hotel.js";
import { createHotel,updateHotel,deleteHotel,getHotel,getHotels } from "../controllers/hotel.js";


const router = express.Router();
// CREATE
router.post('/', createHotel);
//UPDATE
router.put('/:id',updateHotel)
// DELETE

router.delete('/:id',deleteHotel)

// GET HOTEL
router.get('/:id',getHotel)

// GET ALL HOTELS

router.get('/',getHotels);

export default router