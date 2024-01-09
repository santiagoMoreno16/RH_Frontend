import { Mapper } from 'src/base/mapper';
import { UserModel } from 'src/domain/models/access.model';
import { UserEntity } from '../entities/user-entity';


export class UserImplementationRepositoryMapper extends Mapper<UserEntity, UserModel> {
    mapFrom(param: UserEntity): UserModel {
        return {
            id: param.id,
            name: param.name,
            email: param.email,
            password: param.password,
            role: param.role,
            img: param.img
        };
    }
    mapTo(param: UserModel): UserEntity {
        return {
            id: param.id,
            name: param.name,
            email: param.email,
            password: param.password,
            role: param.role,
            img: param.img
        }
    }
}