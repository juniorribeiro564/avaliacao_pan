import { Observable } from 'rxjs/Observable';
import { ListRepoComponent } from './lista-repo';
describe('listaRepo', () => {

    let mockSnackBar;
    let mock_http;
    let component;


    beforeEach(() => {
        mockSnackBar = jasmine.createSpyObj('MatSnackBar', ['open']);
        mock_http = jasmine.createSpyObj('HttpClient', ['get']);
        component = new ListRepoComponent(mockSnackBar, mock_http);
    });
    it ('shoud created {ListRepoComponent}', () => {
        expect((compoent) => {
        }).not.toThrow();
    });

    it('should execute {ngOnInit}', () => {
        expect(() => {
            component.ngOnInit();
        }).not.toThrow();
    });

    it('should execute {getUserRepo}', () => {
        mock_http.get.and.returnValue(('1'));
        expect(() => {
            component.getUserRepo();
        }).not.toThrow();
    });

});