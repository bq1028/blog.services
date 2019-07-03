/**
 * 内容接口
 * @author Philip
 */
import { controller, get, inject, provide } from 'midway';
import { Content, ContentListItem } from '../../interface';

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
        const { Content } = ctx.params.id;
        
        const result = await this.userService.login({
            username,
            password,
        });
        
        if (result.success) {
            ctx.body = {
                data: result.data,
                total: result.total,
            };
        } else {
            ctx.body = {
                msg: result.msg,
            };
        }
    }
}
