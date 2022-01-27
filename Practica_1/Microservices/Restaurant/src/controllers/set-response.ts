import { Request, Response } from "express";

interface APIResponse {
  statuscode: number;
  ok: boolean;
  message: string;
  data: object;
}

export const errorResponse = (res: Response, error: Error) => {
  setResponse(res, {
    statuscode: 501,
    ok: false,
    message: "Ha ocurrido un error inesperado",
    data: {
      error,
    },
  });
};

export function setResponse(res: Response, response: APIResponse) {
  res.statusCode = response.statuscode;
  res.json({ ...response });
}