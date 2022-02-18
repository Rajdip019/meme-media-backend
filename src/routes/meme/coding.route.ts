import express from 'express'
import codingMeme from '../../controller/coding-meme.controller'

const app= express()

export const codingMeme = () =>{
  app.get("/coding-meme", codingMeme);
}