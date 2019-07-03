/**
 * 接口
 * @author Philip
 */

export interface Scanner {
    ip: string;
    ports: JSON;
}

/**
 * 用户角色实体
 * @Interface
 */
export interface Role {
    name: stirng;
}

/**
 * 用户实体
 * @Interface
 */
export interface User {
    id: number;
    name: string;
    nickname: string;
    avatar: string;
    email: string;
    phone: string;
    role: Role;
}

/**
 * 内容实体
 * @Interface
 */
export interface Content {
    title: string;
    author: User;
    content: string
    keywords: string;
}
