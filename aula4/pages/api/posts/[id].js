export default function handler(req, res) {
  const id = req.query.id;
  res.status(418).json({post: id});
}

//Tipagem:

// import type { NextApiHandler } from 'next';

// const handler: NextApiHandler = (req, res) => {
//   res.status(200).json({ curso: 'next.js', instrutor: 'Dev soutinho' });
// };

// export default handler;

//ou

// import type { NextApiRequest, NextApiResponse } from 'next';

// export default (req: NextApiRequest, res: NextApiResponse) => {
//   res.status(200).json({ curso: 'next.js', instrutor: 'Dev Soutinho' });
// };

// ou com generics:

// import type { NextApiHandler } from 'next';

// export type ResponseData = {
//   curso: string;
//   instrutor: string;
// };

// const handler: NextApiHandler<ResponseData> = (req, res) => {
//   // res.status(200).json({ nome: 'Mario Souto' });
//   res.status(200).json({ curso: 'next.js', instrutor: 'Mario Souto' });
// };

// export default handler;

// ou

// import type { NextApiRequest, NextApiResponse } from 'next';

// export type ResponseData = {
//   curso: string;
//   instrutor: string;
// };

// export default (req: NextApiRequest, res: NextApiResponse<ResponseData>) => {
//   // res.status(200).json({ nome: 'Mario Souto' });
//   res.status(200).json({ curso: 'next.js', instrutor: 'Mario Souto' });
// };