import { Request, Response } from "express";
import { setResponse } from "./set-response";
import fetch from 'node-fetch';

enum Status {
    pending = "Orden recibida en el restaurante",
    preparing = "Preparando la orden en el restaurante",
    completed = "Orden entregada al repartidor",
    inprogress = "La orden va en camino a su domicilio",
    delivered = "La orden fue entregada",
}

interface Order {
    no: number;
    menu: [];
    status: Status;
}

var order : Order = {no: 0 , menu: [], status: Status.pending };


const sendData = async (res: Response, url: string, data: Object) => {
    fetch(url, {
        method: 'POST',
        body: JSON.stringify(data),
        headers:{
            'Content-Type': 'application/json'
        }
    }).then(res => res.json())
        .catch(error => { console.log(error); res.json(error); })
        .then(response => { console.log(response); res.json(response); });
};

export const receiveOrder = async (req: Request, res: Response) => {
    const { no, menu } = req.body.data.pedido;
    order = { no: no, menu: menu, status: Status.preparing };

    let response = {
        statuscode: 200,
        ok: true,
        message: `Orden número: ${ no } recibida con éxito.`,
        data: {
            'order' : order,
            'previous-status': Status.pending,
            'current-status': Status.preparing,
        },
    };

    console.log("***************************Receive Order********************************");
    console.log(response);
    return setResponse(res, response);
};

export const orderStatus = async (req: Request, res: Response) => {
    const url = 'http://localhost:8081/client/vieworder'
    order = { no: order.no, menu: order.menu, status: order.status };

    let data = {
        statuscode: 200,
        ok: true,
        message: `Se le notifica sobre estado de su pedido`,
        data: {
            'order': order,
        },
    };

    console.log("***************************Notify Order Status Client********************************");
    sendData(res, url, data);
};

export const notifyDeliveryman = async (req: Request, res: Response) => {
    const url = 'http://localhost:8083/deliveryman/receive-order'
    order = { no: order.no, menu: order.menu, status: Status.completed };

    let data = {
        statuscode: 200,
        ok: true,
        message: `La orden ya fue preparada. Puede recogerla.`,
        data: {
            'order': order,
            'previous-status': Status.preparing,
            'current-status': Status.completed,
        },
    };

    console.log("***************************Notify Deliveryman********************************");
    sendData(res, url, data);
};

export const delivered = async (req: Request, res: Response) => {
    const { data } = req.body;
    order = { no: data.order.no, menu: data.order.menu, status: data.order.status };

    let response = {
        statuscode: 200,
        ok: true,
        message: `Orden número: ${ data.order.no } entregada con éxito.`,
        data: {
            'order' : order
        },
    };

    console.log("***************************Delivered********************************");
    console.log(response);
    return setResponse(res, response);
};

export const sendOrderStatus = async (req: Request, res: Response) => {
    console.log("***************************Order Status********************************");

    let data = {
        statuscode: 200,
        ok: true,
        message: `Estado de la órden`,
        data: {
            'order': order,
            'current-status': order.status
        },
    };

    console.log(data);
    return setResponse(res, data);
};
