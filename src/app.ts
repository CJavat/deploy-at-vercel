import expres, { Request, Response } from "express";

( () => {
  main();
})();

function main() {
  const app = expres();
  

  app.get('/', ( req: Request, res: Response ) => {
    res.status(200).json({
      success: 'ok',
      msg: 'Todo correcto'
    })
  });


  app.listen( 3000, () => {
    console.log('listening on port 3000');
  });
}