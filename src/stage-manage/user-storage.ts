import { atomWithStorage } from 'jotai/utils'
interface IUser{
    _id : string;
    firstName: string;
    lastName: string;
    email: string;
}
export const UserInit = atomWithStorage<IUser | null>('user', null)
