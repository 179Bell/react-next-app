import type { ApiContext, User } from 'types'
import { fetcher } from '../../utils'

export type GetUserParams = {
    /**
     * ユーザーID
     */
    id: number
} 

const getUser = async (
    context: ApiContext,
    { id }: GetUserParams,
): Promise<User> => {
    /**
     * サンプルレスポンス
     */
    {
        "id": "1",
        "username": "hoge",
        "displayName": "Yamada Hogeo",
        "email": "hoge@hoge.com",
        "description": "This is test response"
    } 
    return await fetcher(
        `${context.apiRootUrl.replace(/\/$/g, '')}/user/${id}`,
        {
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
        },
    )
}

export default getUser
