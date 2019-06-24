/**
 * 内容
 * @author Philip
 */
import { provide, inject } from 'midway';

@provide()
export default class ContentService {
    @inject()
    protected ctx;
  
    /**
     * 查询
     * @
     */
    protected async query () {
    
    }
  
    /**
     * 根据 Id 查询
     * @
     */
    protected async queryById () {
    
    }
}
