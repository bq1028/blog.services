/**
 * 用户
 * @author Philip
 */
import { provide, inject } from 'midway';

@provide()
export default class UserService {
    @inject()
    protected ctx;
  
    /**
     * 登陆
     * @
     */
    protected async login () {
    
    }
  
    /**
     * 远端登陆
     * @
     */
    protected async loginRemote () {
    
    }
}
