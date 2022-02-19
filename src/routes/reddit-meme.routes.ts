import express from 'express'
import { Router } from 'express'
import codingMeme from '../controller/meme/coding-meme.controller'

const router = Router()

router.post("/meme/coding", codingMeme)

module.exports = router;