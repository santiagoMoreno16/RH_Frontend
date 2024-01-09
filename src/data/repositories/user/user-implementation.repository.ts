import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient } from '@angular/common/http';
import { UserEntity } from './entities/user-entity';
import { UserImplementationRepositoryMapper } from './mappers/user-repository.mapper';
import { UserRepository } from 'src/domain/repositories/user.repository';
import { UserModel } from 'src/domain/models/access.model';
import { Injectable } from '@angular/core';

import * as url from '../../../domain/uris/uris';

@Injectable({
    providedIn: 'root',
})
export class UserImplementationRepository extends UserRepository {

    public api_login: string = url.API_LOGIN
    public api_register: string = url.API_REGISTER
    public api_auth: string = url.API_AUTH

    userMapper = new UserImplementationRepositoryMapper();

    constructor(private http: HttpClient) {
        super();
    }

    login(params: {email: string, password: string}): Observable<UserModel> {
        return this.http
            .post<UserEntity>(this.api_login, {params})
            .pipe(map(this.userMapper.mapFrom));
    }
    register(params: {name: string, email: string, password: string}): Observable<UserModel> {
       return this.http
            .post<UserEntity>(this.api_register, {params})
            .pipe(map(this.userMapper.mapFrom));
    }
    getUserProfile(): Observable<UserModel>{
        return this.http.get<UserEntity>(this.api_auth).pipe(
            map(this.userMapper.mapFrom));
    }
}