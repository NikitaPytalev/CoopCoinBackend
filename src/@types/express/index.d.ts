import User from '../../data/Entities/User';

declare global {
  namespace Express {
    interface Request {
      currentUser: User;
    }
  }
}
