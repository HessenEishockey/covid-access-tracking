const express = require('express');
const auth = require('../../middlewares/auth');
const validate = require('../../middlewares/validate');
const checkinValidation = require('../../validations/checkin.validation');
const checkinController = require('../../controllers/checkin.controller');

const router = express.Router();

router.route('/').post(auth('createCheckin'), validate(checkinValidation.createCheckin), checkinController.createCheckin);

module.exports = router;

/**
 * @swagger
 * tags:
 *   name: Checkins
 *   description: Checkin management
 */

/**
 * @swagger
 * path:
 *  /checkin:
 *    post:
 *      summary: Create a checkin
 *      description: Only admins and scanners can create checkins.
 *      tags: [Checkins]
 *      security:
 *        - bearerAuth: []
 *      requestBody:
 *        required: true
 *        content:
 *          application/json:
 *            schema:
 *              type: object
 *              required:
 *                - name
 *                - email
 *                - password
 *                - role
 *              properties:
 *                name:
 *                  type: string
 *                email:
 *                  type: string
 *                  format: email
 *                  description: must be unique
 *                password:
 *                  type: string
 *                  format: password
 *                  minLength: 8
 *                  description: At least one number and one letter
 *                role:
 *                   type: string
 *                   enum: [user, admin]
 *              example:
 *                name: fake name
 *                email: fake@example.com
 *                password: password1
 *                role: user
 *      responses:
 *        "201":
 *          description: Created
 *          content:
 *            application/json:
 *              schema:
 *                 $ref: '#/components/schemas/User'
 *        "400":
 *          $ref: '#/components/responses/DuplicateEmail'
 *        "401":
 *          $ref: '#/components/responses/Unauthorized'
 *        "403":
 *          $ref: '#/components/responses/Forbidden'
 */
