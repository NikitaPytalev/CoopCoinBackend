import { Request, Response } from 'express';
import * as authService from '../services/authService';

export const signup_post = async (req: Request, res: Response) => {
  const user = req.body;

  const isSignedUp = await authService.signUp(user);

  if (!isSignedUp) res.status(409).send('User already exists');

  res.sendStatus(201);
};

export const login_post = async (req: Request, res: Response) => {
  const credentials = req.body;

  const accessToken = await authService.login(credentials);

  if (accessToken == '') {
    res.sendStatus(401);
  } else {
    res
      .json({
        accessToken
      })
      .status(200);
  }
};