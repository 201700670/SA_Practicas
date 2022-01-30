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

const notifyRestaurant = async (req: Request, res: Response, data = {}) => {
    const url = 'http://localhost:8082/restaurant/delivered'

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

const notifyClient = async (req: Request, res: Response, data = {}) => {
    const url = 'http://localhost:8081/client/delivered'

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
    const { no, menu } = req.body.data.order;
    order = { no: no, menu: menu, status: Status.inprogress };

    let response = {
        statuscode: 200,
        ok: true,
        message: `Orden número: ${ no } recibida con éxito.`,
        data: {
            'order' : order,
            'previous-status': Status.completed,
            'current-status': Status.inprogress,
        },
    };

    console.log("***************************Start Order Delivery********************************");
    console.log(response);
    return setResponse(res, response);
};

export const orderStatus = async (req: Request, res: Response) => {
    const url = 'http://localhost:8081/client/order'
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

export const delivered = async (req: Request, res: Response) => {
    console.log("***************************Order Delivered********************************");
    order = { no: order.no, menu: order.menu, status: Status.delivered };

    let data = {
        statuscode: 200,
        ok: true,
        message: `La órden ha sido entregada con éxito`,
        data: {
            'order': order,
        },
    };

    notifyRestaurant(req, res, data);
    notifyClient(req, res, data);
};