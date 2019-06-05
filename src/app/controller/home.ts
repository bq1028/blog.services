import { controller, get, provide } from './node_modules/midway';

@provide()
@controller('/')
export class HomeController {

  @get('/')
  async index(ctx) {
    ctx.body = `Welcome to midwayjs!`;
  }
}
