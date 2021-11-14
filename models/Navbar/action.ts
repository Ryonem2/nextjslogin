export const SET_LOGIN = 'app/navbar/SET_LOGIN'

export function login(id:number, name:string, sername:string) {
    return {
        type: SET_LOGIN,
        payload: {
            id,
            name,
            sername
        }
    }
}