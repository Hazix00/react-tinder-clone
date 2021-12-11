import http from "../http-common"
import Person from "../models/person.model"

export default class PeopleService {

    endpoint = "/cards"

    getAll = () => http.get<Array<Person>>(this.endpoint)

    get = (id: string) => http.get<Person>(`${this.endpoint}/${id}`)

    create = (data: Person) => http.post<Person>(this.endpoint, data)

    update = (data: Person, id: any) => http.put<any>(`${this.endpoint}/${id}`, data)

    delete = (id: any) => http.delete<any>(`${this.endpoint}/${id}`)

}