import express from 'express'
import { Router } from 'express'
import codingMeme from '../controller/meme/coding-meme.controller'

const router = Router()

router.get("/meme/coding", codingMeme)

module.exports = router;