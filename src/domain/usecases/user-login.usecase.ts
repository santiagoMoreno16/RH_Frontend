import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { AccessModel } from '../models/access.model';
import { UserRepository } from '../repositories/user.repository';

export class UserLoginUseCase implements UseCase<{ email: string; password: string }, AccessModel> {

    constructor(private userRepository: UserRepository) { }

    execute(
       params: { email: string, password: string },
    ): Observable<AccessModel> {
        return this.userRepository.login(params);
    }
}