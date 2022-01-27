import { Request, Response } from "express";
import { setResponse } from "./set-response";

export const orderStatus = async (req: Request, res: Response) => {
    const { status } = req.query;
    console.log(status);
      return setResponse(res, {
        statuscode: 200,
        ok: true,
        message: "Estado actual de la orden",
        data: { status },
      });
};