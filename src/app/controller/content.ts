/**
 * 内容接口
 * @author Philip
 */
import { controller, get, inject, provide } from 'midway';

@provide()
@controller('/content')
export default class ContentController {
    @inject()
    private contentService;
    
    @get('/')
    async getContentList(ctx) : Promise<void> {
        
    }
    
    @get('/:id')
    async getContent : Promise<void> {
        
    }
}
