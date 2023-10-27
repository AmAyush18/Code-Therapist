import NotificationModel from "../models/notificationModel";
import { NextFunction, Request, Response } from "express";
import { CatchAsyncError } from "../middleware/catchAsyncError";
import ErrorHandler from "../utils/ErrorHandler";

// get all notifications -- only for admin
export const getNotifications = CatchAsyncError(async(req:Request, res: Response, next: NextFunction) => {
    try{
        const notifications = await NotificationModel.find().sort({createdAt: -1});

        res.status(201).json({
            success: true,
            notifications
        });

    } catch(error: any){
        return next(new ErrorHandler(error.message, 500));
    }
});