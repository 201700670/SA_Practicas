import { Request, Response } from "express";
import { setResponse } from "./set-response";
import fetch from 'node-fetch';


export const orderStatus = async (req: Request, res: Response) => {
    const { status } = req.query;

      return setResponse(res, {
        statuscode: 200,
        ok: true,
        message: "Estado actual de la orden",
        data: { status },
      });
};

export const sendData = async (req: Request, res: Response) => {
    const url = 'http://localhost:8083/deliveryman/order?'
    const params = new URLSearchParams({ status: 'pending' })

    fetch(url + params, {method: 'POST'})
        .then(data => data.text())
        .then((text) => {
            console.log('request succeeded with JSON response', text);
        }).catch(function (error) {
        console.log('request failed', error)
    });

};