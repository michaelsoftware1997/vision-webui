import LoginHelper from './main/login/login';
import MenuView from './main/menu/MenuView';
import ContentView from './main/content/ContentView';
import './jui/juiLoader';
import './actions';
import './main/loading/loading';
import './main/overlay/overlay';
import './styles/general.scss';
import Promise from 'promise-polyfill';
import addHeadElement from './utils/addHeadElement';


let server = window.location.protocol + '//' + window.location.hostname + ':3000';


window.ready(function () {
    addHeadElement(server + '/socket.io/socket.io.js', 'JS', () => {
        window.socket = io(server);

        if (!window.Promise) {
            window.Promise = Promise;
        }

        let loginHelper = new LoginHelper();
        let menuView = new MenuView();
        let contentView = new ContentView();

        loginHelper.on('login', (data) => {
            menuView.load();
            contentView.show();
            console.log(window.user);
        });
    } );
});