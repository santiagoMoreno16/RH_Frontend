import { Observable } from 'rxjs';
import { UseCase } from 'src/base/use-case';
import { AccessModel } from '../models/access.model';
import { UserRepository } from '../repositories/user.repository';

export class GetUserProfileUseCase implements UseCase<void, AccessModel> {

    constructor(private userRepository: UserRepository) { }

    execute(): Observable<AccessModel> {
        return this.userRepository.getUserProfile();
    }
}