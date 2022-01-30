import { Request, Response } from "express";
import { setResponse } from "./set-response";

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