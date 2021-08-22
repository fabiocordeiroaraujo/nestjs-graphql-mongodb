import { User } from "src/user/schema/user.schema";

export default class TestUtil {
    static giveAMeValidUser(): User {
        const user = new User();
        user.name = 'validName';
        user.email = 'valid@email.com';
        return user;
    }
}