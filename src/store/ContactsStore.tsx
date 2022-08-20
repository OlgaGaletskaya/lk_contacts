import { makeAutoObservable, observable } from "mobx";

export interface IContact{
    id: number;
    name: string;
    surname: string;
    number: string; 
    email: string;
    userId: number;
}

export default class ContactsStore{
    _contact: IContact[] 
    _changeContact: boolean
    _moreAboutContact: number
    _changingContact:IContact
    constructor(){
        this._contact=[
            {id:0, name:'', surname:'', number:'', email: "", userId:0},
            {id:1, name:'Leanne', surname:'Graham', number:'1-770-736-8031 x56442', email: "Sincere@april.biz", userId:1},
            {id:2, name:'Ervin', surname:'Howell', number:'010-692-6593 x09125', email:'Shanna@melissa.tv', userId:1},
            {id:3, name:'Clementine ', surname:'Bauch ', number:'1-463-123-4447', email:'Nathan@yesenia.net', userId:1},
            {id:4, name:'Patricia ', surname:'Lebsack', number:'493-170-9623 x156', email:'Julianne.OConner@kory.org', userId:1},
        ]
        this._changeContact = false
        this._moreAboutContact = 0
        this._changingContact = {id:0, name:'', surname:'', number:'', email: "", userId:0}
        makeAutoObservable(this)
    }
    get changingContact(){
        return this._changingContact
    }
    public setChangingContact = (e: IContact) => {
        this._changingContact = e
    }
    public addContact = (e:IContact) => {
        this._contact.push(e)
    }
    public deleteContact = (id:number) => {
        if (id === this._moreAboutContact){
            this._changeContact = true
            this._moreAboutContact = 0
        }
        this._contact = this._contact.filter(e => e.id !== id)
    }
    public getUserContact = (id:number) => {
        return(this._contact.filter(contact => contact.userId === id))
    }
    public setChangeContact(bool: boolean){
        this._changeContact = bool
    }
    public changeMoreAboutContact = (id:number) => {
        this._moreAboutContact = id
    }
    get changeContact(){
        return this._changeContact
    }
    get moreAboutContact(){
        return this._moreAboutContact
    }
    get contact(){
        return this._contact
    }
}

