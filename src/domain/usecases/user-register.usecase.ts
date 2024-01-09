import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { AccessModel } from '../models/access.model';
import { UserRepository } from '../repositories/user.repository';

export class UserRegisterUseCase implements UseCase<{ name: string, email: string; password: string }, AccessModel> {

    constructor(private userRepository: UserRepository) { }

    execute(
        params: {name: string, email: string; password: string },
    ): Observable<AccessModel> {
        return this.userRepository.register(params);
    }
}