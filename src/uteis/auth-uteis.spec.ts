import { CanActivate } from '@angular/router';
import { AuthGuard } from './auth-uteis';
describe('Auth-uteis', () => {
    let mockAuthService;
    let mockRouter;
    let component;


    beforeEach(() => {
        mockAuthService = jasmine.createSpyObj('AuthService', ['isToken']);
        mockRouter = jasmine.createSpyObj('Router', ['navigate']);

        let component = new AuthGuard(mockAuthService, mockRouter);
    });

    it('shoud create {AuthGuard}', () => {
        expect((component) => {
        }).not.toBeNull();
    });

    it('shoud execute {canActivate}', () => {
        mockAuthService.isToken = true;
        expect(() => {
            component.CanActivate();
        }).not.toThrow();
    });

});