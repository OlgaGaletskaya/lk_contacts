import { makeAutoObservable } from "mobx";

export interface IUser{
    id: number;
    login: string;
    password: string;
}
export default class UserStore {

    _user: IUser[]= [
        {id:1, login:'admin', password:'1234'},
        {id:2, login:'user', password:'1234'},
    ];
    _userId: number;
    constructor() {
        this._userId = 0
        makeAutoObservable(this)
    }
    public login = (login: string, password: string) => {
        const user = this._user.map(e =>
            {
                if(e.login===login && e.password===password){
                    this._userId = e.id
                }
            }

        )

    }
    public logout = () => {
        this._userId = 0
    }
    
    get userId(){
        return this._userId
    }
    
    get user(){
        return this._user
    }
    
}