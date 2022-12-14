import express from 'express';
import * as userController from '../controllers/userController';
import { auth, isAdmin } from '../middlewares/auth';

const router = express.Router();

/**
 * @openapi
 * /users:
 *   get:
 *     tags:
 *       - users
 *     summary: Get all users
 *     description: Returns all users
 *     security:
 *       - bearerAuth: []
 *     produces:
 *       - application/json
 *     responses:
 *       200:
 *         description: Successful operation
 *       401:
 *         $ref: '#/components/responses/authenticationError'
 *       403:
 *         $ref: '#/components/responses/authorizationError'
 */
router.get('/users', [auth], userController.index);

/**
 * @openapi
 * /users/{id}:
 *   get:
 *     tags:
 *       - users
 *     summary: Find user by ID
 *     description: Returns a single user
 *     security:
 *       - bearerAuth: []
 *     produces:
 *       - application/json
 *     parameters:
 *     - name: id
 *       in: path
 *       description: ID of user to return
 *       required: true
 *     responses:
 *       200:
 *         description: Successful operation
 *       401:
 *         $ref: '#/components/responses/authenticationError'
 *       403:
 *         $ref: '#/components/responses/authorizationError'
 *       404:
 *         $ref: '#/components/responses/entityNotFoundError'
 */
router.get('/users/:id', [auth], userController.user_get);

/**
 * @openapi
 * /users/{id}/balance/{amount}:
 *  patch:
 *    tags:
 *      - users
 *    summary: Update user balance (Admins only)
 *    description: Updates system balance of a user
 *    security:
 *      - bearerAuth: [admin]
 *    parameters:
 *    - name: id
 *      in: path
 *      description: User id to get balance updated
 *      required: true
 *    - name: amount
 *      in: path
 *      description: Amount to add to the user's balance
 *      required: true
 *    responses:
 *      204:
 *        description: Successful operation
 *      401:
 *         $ref: '#/components/responses/authenticationError'
 *      403:
 *         $ref: '#/components/responses/authorizationError'
 *      404:
 *         $ref: '#/components/responses/entityNotFoundError'
 */
router.patch('/users/:id/balance/:amount', [auth, isAdmin], userController.user_balance_patch);

/**
 * @openapi
 * /users/{id}/balance:
 *   get:
 *     tags:
 *       - users
 *     summary: Retrieve user balances by user ID
 *     description: Returns a user balances
 *     security:
 *       - bearerAuth: []
 *     produces:
 *       - application/json
 *     parameters:
 *     - name: id
 *       in: path
 *       description: ID of user to return
 *       required: true
 *     responses:
 *       200:
 *         description: Successful operation
 *       401:
 *         $ref: '#/components/responses/authenticationError'
 *       403:
 *         $ref: '#/components/responses/authorizationError'
 *       404:
 *         $ref: '#/components/responses/entityNotFoundError'
 */
router.get('/users/:id/balance', [auth], userController.user_balance_get);

/**
 * @openapi
 * /users/{id}/transactions:
 *   get:
 *     tags:
 *       - users
 *     summary: Retrieve user transactions list by user ID
 *     description: Returns user transactions
 *     security:
 *       - bearerAuth: []
 *     produces:
 *       - application/json
 *     parameters:
 *     - name: id
 *       in: path
 *       description: ID of user to return
 *       required: true
 *     responses:
 *       200:
 *         description: Successful operation
 *       401:
 *         $ref: '#/components/responses/authenticationError'
 *       403:
 *         $ref: '#/components/responses/authorizationError'
 *       404:
 *         $ref: '#/components/responses/entityNotFoundError'
 */
router.get('/users/:id/transactions', [auth], userController.user_transactions_get);

export default router;
