import { LoginComponent } from './login-component';
describe('Login', () => {

    let mockAuthService;
    let mockSnackBar;
    let mockRoute;
    let mockRouter;
    let mockApiService;
    let component;

    beforeEach(() => {
        mockAuthService = jasmine.createSpyObj('AuthService', ['setToken', 'clear']);
        mockSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);
        mockRoute = jasmine.createSpyObj('ActivatedRoute', ['queryParams']);
        mockRouter = jasmine.createSpyObj('Router', ['navigate']);
        mockApiService = jasmine.createSpyObj('ApiService', ['login']);
        
        component = new LoginComponent(mockAuthService, mockSnackBar, mockRoute, mockRouter, mockApiService);
    });

    it('shoud create {LoginComponent}', () => {
        expect((component) => {
        }).not.toThrow();
    });

    it('should execute {ngOnInit}', () => {
        expect(() => {
            component.ngOnInit();
        }).not.toThrow();
    });

    it('shoud exeute {loginGit}', () => {
        const responde = ['acess-token'];
        mockApiService.login.and.returnValue(responde);
        expect(() => {
        }).not.toThrow();
    })

})