/**
 * 用户控制器
 * @author Philip
 */
import { controller, get, inject, provide } from 'midway';
import { User } from '../../interface';

@provide()
@controller('/user')
export class UserController {
    @inject()
    private userService;

    @post()
    async login(ctx): Promise<void> {
        const { username, password } = ctx.params;
        const user: User = await this.userService.login({
            username,
            password,
        });
        
        ctx.body = {
            success: true, 
            message: 'OK'
        };
  }
}
